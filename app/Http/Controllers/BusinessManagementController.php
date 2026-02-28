<?php

namespace App\Http\Controllers;

use App\Models\Businesses\Business;
use App\Models\Businesses\BusinessBranch;
use App\Models\Businesses\BusinessImage;
use App\Models\Businesses\BusinessSection;
use App\Models\Businesses\BusinessSocial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\DB;
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
        $business->load(['business_socials', 'business_sections', 'business_images', 'business_branches']);

        return Inertia::render('Admin/Businesses/ShowBusiness', [

            'business' => $business
        ]);
    }

    /////////////////////////////Create/////////////////////////////////////
    public function storeSection(Request $request)
    {
        $fields = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'title' => 'required|string',
            'content' => 'required|string'
        ]);

        BusinessSection::create($fields);

        return redirect()->route('business.management');
    }

    public function storeImage(Request $request)
    {
        $fields = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'title' => 'required|string',
            'content' => 'required|string'
        ]);

        BusinessSection::create($fields);

        return redirect()->route('business.management');
    }

    public function storeBranch(Request $request)
    {
        $fields = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'address' => 'required|string',
        ]);
        BusinessBranch::create($fields);
        return redirect()->route('business.management');
    }

    public function storeSocial(Request $request)
    {
        // dd($request);
        $fields = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'platform_name' => 'required|string',
            'url' => 'required'
        ]);

        BusinessSocial::create($fields);
        return redirect()->route('business.management');
    }

    /////////////////////////////Update/////////////////////////////////////

    public function updateSection(Request $request, BusinessSection $section)
    {
        $updated = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'title' => "required|string",
            'content' => "required|string"
        ]);

        $section->update($updated);

        return redirect()->route('business.management');
    }
    public function updateImage(Request $request, $id)
    {
        ///
    }
    public function updateBranch(Request $request, BusinessBranch $branch)
    {
        $updated = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'address' => 'required|string',
            'google_map_embed' => 'required|string'
        ]);

        $branch->update($updated);

        return redirect()->route('business.management');
    }
    public function updateSocial(Request $request, BusinessSocial $social)
    {
        $updated = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'platform_name' => "required|string",
            'url' => "required"
        ]);

        $social->update($updated);

        return redirect()->route('business.management');
    }

    /////////////////////////////Delete/////////////////////////////////////
    public function deleteSection(Request $request, BusinessSection $section)
    {
        $section->delete();
        return redirect()->route('business.management');
    }
    public function deleteImage(Request $request, BusinessImage $image)
    {
        $image->delete();
        return redirect()->route('business.management');
    }
    public function deleteBranch(Request $request, BusinessBranch $branch)
    {
        $branch->delete();
        return redirect()->route('business.management');
    }
    public function deleteSocial(Request $request, BusinessSocial $social)
    {
        $social->delete();
        return redirect()->route('business.management');
    }
}
