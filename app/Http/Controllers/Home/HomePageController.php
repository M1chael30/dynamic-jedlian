<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\HomeStat;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index()
    {
        $homestats = HomeStat::select("id","title","stat","description")->orderBy("id")->get();
        return Inertia::render('Home', [
            'homestats' => $homestats
        ]);
    }
}
