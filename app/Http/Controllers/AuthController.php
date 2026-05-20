<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\PasswordReset;
use Illuminate\Support\Facades\Mail;
use App\Mail\RequestForgottenPasswordCode;

class AuthController extends Controller
{
    private function verifyPassword($password, $password_confirmation)
    {
        if ($password !== $password_confirmation && strlen($password) < 6) {
            return false;
        }

        return true;
    }

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

    public function showRequestForgottenPasswordCode(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $email = $request->input("email");

        // buscar usuario
        $user = User::where('email', $email)->first();

        if (!$user) {
            return back()->withErrors([
                'email' => 'El email no está registrado'
            ]);
        }

        // eliminar códigos anteriores
        PasswordReset::where('email', $email)->delete();

        $code = random_int(0000, 9999);

        PasswordReset::create([
            "email" => $email,
            "code" => $code,
            "expires_at" => now()->addMinutes(10)
        ]);

        Mail::to($email)->send(new RequestForgottenPasswordCode([
            'name' => $user->name,
            'email' => $email,
            'code' => $code
        ]));

        return Inertia::render("ShowRequestForgottenPasswordCode");
    }

    public function requestForgottenPasswordCode(Request $request)
    {
        $request->validate([
            'code' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        $code = $request->code;

        $passwordReset = PasswordReset::where('code', $code)->first();

        if (!$passwordReset) {
            return back()->withErrors(['code' => 'Código inválido']);
        }

        if ($passwordReset->expires_at < now()) {
            return back()->withErrors(['code' => 'Código expirado']);
        }

        $email = $passwordReset->email;

        $user = User::where("email", $email)->first();

        if (!$user) {
            return back()->withErrors(['email' => 'Usuario no encontrado']);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        $passwordReset->delete();

        return Inertia::render("SuccessRequestForgottenPasswordCode");
    }

    // public function logout() {}
}
