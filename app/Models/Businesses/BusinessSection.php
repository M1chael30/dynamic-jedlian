<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusinessSection extends Model
{
    protected $fillable = [
        "business_id",
        "title",
        "content"
    ];

    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}
