<?php

use App\Http\Controllers\AboutUsContentController;
use App\Http\Controllers\Home\AboutUsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

    Route::get('/about-us', [AboutUsController::class, 'index'])->name('about.us.index');

    Route::prefix('admin')
    ->middleware(['auth'])
    ->controller(AboutUsContentController::class)
    ->group(function () {
        Route::get('/about_us-management', 'index')->name('about_us.management');
        Route::put('/about_us-management/{content}/update', 'update')->name('update.about_us_content');
    });
