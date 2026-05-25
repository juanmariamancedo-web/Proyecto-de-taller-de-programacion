<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\PasswordReset;
use App\Models\EmailVerificationCode;
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
        $request->validate([
            'nombre'      => 'required|string|max:255',
            'apellido'    => 'required|string|max:255',
            'email'       => 'required|email|unique:users',
            'password'    => 'required|min:6|confirmed',
            'cuil_cuit'   => 'required|string|max:20',
            'ciudad'      => 'required|string|max:255',
            'provincia'   => 'required|string|max:255',
            'codigoPostal'=> 'required|string|max:10',
        ]);

        $user = User::create([  
            "email"     => $request->input("email"),
            "password"  => Hash::make($request->input("password")),
            "name"      => $request->input("nombre"),
            "lastname"  => $request->input("apellido"),
            "city"      => $request->input("ciudad"),
            "province"  => $request->input("provincia"),
            "postcode"  => $request->input("codigoPostal"),
            "cuil_cuit" => $request->input("cuil_cuit"),
            "role"      => "unverified",
        ]);

        $code = random_int(100000, 999999);

        EmailVerificationCode::create([
            "user_id"    => $user->id,
            "new_email"  => $user->email,
            "code"       => $code,
            "expires_at" => now()->addMinutes(15),
        ]);

        Mail::to($user->email)->send(new RequestForgottenPasswordCode([
            'email' => $user->email,
            'name' => $user->name,
            'code' => $code,
        ]));

        Auth::login($user);

        return redirect('/verificar-cuenta');
    }

    public function verifyRegister(Request $request){
        // $request->validate([
        //     'code' => 'required|digits:6',
        // ]);

        $verification = EmailVerificationCode::where('user_id', auth()->id())
            ->where('code', $request->input('code'))
            ->where('expires_at', '>=', now())
            ->first();

        if (!$verification) {
            return back()->withErrors(['code' => 'Código inválido o expirado']);
        }

        $user = auth()->user();
        $user->role = 'client';
        $user->save();

        $verification->delete();

        return redirect('/catalogo');
    }

    public function resendVerifyCode(){
        $user = auth()->user();

        EmailVerificationCode::where('user_id', $user->id)->delete();

        $code = random_int(100000, 999999);

        EmailVerificationCode::create([
            "user_id"    => $user->id,
            "new_email"  => $user->email,
            "code"       => $code,
            "expires_at" => now()->addMinutes(15),
        ]);

        Mail::to($user->email)->send(new RequestForgottenPasswordCode([
            'email' => $user->email,
            'name' => $user->name,
            'code' => $code,
        ]));

        return back();
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
