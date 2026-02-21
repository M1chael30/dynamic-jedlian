<?php

namespace App\Http\Controllers;

use App\Models\Achievements\Achievement;
use App\Models\Achievements\AchievementDescription;
use App\Models\Achievements\Period;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Validation\Rules\File;


class AchievementManagementController extends Controller
{
    //
    public function index()
    {
        $achievements = Achievement::select('id', 'title', 'period_id')->with(['period:id,year'])->latest()->get();
        return Inertia::render('Admin/Achievements/AchievementManagement', [
            'achievements' => $achievements
        ]);
    }

    /////////////////////////show/////////////////////////////

    public function show(Achievement $achievement)
    {
        $achievement->select('id', 'title', 'period_id');
        $period = $achievement->period()->first();
        $description = $achievement->achievement_descriptions()->latest()->get();

        return Inertia::render('Admin/Achievements/ShowAchievement', [
            'achievement' => $achievement,
            'period' => $period,
            'descriptions' => $description
        ]);
    }


    /////////////////////////create/////////////////////////////

    public function create()
    {
        $periods = Period::select('id', 'year')->get();
        $titles = Achievement::select('id', 'title')->get();

        return Inertia::render("Admin/Achievements/CreateAchievement", [
            "periods" => $periods,
            "titles" => $titles,
        ]);
    }

    public function storePeriod(Request $request)
    {
        $fields = $request->validate([
            "year" => ["required", "max:4", "min:4", "unique:periods"],
            "image_filename" => [
                'mimes:png,jpg',
                'image',
                'required',
                File::image()
                    ->min('1kb')
                    ->max('3mb')
            ],
        ]);

        $period = Period::create([
            'year' => $fields['year']
        ]);

        if ($request->hasFile('image_filename')) {

            $path = Storage::disk('public')->put('achievements', $request->image_filename);

            $period->achievement_image()->create([
                'image_filename' => $path

            ]);
        }
        return redirect()->route('achievement.management');
    }

    public function storeAchievement(Request $request)
    {
        $fields = $request->validate([
            'period_id' => ['required', 'exists:periods,id'],
            "title" => ["required", "max:255"],
        ]);

        Achievement::create($fields);

        return redirect()->route('achievement.management');
    }

    public function storeAchievementDescription(Request $request)
    {
        $fields = $request->validate([
            'achievement_id' => ['required', 'exists:achievements,id'],
            "description_text" => ["required", "max:255"],
        ]);

        AchievementDescription::create($fields);

        return redirect()->route('achievement.management');
    }

    /////////////////////////update/////////////////////////////

    public function updateDescription(Request  $request, AchievementDescription $description){
        // dd($description);

        $request->validate([
            'description_text' => 'required|string'
        ]);

        $description->update(['description_text' => $request->description_text]);

        return back()->with('success', 'Description updated successfully.');
    }

    //////////////////////delete///////////////////////////////

    public function deleteDescription(Request $request, AchievementDescription $description) {
        $description->delete();

        return back()->with('success','Description deleted.');

    }
}
