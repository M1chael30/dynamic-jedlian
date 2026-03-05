<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Model;

class BusinessSocial extends Model
{
    protected $fillable = [
        "business_id",
        "platform_name",  
        "url"
    ];

    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}
