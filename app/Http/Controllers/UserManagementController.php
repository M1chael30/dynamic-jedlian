<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserManagementController extends Controller
{
    public function index()
    {
        $users = User::select('id', 'name', 'email', 'role')
            ->where('id', '!=', Auth::id())
            ->latest()
            ->get();

        return Inertia::render('Admin/Users/UserManagement', [
            'users' => $users
        ]);
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => ['required', 'min:3', 'max:255'],
            'email' => ['required', 'email', 'lowercase', 'unique:users,email'],
        ]);

        User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['email']),
            'role' => 'admin',
        ]);

        auth()->user()->logs()->create([
            'action' => 'Create',
            'description' => 'New user created.'
        ]);

        return redirect()->route('user.index');
    }

    public function update(Request $request, User $user)
    {
        $fields = $request->validate([
            'name' => ['required', 'min:3', 'max:255'],
            'email' => [
                'required',
                'email',
                'lowercase',
                Rule::unique('users', 'email')->ignore($user)
            ],
        ]);

        $user->update($fields);

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'User info updated.'
        ]);

        return redirect()->route('user.index');
    }

    public function destroy(User $user)
    {
        $user->delete();

        auth()->user()->logs()->create([
            'action' => 'Delete',
            'description' => 'User deleted.'
        ]);

        return redirect()->route('user.index');
    }

    public function resetPassword(Request $request, User $user)
    {
        $request->validate([
            'admin_password' => ['required', 'current_password']
        ]);

        $user->update([
            'password' => Hash::make($user['email'])
        ]);

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'User password reset.'
        ]);

        return redirect()->route('user.index');
    }
}
