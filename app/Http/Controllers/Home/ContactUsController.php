<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    public function index()
    {
        $contactUsData = ContactUs::select('id', 'title', 'content')->get();

        return Inertia::render('ContactUs/ContactUs', [
            'contactUsData' => $contactUsData
        ]);
    }
}
