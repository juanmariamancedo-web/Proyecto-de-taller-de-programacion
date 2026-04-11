<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia("/", "Welcome");

Route::inertia('/quienes-somos', 'QuienesSomos');

Route::inertia('/comercializacion', 'Comercializacion');

Route::inertia('/contacto', 'InformacionDeContactos');

Route::inertia('/terminos-y-usos', 'TerminosYUsos');

Route::inertia('/catalogo', 'CatalogoDeProductos');

Route::inertia('/consultas', 'Consultas');

Route::inertia('/registro-de-clientes', 'RegistroDeClientes');

Route::inertia('/formulario-de-login', 'FormularioDeLogin');