<?php

use App\Http\Controllers\AchievementManagementController;
use App\Http\Controllers\Home\AchievementController as AchievementPageController;
use Illuminate\Support\Facades\Route;


Route::get('/achievements', [AchievementPageController::class, 'index'])->name('achievement.index');


// achivement management
Route::prefix('admin')
    ->middleware(['auth'])
    ->controller(AchievementManagementController::class)
    ->group(function () {
        Route::get('/achievement-management', 'index')->name('achievement.management');

        Route::post('/achievement-management/period', 'storePeriod')->name('achievement.store.period');

        Route::post('/achievement-management/title', 'storeAchievement')->name('achievement.store.title');

        Route::post('/achievement-management/description/store', 'storeAchievementDescription')->name('achievement.store.description');

        Route::put('/achievement-management/{description}/update', 'updateDescription')->name('achievement.update.description');

        Route::patch('/achievement-management/{achievement}/update', 'updateAchievement')->name('achievement.update.title');

        Route::delete('/achievement-management/{description}/delete', 'deleteDescription')->name('achievement.delete.description');

        Route::post('/achievement-management/{achievement}/delete', 'deleteAchievement')->name('achievement.delete.title');
    });
