<?php

use App\Http\Controllers\Public\AboutUsController;
use App\Http\Controllers\Public\AchievementController;
use App\Http\Controllers\Public\BusinessController;
use App\Http\Controllers\Public\ContactUsController;
use App\Http\Controllers\Public\CorporateGovernanceController;
use App\Http\Controllers\Public\HomePageController;
use Illuminate\Support\Facades\Route;


// public routes
// home
Route::get('/', [HomePageController::class, 'index'])
    ->name('home');

// about us
Route::get('/about-us', [AboutUsController::class, 'index'])
    ->name('about.us.index');

// achievements
Route::get('/achievements', [AchievementController::class, 'index'])
    ->name('achievement.index');

// businesses
Route::get("/businesses/{business}", [BusinessController::class, 'index'])
    ->name('business');

// contact us
Route::get('/contact-us', [ContactUsController::class, 'index'])
    ->name('contact.us.index');

// corporate governance
Route::get('/corporate-governance', [CorporateGovernanceController::class, 'index'])
    ->name('corporate.governance.index');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
