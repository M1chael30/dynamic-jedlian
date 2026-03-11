<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessBranch extends Model
{
    /** @use HasFactory<\Database\Factories\Businesses\BusinessBranchFactory> */
    use HasFactory;
    
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
