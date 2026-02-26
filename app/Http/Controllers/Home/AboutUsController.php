<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\AboutUsContent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutUsController extends Controller
{
    public function index()
    {
        $content = AboutUsContent::latest()->get();
        return Inertia::render('AboutUs/AboutUs', ['content'=> $content]);
    }
}
