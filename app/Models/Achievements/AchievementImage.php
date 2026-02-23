<?php

namespace App\Models\Achievements;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AchievementImage extends Model
{
    /** @use HasFactory<\Database\Factories\Achievements\AchievementImageFactory> */
    use HasFactory;

    protected $fillable = [
        "achievement_id",
        "image_filename",
    ];

    public function achievement()
    {
        return $this->belongsTo(Achievement::class);
    }
}
