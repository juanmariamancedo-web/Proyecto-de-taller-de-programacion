<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function showForm() {
        return Inertia::render('InformacionDeContactos');
    }

    public function send(Request $request) {
        $name = $request->input("nombre");
        $lastname = $request->input("apellido");
        $email = $request->input("email");
        // $matter = $request->input("matter");
        $message = $request->input("mensaje");


        Contact::create([
            "name" => $name,
            "lastname" => $lastname,
            "email" => $email,
            "matter" => "",
            "message" => $message
        ]);

        return Inertia::render('SuccessContact');
    }
}
