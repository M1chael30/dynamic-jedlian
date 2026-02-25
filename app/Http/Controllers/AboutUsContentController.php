<?php

namespace App\Http\Controllers;

use App\Models\AboutUsContent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutUsContentController extends Controller
{
    public function index(){
        $content = AboutUsContent::select()->latest()->get();
        return Inertia::render('Admin/AboutUs/AboutUsManagement', [
            'content' => $content
        ]);
    }

    public function update(Request $request, AboutUsContent $content){
        $updated = $request->validate([
            'content'=> 'required|string|regex:/^\S{0,30}(\s+\S{1,30})*$/',
        ]);

        $content->update($updated);
        return redirect()->route('about_us.management');
    }
}
