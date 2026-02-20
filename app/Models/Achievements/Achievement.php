<?php

namespace App\Models\Achievements;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    /** @use HasFactory<\Database\Factories\Achievements\AchievementFactory> */
    use HasFactory;
    protected $fillable = [
        'period_id',
        "title",
    ];

    public function period()
    {
        return $this->belongsTo(Period::class);
    }

    public function achievement_descriptions()
    {
        return $this->hasMany(AchievementDescription::class);
    }

    public function achievement_image()
    {
        return $this->hasOne(AchievementImage::class);
    }
}
