<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutUsContent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

class AboutUsController extends Controller
{
    public function index()
    {
        $content = AboutUsContent::select('id', 'title', 'content', 'image_path', 'position', 'quote')->latest()->get();
        return Inertia::render('Admin/AboutUs/AboutUsManagement', [
            'content' => $content
        ]);
    }

    public function update(Request $request, AboutUsContent $content)
    {
        $validated = $request->validate([
            'title' => 'required|string|regex:/^\S{0,30}(\s+\S{1,30})*$/',
            'position' => 'nullable|string|regex:/^\S{0,30}(\s+\S{1,30})*$/',
            'content' => 'required|string|regex:/^\S{0,30}(\s+\S{1,30})*$/',
            'quote' => 'nullable|string|regex:/^\S{0,30}(\s+\S{1,30})*$/',
            'image_path' => [
                'nullable',
                'mimes:png,jpg',
                File::image()
                    ->min('1kb')
                    ->max('3mb')
            ]
        ]);

        if ($request->hasFile('image_path')) {
            if ($content->image_path) {
                Storage::disk('public')->delete($content->image_path);
            }

            $validated['image_path'] = $request->file('image_path')->store('about-us', 'public');
        } else {
            unset($validated['image_path']);
        }

        $content->update($validated);

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'About us content updated.'
        ]);

        return redirect()->route('about_us.management')
            ->with('success', 'Content updated successfully!');
    }
}
