<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Mail\ContactEmail;
use Illuminate\Support\Facades\Mail;

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


        // Contact::create([
        //     "name" => $name,
        //     "lastname" => $lastname,
        //     "email" => $email,
        //     "matter" => "",
        //     "message" => $message
        // ]);

        Mail::to("juanmaninc@gmail.com")->send(new ContactEmail([
            "name" => $name,
            "email" => $email,
            "lastname" => $lastname,
            "message" => $message
        ]));

        return Inertia::render('SuccessContact');
    }
}
