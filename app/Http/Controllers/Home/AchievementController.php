<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\Achievements\Period;
use Illuminate\Database\Eloquent\Builder;
use Inertia\Inertia;

class AchievementController extends Controller
{
    public function index()
    {
        $periods = Period::select('id', 'year')
            ->with([
                'achievements' => function ($query) {
                    $query->select('id', 'period_id', 'title', 'is_visible')
                        ->where('is_visible', true);
                },
                'achievements.achievement_image:id,image_filename,achievement_id',
                'achievements.achievement_descriptions:id,achievement_id,description_text'
            ])
            ->orderBy('year', 'desc')
            ->simplePaginate(5);

        return Inertia::render('Achievement/Achievement', [
            'periods' => $periods
        ]);
    }
}
