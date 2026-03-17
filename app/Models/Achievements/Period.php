<?php

namespace App\Models\Achievements;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Period extends Model
{
    /** @use HasFactory<\Database\Factories\Achievements\PeriodFactory> */
    use HasFactory;

    protected $fillable = ['year'];

    public function achievements()
    {
        return $this->hasMany(Achievement::class)->latest();
    }
}
