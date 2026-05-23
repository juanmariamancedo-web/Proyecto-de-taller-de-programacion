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

        $order = Order::create([
            "state" => "created",
            "user_id" => Auth::id()
        ]);

        // 2. Construir items (desde DB, no desde frontend)
        $items = [];

        foreach ($request->input("carItems") as $item) {
            $producto = Product::findOrFail($item["producto"]["id"]);

             $items[] = [
                "title" => $producto["name"],
                "quantity" => $item["cantidad"],
                "unit_price" =>  $producto["price"]
            ];

            ItemOrder::create([
                "amount" => $item["cantidad"],
                "product_id" => $item["producto"]["id"],
                "unit_price" => $producto["price"],
                "order_id" => $order["id"]
            ]);
        }

        // 3. Crear preferencia
        $client = new PreferenceClient();

        $preference = $client->create([
            "items" => $items,
            "back_urls" => [
                "success" => env('APP_URL')."/success",
                "failure" => env('APP_URL')."/failure",
                "pending" => env('APP_URL')."/pending" 
            ],
            // "auto_return" => "approved",
            "external_reference" => (string) $order["id"]
        ]);

        return response()->json([
            "init_point" => $preference->init_point
        ]);
    }

    public function success(Request $request)
    {
        $paymentId = $request->query('payment_id');

        // Consultar el pago directamente a la API de MP
        MercadoPagoConfig::setAccessToken(config('services.mercadopago.token'));
        
        $client = new PaymentClient();
        $payment = $client->get($paymentId); // ← datos reales de MP, no de la URL

        // Verificar que realmente esté aprobado
        if ($payment->status !== 'approved') {
            return redirect()->route('failure');
        }

        // Usar external_reference del pago real, no de la URL
        $order = Order::findOrFail($payment->external_reference);
        
        // Verificar que el monto coincida
        $totalEsperado = $order->itemOrders->sum(fn($item) => $item->unit_price * $item->amount);
        
        if ($payment->transaction_amount != $totalEsperado) {
            return redirect()->route('failure');
        }

        $order->update([
            'state' => 'paid',
        ]);

       return inertia('Orders/Success', [
            'order' => $order->load('itemOrders.product')
        ]);
    }

    public function showOrders(Request $request) {
        $page = (int) $request->get('page', 1);
        $limite = 6;

        return Inertia::render("Admin/Ordenes", [
            'ordenes' => Order::with(['itemOrders.product', 'user'])
                ->offset(($page - 1) * $limite)
                ->limit($limite)
                ->get(),
            'paginas' => ceil(Order::count() / $limite),
            "pagina" => $page
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
