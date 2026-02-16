<?php

use App\Http\Controllers\Home\AboutUsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

    Route::get('/about-us', [AboutUsController::class, 'index'])->name('about.us.index');
