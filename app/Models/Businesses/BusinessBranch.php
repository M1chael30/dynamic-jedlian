<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Model;

class BusinessBranch extends Model
{
    protected $fillable = [
        "business_id",
        "address",
        "google_map_embed",
    ];

    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}
