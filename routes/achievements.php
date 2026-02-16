<?php

use App\Http\Controllers\Home\AchievementController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('guest')->group(function () {
    Route::get('/achievements', [AchievementController::class, 'index'])->name('achievement.index');
});
