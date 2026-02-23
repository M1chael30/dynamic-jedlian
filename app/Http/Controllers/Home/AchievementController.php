<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\Achievements\Achievement;
use App\Models\Achievements\Period;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AchievementController extends Controller
{
    public function index()
    {
        $periods = Period::select('id', 'year')
            ->with([
                'achievements.achievement_image:id,image_filename,achievement_id',
                'achievements:id,period_id,title',
                'achievements.achievement_descriptions:id,achievement_id,description_text'
            ])
            ->orderBy('year', 'desc')
            ->get();

        return Inertia::render('Achievement/Achievement', [
            'periods' => $periods
       ]);
    }
}
