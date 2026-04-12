<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    // public function showLogin() {}
    public function login() {
        return Inertia::render('SuccessLogin');
    }

    // public function showRegister() {}
    public function register() {
        return Inertia::render('SuccessRegister');
    }

    public function logout() {}
}
