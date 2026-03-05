<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Model;

class BusinessImage extends Model
{
  protected $fillable = [
    "business_id",
    "image_type",
    "image_path"
  ];

  public function business()
  {
    return $this->belongsTo(Business::class);
  }
}
