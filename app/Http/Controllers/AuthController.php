<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function showLogin() {
        return Inertia::render('FormularioDeLogin');
    }

    public function login(Request $request) {
        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ])) {
            return redirect('/catalogo');
        }
        
        return back()->with('error', 'Credenciales incorrectas');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        redirect('/login');
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
