<?php

namespace App\Http\Controllers;

use App\Models\Businesses\Business;
use App\Models\Businesses\BusinessSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Bus;
use Inertia\Inertia;

class BusinessManagementController extends Controller
{
    public function index()
    {
        $businesses = Business::all();
        return Inertia::render('Admin/Businesses/BusinessesManagement', [
            'businesses' => $businesses
        ]);
    }

    public function show(Business $business)
    {
        $sections = $business->with('business.business_sections:id,title,content');
        return Inertia::render('Admin/Businesses/ShowBusiness', [
            'sections' => $sections,
            'business' => $business
        ]);
    }
    public function store(Request $request, Business $business)
    {
        $fields = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'title'=>'required|string',
            'content'=>'required|string'
        ]);

        BusinessSection::create($fields);

        return Inertia::render('Admin/Businesses/ShowBusiness', [
            'business' => $business
        ]);
    }
}
