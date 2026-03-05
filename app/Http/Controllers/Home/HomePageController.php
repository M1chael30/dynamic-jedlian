<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\Businesses\Business;
use App\Models\HomeStat;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index()
    {
        $homestats = HomeStat::select("id", "title", "stat", "description")
            ->orderBy("id")
            ->get();

        $businesses = Business::select("id", "name", "description")
            ->with([
                "business_images" => fn($query) =>
                $query->select('id', 'business_id', 'image_type', 'image_path')
                    ->where('image_type', 'logo')
            ])
            ->orderBy("id")
            ->get();

        return Inertia::render('Home', [
            'homestats' => $homestats,
            'businesses' => $businesses
        ]);
    }
}
