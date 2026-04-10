<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/quienes-somos', function () {
    return view('quienesSomos');
});

Route::get('/comercializacion', function () {
    return view('comercializacion');
});

Route::get('/contacto', function () {
    return view('informacionDeContactos');
});

Route::get('/terminos-y-usos', function () {
    return view('terminosYUsos');
});

Route::get('/catalogo', function () {
    return view('catalogoDeProductos');
});

Route::get('/consultas', function () {
    return view('consultas');
});

Route::get('/registro-de-clientes', function () {
    return view('registroDeClientes');
});

Route::get('/formulario-de-login', function () {
    return view('formularioDeLogin');
});

