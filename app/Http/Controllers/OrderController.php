<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use App\Models\ItemOrder;
use App\Models\Product;
use Inertia\Inertia;
use MercadoPago\Client\Preference\PreferenceClient;
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
                "success" => config('APP_URL')."/success",
                "failure" => config('APP_URL')."/failure",
                "pending" => config('APP_URL')."/pending"
            ],
            "external_reference" => $order["id"]
        ]);

        return response()->json([
            "init_point" => $preference->init_point
        ]);
    }
}
