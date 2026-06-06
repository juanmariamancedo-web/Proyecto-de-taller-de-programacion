<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use App\Models\ItemOrder;
use App\Models\Product;
use Inertia\Inertia;
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\MercadoPagoConfig;


class OrderController extends Controller
{
    private int $limite = 6;

    public function getLimite(): int
    {
        return $this->limite;
    }

    public function setLimite(int $limite): void
    {
        $this->limite = $limite;
    }

    public function payOrder(Request $request, $id){
        MercadoPagoConfig::setAccessToken(config('services.mercadopago.token'));

        $order = Order::with('itemOrders.product')->findOrFail($id);

        // Solo se puede pagar si está en estado created
        if($order->state !== 'created'){
            return response()->json([
                "error" => "La orden no puede ser pagada en su estado actual: {$order->state}"
            ], 422);
        }

        // Verificar stock
        foreach($order->itemOrders as $item){
            $producto = Product::findOrFail($item->product_id);

            if($producto->stock < $item->amount){
                return response()->json([
                    "error" => "Stock insuficiente para {$producto->name}. Stock disponible: {$producto->stock}"
                ], 422);
            }
        }

        $items = $order->itemOrders->map(fn($item) => [
            "title"      => $item->product->name,
            "quantity"   => $item->amount,
            "unit_price" => $item->unit_price
        ])->toArray();

        $client = new PreferenceClient();

        $preference = $client->create([
            "items" => $items,
            "back_urls" => [
                "success" => env('APP_URL')."/success",
                "failure" => env('APP_URL')."/failure",
                "pending" => env('APP_URL')."/pending"
            ],
            "external_reference" => (string) $order->id
        ]);

        return response()->json([
            "init_point" => $preference->init_point
        ]);
    }

    public function createOrder(Request $request){
        // Verificar stock
        foreach ($request->input("carItems") as $item) {
            $producto = Product::findOrFail($item["producto"]["id"]);

            if ($producto->stock < $item["cantidad"]) {
                return response()->json([
                    "error" => "Stock insuficiente para {$producto->name}. Stock disponible: {$producto->stock}"
                ], 422);
            }
        }

        $order = Order::create([
            "state"   => "created",
            "user_id" => Auth::id()
        ]);

        // Crear items ANTES de llamar payOrder
        foreach ($request->input("carItems") as $item) {
            $producto = Product::findOrFail($item["producto"]["id"]);

            ItemOrder::create([
                "amount"     => $item["cantidad"],
                "product_id" => $item["producto"]["id"],
                "unit_price" => $producto["price"],
                "order_id"   => $order["id"]
            ]);
        }

        return $this->payOrder($request, $order["id"]);
    }

    public function failure(Request $request)
    {
        $orderId = $request->query('external_reference');
        $order = Order::findOrFail($orderId);

        $order->update(['state' => 'failed']);

        return inertia('Orders/Failure', [
            'order' => $order->load('itemOrders.product')
        ]);
    }

    public function pending(Request $request)
    {
        $orderId = $request->query('external_reference');
        $order = Order::findOrFail($orderId);

        $order->update(['state' => 'pending']);

        return inertia('Orders/Pending', [
            'order' => $order->load('itemOrders.product')
        ]);
    }

    public function success(Request $request)
    {
        $paymentId = $request->query('payment_id');
        $orderId = $request->query('external_reference');

        MercadoPagoConfig::setAccessToken(config('services.mercadopago.token'));
        
        $client = new PaymentClient();
        $payment = $client->get($paymentId);

        //por las dudas
        if ($payment->status !== 'approved') {
            return redirect('/failure');
        }

        $order = Order::findOrFail($orderId);

        if ($order->state === 'paid') {
            return inertia('Orders/Success', [
                'order' => $order->load('itemOrders.product')
            ]);
        }

        // Verificar stock
        foreach ($order->itemOrders as $item) {
            $producto = Product::findOrFail($item->product_id);

            if ($producto->stock < $item->amount) {
                $order->update(['state' => 'stock_error']);
                return inertia('Orders/StockError', [
                    'order' => $order->load('itemOrders.product')
                ]);
            }
        }

        // Restar stock y marcar como pagada
        foreach ($order->itemOrders as $item) {
            $producto = Product::findOrFail($item->product_id);
            $producto->stock -= $item->amount;
            $producto->save();
        }

        $order->state = 'paid';
        $order->save();

        return inertia('Orders/Success', [
            'order' => $order->load('itemOrders.product')
        ]);
    }

