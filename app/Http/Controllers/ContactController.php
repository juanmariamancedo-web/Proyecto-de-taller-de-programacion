<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    // public function showForm() {}

    public function send() {
        return Inertia::render('SuccessContact');
    }
}
