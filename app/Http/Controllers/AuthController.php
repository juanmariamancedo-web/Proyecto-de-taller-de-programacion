<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function showLogin() {
        return Inertia::render('FormularioDeLogin');
    }

    public function login() {
        return Inertia::render('SuccessLogin');
    }

    public function showRegister() {
        return Inertia::render('RegistroDeClientes');
    }

    public function register(Request $request) {
        $email = $request->input("email");
        $password = $request->input("password");
        $name = $request->input("nombre");
        $postcode = $request->input("codigoPostal");
        $lastname = $request->input("apellido");
        $city = $request->input("ciudad");
        $province = $request->input("provincia");
        $postcode = $request->input("codigoPostal");
        $cuilCuit = $request->input("cuil_cuit");

        $request->validate([
            'nombre' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        User::create([  
            "email" => $email,
            "password" => Hash::Make($password),
            "name" => $name,
            "lastname" => $lastname,
            "city" => $city,
            "province" => $province,
            "postcode" => $postcode,
            "cuil_cuit" => $cuilCuit
        ]);

        return Inertia::render('SuccessRegister');
    }

    public function showForgotPassword(){
        return Inertia::render('ShowForgotPassword');
    }

    public function showRequestForgottenPasswordCode(){
        return Inertia::render("ShowRequestForgottenPasswordCode");

    }

    public function requestForgottenPasswordCode()
    {
        return redirect()->route('login');
    }

    public function logout() {}
}
