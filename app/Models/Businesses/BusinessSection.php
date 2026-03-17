<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessSection extends Model
{
    /** @use HasFactory<\Database\Factories\Businesses\BusinessSectionFactory> */
    use HasFactory;
    protected $fillable = [
        "business_id",
        "title",
        "content",
    ];

    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}
