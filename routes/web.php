<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UsersController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProductsController::class, "welcome"]);

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

Route::middleware(['guest'])->group(function () {

    Route::get('/registro-de-clientes', [AuthController::class, "showRegister"]);

    Route::post("/registro-de-clientes", [AuthController::class, "register"]);

    Route::get('/formulario-de-login', [AuthController::class, "showLogin"])->name("login");

    Route::post("/formulario-de-login", [AuthController::class, "login"]); 
});
    
Route::get("/forgot-password", [AuthController::class, "showForgotPassword"]);
Route::post("/forgot-password", [AuthController::class, "showRequestForgottenPasswordCode"]);
Route::post("/requestForgottenPasswordCode", [AuthController::class, "requestForgottenPasswordCode"]);

Route::middleware(['auth', 'not.banned', 'verified.email'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::post("/crear-orden", [OrderController::class, "createOrder"]);
    
    Route::get('/success', [OrderController::class, 'success']);    
    Route::get('/failure', fn() => redirect('/catalogo')->with('error', 'El pago falló, intentá de nuevo.'));
    Route::get('/pending', fn() => redirect('/catalogo')->with('info', 'Tu pago está pendiente de confirmación.'));
    
    Route::get('/perfil', [UsersController::class, 'profile']);
    Route::put('/perfil', [UsersController::class, 'updateProfile']);

    
    Route::get('/perfil/password', function () {
        return Inertia::render('Password');
    });
    Route::put('/perfil/password', [UsersController::class, 'updatePassword']);

    Route::get("/perfil/email", function () {
        return Inertia::render("Email");
    });

    Route::post("/perfil/email", [UsersController::class, "updateEmail"]);
    Route::post("/perfil/verify-email", [UsersController::class, "verifyEmail"]);

});

Route::middleware(['auth', 'not.banned'])->group(function () {
    Route::get('/verificar-cuenta', fn() => Inertia::render('ShowVerifyAccount'));
    Route::post('/verificar-cuenta', [AuthController::class, 'verifyRegister']);
    Route::post('/verificar-cuenta/reenviar', [AuthController::class, 'resendVerifyCode']);
    Route::get("/ordenes", [OrderController::class, "showMyOrders"]);
    Route::get("/ordenes/{id}", [OrderController::class, "showOrder"]);
});

Route::get('/catalogo', [ProductsController::class, "showProducts"]);

Route::get("/catalogo/{name}", [ProductsController::class, "showProduct"]);


Route::prefix('admin')
    ->middleware(['auth', 'not.banned', 'verified.email', 'admin'])
    ->group(function () {

        // Route::get('/', function () {
        //     return Inertia::render('Admin');
        // });

        Route::get("/", [DashboardController::class, "index"]);

        Route::get("/catalogo", [ProductsController::class, "showProductAdmin"]);
        Route::post("/catalogo", [ProductsController::class, "newProduct"]);
        Route::put('/catalogo/{product}', [ProductsController::class, 'updateProduct'])->name('admin.catalogo.update');
        Route::delete('/catalogo/{product}', [ProductsController::class, 'destroyProduct'])->name('admin.catalogo.destroy');
        
        Route::get("/ordenes", [OrderController::class, "showOrders"]);
        Route::put('/ordenes/{order}/entregar', [OrderController::class, 'entregar'])->name('admin.ordenes.entregar');
        
        Route::get("/usuarios", [UsersController::class, "showUsers"]);
        Route::put("/usuarios/{user}/cambiar-role", [UsersController::class, "changeRol"]);
        Route::put('/usuarios/{user}/ban', [UsersController::class, 'toggleBan']);
});