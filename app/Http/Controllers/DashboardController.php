<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;
use App\Models\Product;
use Illuminate\Support\Facades\DB;


class DashboardController extends Controller
{
    public function index(){
        $totalClients  = User::where("role", "client")->Count();
        $totalPedidosPendientes = Order::where("state", "paid")->count();
        $totalPedidosEntregados = Order::where("state", "delivered")->count();
        $ultimasOrdenes = Order::with(['user', 'itemOrders'])
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($order) {
                $order->total = $order->itemOrders->sum(function ($item) {
                    return $item->amount * $item->unit_price;
                });
                return $order;
            });

        $totalRevenue = DB::table('item_orders')
            ->join('orders', 'item_orders.order_id', '=', 'orders.id')
            ->where('orders.state', 'paid')
            ->select(DB::raw('SUM(item_orders.amount * item_orders.unit_price) as total'))
            ->value('total');

        $totalOrders = DB::table('orders')
            ->where('state', 'paid')
            ->count();

        $averageTicket = $totalOrders > 0 ? $totalRevenue / $totalOrders : 0;

        $topProducts = Product::join('item_orders', 'products.id', '=', 'item_orders.product_id')
            ->join('orders', 'item_orders.order_id', '=', 'orders.id')
            ->where('orders.state', 'selfless')
            ->orWhere('orders.state', 'paid')
            ->select(
                'products.id',
                'products.name',
                DB::raw('SUM(item_orders.amount) as total_sold')
            )
            ->groupBy('products.id', 'products.name')
            ->orderByDesc('total_sold')
            ->limit(5)
            ->get();


        return Inertia::render("Admin/Admin", [
            "totalClients" => $totalClients,
            "totalPedidosPendientes" => $totalPedidosPendientes,
            "totalPedidosEntregados" => $totalPedidosEntregados,
            "topProductos" => $topProducts,
            "averageTicket" => $averageTicket,
            "ultimasOrdenes" => $ultimasOrdenes
        ]);
    }
}