    private function ordenes(Request $request){
        $page = (int) $request->get('page', 1);
        $sort = $request->get('sort', '');
        $search = $request->get('search', '');

        $query = match($sort){
            "pedidoAsc"   => Order::orderBy('id', 'asc'),
            "pedidoDesc"  => Order::orderBy('id', 'desc'),
            "totalAsc"    => Order::orderByRaw('(SELECT SUM(unit_price * amount) FROM item_orders WHERE item_orders.order_id = orders.id) asc'),
            "totalDesc"   => Order::orderByRaw('(SELECT SUM(unit_price * amount) FROM item_orders WHERE item_orders.order_id = orders.id) desc'),
            "stateAsc"    => Order::orderByRaw("FIELD(state, 'created', 'paid', 'delivered') ASC"),
            "stateDesc"   => Order::orderByRaw("FIELD(state, 'created', 'paid', 'delivered') DESC"),
            "nameAsc"  => Order::join('users', 'orders.user_id', '=', 'users.id')->orderBy('users.name', 'asc')->select('orders.*'),
            "nameDesc" => Order::join('users', 'orders.user_id', '=', 'users.id')->orderBy('users.name', 'desc')->select('orders.*'),
            default       => Order::query()
        };

        if($search){
            $query = $query->whereHas('user', function($q) use ($search){
                $q->where('name', 'LIKE', "%{$search}%");
            });
        }

        return $query;
    }

    public function showMyOrders(Request $request){
        $page = (int) $request->get('page', 1);

        $query = $this->ordenes($request)->where('user_id', auth()->id());

        return Inertia::render('Ordenes', [
            'ordenes' => (clone $query)
                ->with(['itemOrders.product', 'user'])
                ->offset(($page - 1) * $this->getLimite())
                ->limit($this->getLimite())
                ->get(),
            'paginas' => ceil((clone $query)->count() / $this->getLimite()),
            'pagina'  => $page,
            'sort'    => $request->get('sort', ''),
            'search'  => $request->get('search', '')
        ]);
    }

    public function showOrders(Request $request) {
        $page = $request->input("page", 1);
        $query = $this->ordenes($request);

        return Inertia::render("Admin/Ordenes", [
            'ordenes' => (clone $query)
                ->with(['itemOrders.product', 'user'])
                ->offset(($page - 1) * $this->getLimite())
                ->limit($this->getLimite())
                ->get(),
            'paginas' => ceil((clone $query)->count() / $this->getLimite()),
            'pagina'  => $page,
            'sort'    => $request->input("sort", ""),
            'search'  => $request->input("search", "")
        ]);  
    }

    public function showOrder(Request $request, $id){
        $sort = $request->input('sort', '');

        $order = Order::with([
            'itemOrders' => function($q) use ($sort) {
                match($sort){
                    "idAsc"         => $q->orderBy('id', 'asc'),
                    "idDesc"        => $q->orderBy('id', 'desc'),
                    "amountAsc"     => $q->orderBy('amount', 'asc'),
                    "amountDesc"    => $q->orderBy('amount', 'desc'),
                    "priceAsc"      => $q->orderBy('unit_price', 'asc'),
                    "priceDesc"     => $q->orderBy('unit_price', 'desc'),
                    "subtotalAsc"   => $q->orderByRaw('unit_price * amount ASC'),
                    "subtotalDesc"  => $q->orderByRaw('unit_price * amount DESC'),
                    "nameAsc"       => $q->join('products', 'item_orders.product_id', '=', 'products.id')->orderBy('products.name', 'asc')->select('item_orders.*'),
                    "nameDesc"      => $q->join('products', 'item_orders.product_id', '=', 'products.id')->orderBy('products.name', 'desc')->select('item_orders.*'),
                    default         => $q
                };
            },
            'itemOrders.product',
            'user'
        ])->findOrFail($id);

        return Inertia::render('Order', [
            'orden' => $order,
            'sort'  => $sort
        ]);
    }

    public function entregar(Order $order) {
        if ($order->state !== 'paid') {
            return back()->withErrors(['order' => 'La orden debe estar pagada para ser entregada.']);
        }

        $order->update(['state' => 'delivered']);

        return back();
    }
}
