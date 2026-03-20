<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Businesses\Business;
use Inertia\Inertia;

class BusinessController extends Controller
{
    public function index(Business $business)
    {
        $business->load([
            'business_socials:id,business_id,platform_name,url,class',
            'business_sections' => fn($query) =>
            $query->select('id','business_id','title','content'),
            'business_images' => fn($query) =>
            $query->select('id', 'business_id', 'image_type', 'image_path')
                ->whereIn('image_type', ['circle_banner', 'banner']),
            'business_branches:id,business_id,address,google_map_embed'
        ]);

        return Inertia::render("OurBusinesses/Business", [
            "business" => $business
        ]);
    }
}
