<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index() {
        $pages = Page::select('id','name')->get();
       return Inertia::render("Admin/Dashboard", [
        "pages"=> $pages
       ]);
    }
}
