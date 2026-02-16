<?php

use App\Http\Controllers\Home\AboutUsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('/about-us', [AboutUsController::class, 'index'])->name('about.us.index');
});
