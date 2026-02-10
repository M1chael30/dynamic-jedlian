<?php

use App\Http\Controllers\Home\HomePageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//render home page
Route::get('/', [HomePageController::class, 'index'])->name('home');


require __DIR__ . '/contactUs.php';
require __DIR__ . '/achievements.php';
