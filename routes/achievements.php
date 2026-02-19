<?php

use App\Http\Controllers\AchievementController as AchievementManagementController;
use App\Http\Controllers\Home\AchievementController as AchievementPageController;
use Illuminate\Support\Facades\Route;


Route::get('/achievements', [AchievementPageController::class, 'index'])->name('achievement.index');


// achivement management
Route::resource('achievements_management', AchievementManagementController::class)->middleware('auth');
