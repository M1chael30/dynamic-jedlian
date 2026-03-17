<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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

class BusinessController extends Controller
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
            'business_socials:id,business_id,platform_name,url',
            'business_sections:id,business_id,title,content',
            'business_images:id,business_id,image_type,image_path',
            'business_branches:id,business_id,address,google_map_embed'
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

        auth()->user()->logs()->create([
            'action' => 'Create',
            'description' => 'New business created.'
        ]);

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

        auth()->user()->logs()->create([
            'action' => 'Create',
            'description' => 'New business section created.'
        ]);

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
                    ->min(1) // 1kb
                    ->max(5240) // 5mb
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

        auth()->user()->logs()->create([
            'action' => 'Create',
            'description' => 'New business ' . $fields['image_type'] . ' image created.'
        ]);

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

        auth()->user()->logs()->create([
            'action' => 'Create',
            'description' => 'New business branch created.'
        ]);

        return redirect()->route('business.show', $fields['business_id']);
    }

    public function storeSocial(Request $request)
    {
        $fields = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'platform_name' => ['required', 'string'],
            'url' => ['required', 'url']
        ]);

        $iconClasses = [
            'facebook' => 'fa-brands fa-facebook',
            'instagram' => 'fa-brands fa-instagram',
            'x' => 'fa-brands fa-x-twitter',
            'tiktok' => 'fa-brands fa-tiktok',
            'youtube' => 'fa-brands fa-youtube',
        ];

        $fields['class'] = $iconClasses[$fields['platform_name']];

        BusinessSocial::create($fields);

        auth()->user()->logs()->create([
            'action' => 'Create',
            'description' => 'New business social created.'
        ]);

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

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'Business updated.'
        ]);

        return redirect()->route('business.management');
    }

    public function updateSection(Request $request, BusinessSection $section)
    {
        $updated = $request->validate([
            'business_id' => ['required', 'exists:businesses,id'],
            'title' => ['nullable', 'string'],
            'content' => ['required', 'string']
        ]);

        $section->update([
            'title' => $updated['title'],
            'content' => $updated['content'],
        ]);

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'Business section updated.'
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

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'Business branch updated.'
        ]);

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

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'Business social updated.'
        ]);

        return redirect()->route('business.show', $updated['business_id']);
    }

    /////////////////////////////Delete/////////////////////////////////////

    public function deleteBusiness(Business $business)
    {
        $business->delete();
        auth()->user()->logs()->create([
            'action' => 'Delete',
            'description' => 'Business deleted.'
        ]);

        return back();
    }
    public function deleteSection(BusinessSection $section)
    {
        $section->delete();

        auth()->user()->logs()->create([
            'action' => 'Delete',
            'description' => 'Business section deleted.'
        ]);

        return back();
    }

    public function deleteImage(BusinessImage $image)
    {
        if ($image->image_path) {
            Storage::disk('public')->delete($image->image_path);
        }

        $image->delete();

        auth()->user()->logs()->create([
            'action' => 'Delete',
            'description' => 'Business image deleted.'
        ]);

        return back();
    }

    public function deleteBranch(BusinessBranch $branch)
    {
        $branch->delete();

        auth()->user()->logs()->create([
            'action' => 'Delete',
            'description' => 'Business branch deleted.'
        ]);

        return back();
    }

    public function deleteSocial(BusinessSocial $social)
    {
        $social->delete();

        auth()->user()->logs()->create([
            'action' => 'Delete',
            'description' => 'Business social deleted.'
        ]);

        return back();
    }
}
