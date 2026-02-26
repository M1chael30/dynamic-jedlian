<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusinessSocial extends Model
{
    protected $fillable = [
        "business_id",
        "url "
    ];

    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}
