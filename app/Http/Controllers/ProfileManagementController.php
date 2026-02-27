<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProfileManagementController extends Controller
{
    public function index()
    {
        $profileInfo = auth()->user()->only(['id', 'name', 'email']);

        return Inertia::render('Admin/Profile/Profile', [
            'profileInfo' => $profileInfo
        ]);
    }

    public function update(Request $request)
    {
        $fields = $request->validate([
            'name' => ['required', 'min:3', 'max:255'],
            'email' => [
                'required',
                'email',
                'lowercase',
                Rule::unique('users', 'email')->ignore(Auth::id())
            ],
        ]);

        auth()->user()->update($fields);

        return Inertia::render('Admin/Profile/Profile');
    }

    public function updatePassword(Request $request)
    {
        $fields = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'min:8', 'confirmed'],
            'password_confirmation' => ['required'],
        ]);

        auth()->user()->update([
            'password' => Hash::make($fields['password'])
        ]);

        return Inertia::render('Admin/Profile/Profile');
    }
}
