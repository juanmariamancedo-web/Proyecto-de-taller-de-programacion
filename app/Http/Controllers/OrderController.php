<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use App\Models\ItemOrder;
use App\Models\Product;
use Inertia\Inertia;


class OrderController extends Controller
{
    public function createOrder(Request $request){
        $order = Order::create([
            "state" => "created",
            "user_id" => Auth::id()
        ]);

        foreach ($request->input("carItems") as $item) {
            $producto = Product::findOrFail($item["producto"]["id"]);

            ItemOrder::create([
                "amount" => $item["cantidad"],
                "product_id" => $item["producto"]["id"],
                "unit_price" => $producto["price"],
                "order_id" => $order["id"]
            ]);

            return Inertia::render("PagarOrden");
        }

    }
}
