<?php

namespace App\Http\Controllers;

use App\Models\Businesses\Business;
use App\Models\Businesses\BusinessBranch;
use App\Models\Businesses\BusinessImage;
use App\Models\Businesses\BusinessSection;
use App\Models\Businesses\BusinessSocial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;

class BusinessManagementController extends Controller
{
    public function index()
    {
        $businesses = Business::select('id', 'name', 'category', 'description')->get();

        return Inertia::render('Admin/Businesses/BusinessesManagement', [
            'businesses' => $businesses
        ]);
    }

    public function show(Business $business)
    {
        $business->load([
            'business_socials',
            'business_sections',
            'business_images',
            'business_branches'
        ]);

        return Inertia::render('Admin/Businesses/ShowBusiness', [

            'business' => $business
        ]);
    }

    /////////////////////////////Create/////////////////////////////////////
    public function storeBusiness(Request $request)
    {
        // dd($request);
        $fields = $request->validate([
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
            'category' => ['required', 'string'],

        ]);

        Business::create($fields);

        Cache::forget('navbar_businesses');

        return redirect()->route('business.management');
    }

    public function storeSection(Request $request)
    {
        
        // dd($request);
        $fields = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'title' => ['nullable', 'string'],
            'content' => ['required', 'string']
        ]);

        BusinessSection::create($fields);

        return redirect()->route('business.show', $fields['business_id']);
    }

    public function storeImage(Request $request)
    {
        $fields = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'image_type' => [
                'required',
                Rule::unique('business_images')
                    ->where(
                        fn($query) =>
                        $query->where('business_id', $request->business_id)
                    ),
            ],
            'image_path' => [
                'required',
                File::image()
                    ->types(['png', 'jpg', 'jpeg'])
                    ->min('1kb')
                    ->max('10mb')
            ],
        ]);

        if ($request->hasFile('image_path')) {

            $path = Storage::disk('public')->put('businesses', $fields['image_path']); // image path

            BusinessImage::create([
                'business_id' => $fields['business_id'],
                'image_type' => $fields['image_type'],
                'image_path' => $path,
            ]);
        }

        return redirect()->route('business.show', $fields['business_id']);
    }

    public function storeBranch(Request $request)
    {
        $fields = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'address' => ['required', 'string'],
            'google_map_embed' => ['nullable', 'string'],
        ]);
        BusinessBranch::create($fields);
        return redirect()->route('business.show', $fields['business_id']);
    }

    public function storeSocial(Request $request)
    {
        $fields = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'platform_name' => ['required', 'string'],
            'url' => ['required', 'url']
        ]);

        BusinessSocial::create($fields);

        return redirect()->route('business.show', $fields['business_id']);
    }

    /////////////////////////////Update/////////////////////////////////////

    public function updateBusiness(Request $request, Business $business)
    {
        $updated = $request->validate([
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
            'category' => ['required', 'string'],
        ]);



        $business->update($updated);

        return redirect()->route('business.management');
    }

    public function updateSection(Request $request, BusinessSection $section)
    {
        $updated = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'title' => ['nullable', 'string'],
            'order' => ['required', 'integer'],
            'content' => ['required', 'string']
        ]);

        $oldOrder = $section->order;
        $newOrder = $updated['order'];

        if ($oldOrder != $newOrder) {

            if ($newOrder > $oldOrder) {
                // moving DOWN
                BusinessSection::where('business_id', $section->business_id)
                    ->whereBetween('order', [$oldOrder + 1, $newOrder])
                    ->decrement('order');
            } else {
                // moving UP
                BusinessSection::where('business_id', $section->business_id)
                    ->whereBetween('order', [$newOrder, $oldOrder - 1])
                    ->increment('order');
            }
        }

        $section->update([
            'title' => $updated['title'],
            'content' => $updated['content'],
            'order' => $newOrder
        ]);

        return redirect()->route('business.show', $updated['business_id']);
    }

    public function updateBranch(Request $request, BusinessBranch $branch)
    {
        $updated = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'address' => ['required', 'string'],
            'google_map_embed' => ['nullable', 'string']
        ]);

        $branch->update($updated);

        return redirect()->route('business.show', $updated['business_id']);
    }

    public function updateSocial(Request $request, BusinessSocial $social)
    {
        $updated = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'platform_name' => ['required', 'string'],
            'url' => ['required', 'url']
        ]);

        $social->update($updated);

        return redirect()->route('business.show', $updated['business_id']);
    }

    /////////////////////////////Delete/////////////////////////////////////
    public function deleteSection(BusinessSection $section)
    {
        $section->delete();
        return back();
    }

    public function deleteImage(Request $request, BusinessImage $image)
    {
        if ($image->image_path) {
            Storage::disk('public')->delete($image->image_path);
        }

        $image->delete();

        return back();
    }

    public function deleteBranch(Request $request, BusinessBranch $branch)
    {
        $branch->delete();
        return back();
    }

    public function deleteSocial(Request $request, BusinessSocial $social)
    {
        $social->delete();
        return back();
    }
}
