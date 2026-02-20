<?php

namespace App\Http\Controllers;

use App\Models\Achievements\Achievement;
use App\Models\Achievements\AchievementDescription;
use App\Models\Achievements\Period;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AchievementManagementController extends Controller
{
    //
    public function index()
    {
        $periods = Period::select('id', 'year')->get();
        $titles = Achievement::select('id','title')->get();

        return Inertia::render("Admin/Achievements/AchievementManagement", [
            "periods" => $periods,
            "titles" => $titles
        ]);
    }

    public function storePeriod(Request $request)
    {
        $fields = $request->validate([
            "year" => ["required", "max:4", "min:4"],
        ]);

        Period::create($fields);

        return redirect()->route('achievement.management');
    }

    public function storeAchievement(Request $request)
    {
        $fields = $request->validate([
            'period_id'=>['required','exists:periods,id'],
            "title" => ["required","max:255"],
        ]);

        Achievement::create($fields);

        return redirect()->route('achievement.management');
    }

    public function storeAchievementDescription(Request $request)
    {
        $fields = $request->validate([
            'achievement_id'=>['required','exists:achievements,id'],
            "description_text" => ["required","max:255"],
        ]);

        AchievementDescription::create($fields);

        return redirect()->route('achievement.management');
    }
}
