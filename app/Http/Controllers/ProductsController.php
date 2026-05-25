<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Product;
use Cloudinary\Cloudinary;


class ProductsController extends Controller
{
    // private $productos = [
    //     [
    //         "id" => 1,
    //         "name" => "Down Pipe E Intermedio Amarok V6 Extreme 3.0 Acero Inox",
    //         "img" => "/imgs/downpipe-amarok-v6.webp",
    //         "price" => 763000,
    //     ],
    //     [
    //         "id" => 2,
    //         "name" => "Down Pipe Volkswagen Amarok - 2.0 Bitdi 180cv",
    //         "img" => "/imgs/downpipe-amarok-2.0.webp",
    //         "price" => 225000,
    //     ],
    //     [
    //         "id" => 3,
    //         "name" => "Downpipe Hilux 2.8 Y 2.4",
    //         "img" => "/imgs/downpipe-hilux.webp",
    //         "price" => 197000,
    //     ],
    //     [
    //         "id" => 4,
    //         "name" => "Down Pipe Chevrolet S-10 2.8 Td 200cv",
    //         "img" => "/imgs/downpipe-s10.webp",
    //         "price" => 235000,
    //     ],
    //     [
    //         "id" => 5,
    //         "name" => "Down Pipe Volkswagen Vento - 2.0t",
    //         "img" => "/imgs/downpipe-vento-2.0.webp",
    //         "price" => 247170,
    //     ],
    //     [
    //         "id" => 6,
    //         "name" => "Downpipe - Escape Fiat Toro",
    //         "img" => "/imgs/downpipe-fiat-toros.webp",
    //         "price" => 180000,
    //     ]
    // ];

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