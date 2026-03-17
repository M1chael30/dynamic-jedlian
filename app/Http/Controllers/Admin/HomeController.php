<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HomeStat;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $stats = HomeStat::select('id', 'title', 'stat', 'description')->latest()->get();

        return Inertia::render("Admin/Home/HomeManagement", [
            "stats" => $stats
        ]);
    }

    public function update(Request $request, HomeStat $homestat)
    {
        $updated = $request->validate([
            'title' => 'required|max:255|string|regex:/^\S{0,30}(\s+\S{1,30})*$/',
            'stat' => 'required|max:255|string|regex:/^\S{0,30}(\s+\S{1,30})*$/',
            'description' => 'required|max:255|string|regex:/^\S{0,30}(\s+\S{1,30})*$/'
        ]);

        $homestat->update($updated);

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'Home stats updated.'
        ]);

        return redirect()->route('home.management');
    }
}
