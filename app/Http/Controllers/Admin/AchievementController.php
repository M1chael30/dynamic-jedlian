<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Achievements\Achievement;
use App\Models\Achievements\AchievementDescription;
use App\Models\Achievements\Period;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Validation\Rules\File;

class AchievementController extends Controller
{
    public function index()
    {
        $periods = fn() => Period::select('id', 'year')
            ->with([
                'achievements:id,title,period_id,is_visible',
                'achievements.achievement_descriptions:id,achievement_id,description_text',
                'achievements.achievement_image:id,achievement_id,image_filename'
            ])
            ->orderBy('year', 'desc')
            ->simplePaginate(5);

        return Inertia::render('Admin/Achievements/AchievementManagement', [
            'periods' => $periods
        ]);
    }

    /////////////////////////create/////////////////////////////
    public function storePeriod(Request $request)
    {
        $fields = $request->validate([
            "year" => ["required", "max:4", "min:4", "unique:periods"]
        ]);

        Period::create($fields);

        auth()->user()->logs()->create([
            'action' => 'Create',
            'description' => 'New achievement period created.'
        ]);

        return redirect()->route('achievement.management');
    }

    public function storeAchievement(Request $request)
    {
        $fields = $request->validate([
            'period_id' => ['required', 'exists:periods,id'],
            'title' => [
                'required',
                'max:255',
                'regex:/^\S{0,30}(\s+\S{1,30})*$/'
            ],
            'image_filename' => [
                'required',
                File::image()
                    ->types(['png', 'jpg', 'jpeg'])
                    ->min(1) // 1kb
                    ->max(3024) // 3mb
            ],
        ]);

        DB::transaction(function () use ($fields, $request) {
            $achievement = Achievement::create([
                'period_id' => $fields['period_id'],
                'title' => $fields['title'],
            ]);

            if ($request->hasFile('image_filename')) {

                $path = Storage::disk('public')->put('achievements', $fields['image_filename']); // image path

                $achievement->achievement_image()->create([
                    'image_filename' => $path
                ]);
            }

            auth()->user()->logs()->create([
                'action' => 'Create',
                'description' => 'New achievement created.'
            ]);
        });

        return redirect()->route('achievement.management');
    }

    public function storeAchievementDescription(Request $request)
    {
        $fields = $request->validate([
            'achievement_id' => ['required', 'exists:achievements,id'],
            "description_text" => [
                "required",
                "max:255",
                'regex:/^\S{0,30}(\s+\S{1,30})*$/'
            ],

        ]);

        AchievementDescription::create($fields);

        auth()->user()->logs()->create([
            'action' => 'Create',
            'description' => 'New achievement description created.'
        ]);

        return redirect()->route('achievement.management');
    }

    /////////////////////////update/////////////////////////////
    function updateAchievementVisibility(Achievement $achievementVisiblity)
    {
        $achievementVisiblity->update([
            'is_visible' => !$achievementVisiblity->is_visible
        ]);

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'Achievement visibility changed.'
        ]);

        return redirect()->route('achievement.management');
    }

    public function updateDescription(Request $request, AchievementDescription $description)
    {
        $updated = $request->validate([
            'description_text' => [
                'required',
                'string',
                'max:255',
                'regex:/^\S{0,30}(\s+\S{1,30})*$/'
            ]
        ]);

        $description->update($updated);

        auth()->user()->logs()->create([
            'action' => 'Update',
            'description' => 'Achievement description updated.'
        ]);

        return redirect()->route('achievement.management');
    }

    public function updateAchievement(Request $request, Achievement $achievement)
    {
        $achievement->load('achievement_image:id,image_filename,achievement_id');

        $fields = $request->validate([
            'title' => [
                'required',
                'max:255',
                'regex:/^\S{0,30}(\s+\S{1,30})*$/'
            ],
            'image_filename' => [
                'mimes:png,jpg',
                'nullable',
                File::image()
                    ->min('1kb')
                    ->max('3mb')
            ],
        ]);

        DB::transaction(function () use ($fields, $request, $achievement) {
            $achievement->update([
                'title' => $fields['title'],
            ]);

            $path = $achievement->achievement_image->image_filename;

            if ($request->hasFile('image_filename')) {

                if ($path) {
                    Storage::disk('public')->delete($path);
                }

                $path = Storage::disk('public')->put('achievements', $fields['image_filename']); // image path

                $achievement->achievement_image()->update([
                    'image_filename' => $path
                ]);
            }

            auth()->user()->logs()->create([
                'action' => 'Update',
                'description' => 'Achievement title updated.'
            ]);
        });

        return redirect()->route('achievement.management');
    }
    //////////////////////delete///////////////////////////////
    public function deleteDescription(AchievementDescription $description)
    {
        $description->delete();

        auth()->user()->logs()->create([
            'action' => 'Delete',
            'description' => 'Achievement description deleted.'
        ]);

        return redirect()->route('achievement.management');
    }

    public function deleteAchievement(Achievement $achievement)
    {
        $achievement->load('achievement_image:id,image_filename,achievement_id');

        DB::transaction(function () use ($achievement) {
            $achievement->delete();

            $path = $achievement->achievement_image->image_filename;

            if ($path) {
                Storage::disk('public')->delete($path);
            }

            $achievement->achievement_image()->delete();

            auth()->user()->logs()->create([
                'action' => 'Delete',
                'description' => 'Achievement deleted.'
            ]);
        });

        return redirect()->route('achievement.management');
    }
}
