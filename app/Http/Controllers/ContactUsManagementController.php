<?php

namespace App\Http\Controllers;

use App\Models\ContactUs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactUsManagementController extends Controller
{
    public function index()
    {
        $contactUsData = ContactUs::select('id', 'title', 'content')->get();

        return Inertia::render('Admin/ContactUs/ContactUsManagement', [
            'contactUsData' => $contactUsData
        ]);
    }
}
