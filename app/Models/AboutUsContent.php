<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutUsContent extends Model
{
    /** @use HasFactory<\Database\Factories\AboutUsContentFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'content'
    ];
}
