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
    public function createOrder(Request $request){
        MercadoPagoConfig::setAccessToken(config('services.mercadopago.token'));

        // Verificar stock antes de crear la orden
        foreach ($request->input("carItems") as $item) {
            $producto = Product::findOrFail($item["producto"]["id"]);

            if ($producto->stock < $item["cantidad"]) {
                return response()->json([
                    "error" => "Stock insuficiente para {$producto->name}. Stock disponible: {$producto->stock}"
                ], 422);
            }
        }

        $order = Order::create([
            "state" => "created",
            "user_id" => Auth::id()
        ]);

        $items = [];

        foreach ($request->input("carItems") as $item) {
            $producto = Product::findOrFail($item["producto"]["id"]);

            $items[] = [
                "title" => $producto["name"],
                "quantity" => $item["cantidad"],
                "unit_price" => $producto["price"]
            ];

            ItemOrder::create([
                "amount" => $item["cantidad"],
                "product_id" => $item["producto"]["id"],
                "unit_price" => $producto["price"],
                "order_id" => $order["id"]
            ]);
        }

        $client = new PreferenceClient();

        $preference = $client->create([
            "items" => $items,
            "back_urls" => [
                "success" => env('APP_URL')."/success",
                "failure" => env('APP_URL')."/failure",
                "pending" => env('APP_URL')."/pending" 
            ],
            "external_reference" => (string) $order["id"]
        ]);

        return response()->json([
            "init_point" => $preference->init_point
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

    public function showOrders(Request $request) {
        $page = (int) $request->get('page', 1);
        $limite = 6;
        $sort = $request->get('sort', '');
        $search = $request->get('search', '');

        $query = match($sort){
            "pedidoAsc"  => Order::orderBy('id', 'asc'),
            "pedidoDesc" => Order::orderBy('id', 'desc'),
            "totalAsc"   => Order::orderByRaw('(SELECT SUM(unit_price * amount) FROM item_orders WHERE item_orders.order_id = orders.id) asc'),
            "totalDesc"  => Order::orderByRaw('(SELECT SUM(unit_price * amount) FROM item_orders WHERE item_orders.order_id = orders.id) desc'),
            "stateAsc"   => Order::orderByRaw("FIELD(state, 'created', 'paid', 'delivered') ASC"),
            "stateDesc"  => Order::orderByRaw("FIELD(state, 'created', 'paid', 'delivered') DESC"),
            default      => Order::query()
        };

        if($search){
            $query = $query->whereHas('user', function($q) use ($search){
                $q->where('name', 'LIKE', "%{$search}%");
            });
        }

        return Inertia::render("Admin/Ordenes", [
            'ordenes' => $query
                ->with(['itemOrders.product', 'user'])
                ->offset(($page - 1) * $limite)
                ->limit($limite)
                ->get(),
            'paginas' => ceil(Order::count() / $limite),
            'pagina'  => $page,
            'sort'    => $sort,
            'search'  => $search
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
