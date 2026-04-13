<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;


class ProductsController extends Controller
{
    public function showProducts() {

        $productos = [
            [
                "id" => 1,
                "name" => "Down Pipe E Intermedio Amarok V6 3.0 Acero Inox",
                "img" => "/imgs/downpipe-amarok-v6.webp",
                "price" => 763000,
                "link" => ""
            ],
            [
                "id" => 2,
                "name" => "Down Pipe Volkswagen Amarok - 2.0 Bitdi 180cv",
                "img" => "/imgs/downpipe-amarok-2.0.webp",
                "price" => 225000,
                "link" => ""
            ],
            [
                "id" => 3,
                "name" => "Downpipe Hilux 2.8 Y 2.4",
                "img" => "/imgs/downpipe-hilux.webp",
                "price" => 197000,
                "link" => ""
            ],
            [
                "id" => 4,
                "name" => "Down Pipe Chevrolet S-10 2.8 Td 200cv",
                "img" => "/imgs/downpipe-s10.webp",
                "price" => 235000,
                "link" => ""
            ],
            [
                "id" => 5,
                "name" => "Down Pipe Volkswagen Vento - 2.0t",
                "img" => "/imgs/downpipe-vento-2.0.webp",
                "price" => 247170,
                "link" => ""
            ],
            [
                "id" => 6,
                "name" => "Downpipe / Escape Fiat Toro",
                "img" => "/imgs/downpipe-fiat-toros.webp",
                "price" => 180000,
                "link" => ""
            ]
        ];

        return Inertia::render('CatalogoDeProductos', [
            'productos' => $productos
        ]);
    }
}
