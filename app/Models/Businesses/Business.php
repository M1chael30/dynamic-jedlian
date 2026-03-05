<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    /** @use HasFactory<\Database\Factories\Businesses\BusinessFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'category',
        'isVisible'
    ];

    public function business_sections()
    {
        return $this->hasMany(BusinessSection::class);
    }

    public function business_images()
    {
        return $this->hasMany(BusinessImage::class);
    }

    public function business_socials()
    {
        return $this->hasMany(BusinessSocial::class);
    }

    public function business_branches()
    {
        return $this->hasMany(BusinessBranch::class);
    }
}
