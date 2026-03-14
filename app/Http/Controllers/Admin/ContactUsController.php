<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    public function index()
    {
        $contactUsData = ContactUs::select('id', 'title', 'content')->get();

        return Inertia::render('Admin/ContactUs/ContactUsManagement', [
            'contactUsData' => $contactUsData
        ]);
    }

    public function update(Request $request, ContactUs $contactUs)
    {
        $fields = $request->validate([
            'title' => ['required'],
            'content' => ['required'],
        ]);

        $contactUs->update($fields);

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'Contacts updated.'
        ]);

        return redirect()->route('contact_us.management');
    }
}
