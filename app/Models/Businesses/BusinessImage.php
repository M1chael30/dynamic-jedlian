<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessImage extends Model
{
/** @use HasFactory<\Database\Factories\Businesses\BusinessImageFactory> */
    use HasFactory;
    
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
