<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\EmailVerificationCode;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Mail\RequestForgottenPasswordCode;

class UsersController extends Controller
{
    public function showUsers(Request $request){
        $page = (int) $request->get('page', 1);
        $limite = 6;
        $sort = $request->get('sort', '');
        $search = $request->get('search', '');

        $query = match($sort){
            "idAsc"  => User::orderBy('id', 'asc'),
            "idDesc" => User::orderBy('id', 'desc'),
            default  => User::query()
        };

        if($search){
            $query = $query->where('name', 'LIKE', "%{$search}%");
        }

        return Inertia::render('Admin/Usuarios', [
            'usuarios' => $query->offset(($page - 1) * $limite)->limit($limite)->get(),
            'paginas'  => ceil((clone $query)->count() / $limite),
            'pagina'   => $page,
            'sort'     => $sort,
            'search'   => $search
        ]);   
    }

    public function changeRol(User $user){
        $nuevoRol = $user->role !== 'admin' ? 'admin' : 'client';
        
        $user->role = $nuevoRol;
        $user->save();

        return back();
    }

    public function profile(){
        return Inertia::render('Perfil', [
            'user' => auth()->user()
        ]);
    }

    public function updateProfile(Request $request){
        $user = auth()->user();

        $request->validate([
            'nombre'       => 'required|string|max:255',
            'apellido'     => 'required|string|max:255',
            'cuil_cuit' => 'required|digits:11|unique:users,cuil_cuit,' . $user->id,
            'ciudad'       => 'required|string|max:255',
            'provincia'    => 'required|string|max:255',
            'codigoPostal' => 'required|digits:4',
        ]);

        $user->name = $request->input('nombre');
        $user->lastname = $request->input("apellido");
        $user->city = $request->input("ciudad");
        $user->province = $request->input("provincia");
        $user->postcode = $request->input("codigoPostal");
        $user->cuil_cuit = $request->input("cuil_cuit");

        $user->save();

        return back();
    }

    public function updatePassword(Request $request){
        $request->validate([
            'actual_password' => 'required',
            'password'        => 'required|min:6|confirmed',
        ]);

        if (!Hash::check($request->input('actual_password'), auth()->user()->password)) {
            return back()->withErrors(['actual_password' => 'La contraseña actual es incorrecta']);
        }

        auth()->user()->update([
            'password' => Hash::make($request->input('password'))
        ]);

        return back();
    }

    public function updateEmail(Request $request){
       $request->validate([
            'email' => 'required|email|unique:users,email',
        ]);

        $code = rand(100000, 999999);

        EmailVerificationCode::Create(
            [
                'user_id' => auth()->id(),
                'code'      => $code,
                'new_email' => $request->input('email'),
                'expires_at'=> now()->addMinutes(15),
            ]
        );

        Mail::to(auth()->user()->email)->send(new RequestForgottenPasswordCode([
            'name' => auth()->user()->name,
            'email' => auth()->user()->email,
            'code' => $code
        ]));

        return Inertia::render("ShowRequestEmailCode");
    }

    public function verifyEmail(Request $request){
        $request->validate([
            'code' => 'required|digits:6',
        ]);

        $verification = EmailVerificationCode::where('user_id', auth()->id())
            ->where('code', $request->input('code'))
            ->where('expires_at', '>=', now())
            ->first();

        if (!$verification) {
            return back()->withErrors(['code' => 'Código inválido o expirado']);
        }

        $user = auth()->user();
        $user->email = $verification->new_email;
        $user->save();

        $verification->delete();

        return redirect('/perfil');
    }

    public function toggleBan(User $user){
        $user->is_banned = !$user->is_banned;
        $user->save();
        return back();
    }
}
