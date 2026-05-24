<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;


class UsersController extends Controller
{
    public function showUsers(Request $request){
        $page = (int) $request->get('page', 1);
        $limite = 6;

        return Inertia::render('Admin/Usuarios', [
            'usuarios' => User::offset(($page - 1) * $limite)->limit($limite)->get(),
            'paginas' => ceil(User::count() / $limite),
            "pagina" => $page
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

        // $request->validate([
        //     'nombre'       => 'required|string|max:255',
        //     'apellido'     => 'required|string|max:255',
        //     'email'        => 'required|email|unique:users,email,' . $user->id,
        //     'ciudad'       => 'nullable|string|max:255',
        //     'provincia'    => 'nullable|string|max:255',
        //     'codigoPostal' => 'nullable|string|max:20',
        //     'cuil_cuit'    => 'nullable|string|max:20',
        // ]);

        $user->name = $request->input('nombre');
        $user->lastname = $request->input("apellido");
        $user->email = $request->input("email");
        $user->city = $request->input("ciudad");
        $user->province = $request->input("provincia");
        $user->postcode = $request->input("codigoPostal");
        $user->cuil_cuit = $request->input("cuil_cuit");

        $user->save();

        return back();
    }

    public function updatePassword(Request $request){
        // $request->validate([
        //     'actual_password'  => 'required',
        //     'password'         => 'required|min:8',
        //     'confirm_password' => 'required|same:password',
        // ]);

        if (!Hash::check($request->input('actual_password'), auth()->user()->password)) {
            return back()->withErrors(['actual_password' => 'La contraseña actual es incorrecta']);
        }

        auth()->user()->update([
            'password' => Hash::make($request->input('password'))
        ]);

        return back();
    }
}
