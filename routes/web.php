<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;

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

Route::get('/contacto', function () {
    return Inertia::render('InformacionDeContactos');
});

Route::post('/contacto', [ContactController::class, 'send']);


Route::get('/terminos-y-usos', function () {
    return Inertia::render('TerminosYUsos');
});

Route::get('/catalogo', function () {
    return Inertia::render('CatalogoDeProductos');
});

Route::get('/registro-de-clientes', function () {
    return Inertia::render('RegistroDeClientes');
});

Route::post("/registro-de-clientes", [AuthController::class, "register"]);


Route::get('/formulario-de-login', function () {
    return Inertia::render('FormularioDeLogin');
});

Route::post("/formulario-de-login", [AuthController::class, "login"]);