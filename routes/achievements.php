<?php

use App\Http\Controllers\Home\AchievementController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/achievements', [AchievementController::class, 'index'])->name('achievement.index');