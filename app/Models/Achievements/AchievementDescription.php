<?php

namespace App\Models\Achievements;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AchievementDescription extends Model
{
    /** @use HasFactory<\Database\Factories\Achievements\AchievementDescriptionFactory> */
    use HasFactory;

    protected $fillable = [
        'achievement_id',
        'description_text'
    ];

    public function achievement()
    {
        return $this->belongsTo(Achievement::class);
    }
}
