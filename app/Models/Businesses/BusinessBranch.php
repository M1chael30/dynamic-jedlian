<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Model;

class BusinessBranch extends Model
{
    protected $fillable = [
        "business_id",
        "branch_name",
    ];

    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}
