<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CarritoItem;

class CarritoController extends Controller
{
    public function index(Request $request) {
        $items = CarritoItem::with('product')
            ->where('user_id', $request->user()->id)
            ->get();

        return response()->json($items);
    }

     // Recibe el carrito completo desde Redux y lo sincroniza
    public function sync(Request $request) {

        $user = $request->user();
        $items = $request->input('items'); // [{ producto_id, cantidad }]

        CarritoItem::where('user_id', $user->id)->delete();

        foreach ($items as $item) {
            CarritoItem::updateOrCreate(
                [
                    'user_id'    => $request->user()->id,
                    'product_id' => $item['producto_id'],
                ],
                [
                    'amount' => $item['cantidad']
                ]
            );
        }

        return response()->json(['message' => 'Carrito sincronizado']);
    }

    public function clear(Request $request) {
        CarritoItem::where('user_id', $request->user()->id)->delete();
        return response()->json(['message' => 'Carrito vaciado']);
    }
}
