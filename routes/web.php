<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductsController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/quienes-somos', function () {
    return Inertia::render('QuienesSomos');
});

Route::get('/comercializacion', function () {
    return Inertia::render('Comercializacion');
});

Route::get('/contacto', [ContactController::class, 'showForm']);

Route::post('/contacto', [ContactController::class, 'send']);


Route::get('/terminos-y-usos', function () {
    return Inertia::render('TerminosYUsos');
});

Route::get('/catalogo', [ProductsController::class, "showProducts"]);

Route::get('/registro-de-clientes', [AuthController::class, "showRegister"]);

Route::post("/registro-de-clientes", [AuthController::class, "register"]);


Route::get('/formulario-de-login', [AuthController::class, "showLogin"]);

Route::post("/formulario-de-login", [AuthController::class, "login"]);