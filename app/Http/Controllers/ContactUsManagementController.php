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

    public function update(Request $request, ContactUs $contactUs)
    {
        $fields = $request->validate([
            'content' => ['required'],
        ]);

        $contactUs->update([
            'content' => $fields['content']
        ]);

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'Contacts updated.'
        ]);

        return redirect()->route('contact_us.management');
    }
}
