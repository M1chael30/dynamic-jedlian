<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Model;

class BusinessBranchLocation extends Model
{
    protected $fillable=[
        "branch_id",
        "address",
        "google_map_embed"
    ];
}
