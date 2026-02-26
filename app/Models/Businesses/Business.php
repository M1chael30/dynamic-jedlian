<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'category',
    ];

    public function business_sections(){
        return $this->hasMany(BusinessSection::class);
    }

    public function business_images() {
        return $this->hasMany(BusinessImage::class);
    }

    public function business_socials() {
        return $this->hasMany(BusinessSocial::class);
    }

    public function business_branches() {
        return $this->hasMany(BusinessBranch::class);
    }
}
