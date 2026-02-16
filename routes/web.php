<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Home\HomePageController;
use Illuminate\Support\Facades\Route;

//render home page
Route::get('/', [HomePageController::class, 'index'])->middleware('guest')->name('home');


require __DIR__ . '/contactUs.php';
require __DIR__ . '/achievements.php';
require __DIR__ . '/corporateGovernance.php';
require __DIR__ . '/aboutUs.php';


require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
