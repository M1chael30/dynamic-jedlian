<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\AboutUsContent;
use App\Models\Businesses\Business;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessController extends Controller
{
    public function index(Business $business)
    {
        $business->load([
            'business_socials',
            'business_sections',
            'business_images',
            'business_branches'
        ]);

        return Inertia::render("OurBusinesses/Business", [
            "business"=> $business
        ]);
    }
}
