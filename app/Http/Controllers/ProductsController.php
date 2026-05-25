<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Product;
use Cloudinary\Cloudinary;
use Illuminate\Support\Facades\DB;


class ProductsController extends Controller
{
    public function welcome(){
        $topProducts = Product::join('item_orders', 'products.id', '=', 'item_orders.product_id')
            ->join('orders', 'item_orders.order_id', '=', 'orders.id')
            ->where('orders.state', 'delivered')
            ->orWhere('orders.state', 'paid')
            ->select(
                'products.id',
                'products.name',
                'products.price',
                'products.image',
            )
            ->groupBy('products.id', 'products.name', 'products.price', 'products.image')
            ->limit(2)
            ->get();

        return Inertia::render("Welcome", [
            "destacados" => $topProducts
        ]);
    }

    public function showProducts(Request $request) {
        $page = (int) $request->get('page', 1);
        $limite = 6;

        return Inertia::render('CatalogoDeProductos', [
            'productos' => Product::offset(($page - 1) * $limite)->limit($limite)->get(),
            'paginas' => ceil(Product::count() / $limite),
            "pagina" => $page
        ]);        
    }

    function showProductAdmin(Request $request){
        $page = (int) $request->get('page', 1);
        $limite = 6;

        return Inertia::render('Admin/Catalogo', [
            'productos' => Product::offset(($page - 1) * $limite)->limit($limite)->get(),
            'paginas' => ceil(Product::count() / $limite),
            "pagina" => $page
        ]);  
    }
    
    // function obtenerProducto($name){
    //     foreach($this->productos as $producto){
    //         if ($producto["name"] === $name){
    //             return $producto;
    //         }
    //     }
    //     return null;
    // }

    public function showProduct($name){
        // $producto = $this->obtenerProducto(str_replace("%20", " ", $name));

        $producto = Product::where('name', str_replace("%20", " ", $name))->first();

        if (!$producto) {
            abort(404);
        }

        return Inertia::render("Producto", [
            "producto" => $producto
        ]);
    }

    public function newProduct(Request $request){
        $request->validate([
            'name'      => 'required|string|max:255|unique:products,name,' . $product->id,
            'price'     => 'required|numeric|min:0',
            'stock'     => 'required|integer|min:0',
            'low_stock' => 'required|integer|min:0',
            'image'     => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);
       
        $name = $request->input("name");
        $price = $request->input("price");
        $stock = $request->input("stock");
        $lowStock = $request->input("low_stock");
        $is_active = $request->input("is_active");
        
        $file = $request->file('image');

        $cloudinary = new Cloudinary([
            'cloud' => [
                'cloud_name' => env('CLOUDINARY_CLOUD_NAME'),
                'api_key'    => env('CLOUDINARY_API_KEY'),
                'api_secret' => env('CLOUDINARY_API_SECRET'),
            ],
        ]);

        $upload = $cloudinary->uploadApi()->upload($file->getRealPath());

        $url = $upload['secure_url'];


        Product::create([
            "name" => $name,
            "price" => $price,
            "stock" => $stock,
            "low_stock" => $lowStock,
            "is_active" => $is_active,
            "image" => $url
        ]);

        return redirect('/catalogo/' . $name);
    }

    public function updateProduct(Request $request, Product $product)
    {
        $request->validate([
            'name'      => 'required|string|max:255|unique:products,name,' . $product->id,
            'price'     => 'required|numeric|min:0',
            'stock'     => 'required|integer|min:0',
            'low_stock' => 'required|integer|min:0',
            'image'     => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $product->name      = $request->input('name');
        $product->price     = $request->input('price');
        $product->stock     = $request->input('stock');
        $product->low_stock = $request->input('low_stock');
        $product->is_active = $request->boolean('is_active');

        if ($request->hasFile('image')) {
            $cloudinary = new Cloudinary([
                'cloud' => [
                    'cloud_name' => env('CLOUDINARY_CLOUD_NAME'),
                    'api_key'    => env('CLOUDINARY_API_KEY'),
                    'api_secret' => env('CLOUDINARY_API_SECRET'),
                ],
            ]);

            $upload = $cloudinary->uploadApi()->upload($request->file('image')->getRealPath());
            $product->image = $upload['secure_url'];
        }

        $product->save();

        return back();
    }

    public function destroyProduct(Product $product){
        $product->delete();
        return back();
    }
}