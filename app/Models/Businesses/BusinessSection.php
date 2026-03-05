<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Model;

class BusinessSection extends Model
{
    protected $fillable = [
        "business_id",
        "title",
        "content",
        "order"
    ];

    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}
