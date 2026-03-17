<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessSocial extends Model
{
    /** @use HasFactory<\Database\Factories\Businesses\BusinessSocialFactory> */
    use HasFactory;
    
    protected $fillable = [
        "business_id",
        "platform_name",  
        "url",
        "class"
    ];

    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}
