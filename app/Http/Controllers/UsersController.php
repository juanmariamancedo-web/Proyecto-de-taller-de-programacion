<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;


class UsersController extends Controller
{
    public function showUsers(Request $request){
        $page = (int) $request->get('page', 1);
        $limite = 6;

        return Inertia::render('Admin/Usuarios', [
            'usuarios' => User::offset(($page - 1) * $limite)->limit($limite)->get(),
            'paginas' => User::count() / $limite,
            "pagina" => $page
        ]);   
    }

    public function changeRol(User $user){
        $nuevoRol = $user->role !== 'admin' ? 'admin' : 'client';
        
        $user->role = $nuevoRol;
        $user->save();

        return back();
    }
}
