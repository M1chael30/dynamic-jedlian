<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Home\HomePageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//render home page
Route::get('/', [HomePageController::class, 'index'])->name('home');
Route::get('/login', [AuthController::class,'index'])->name('login');


require __DIR__ . '/contactUs.php';
require __DIR__ . '/achievements.php';
require __DIR__ . '/corporateGovernance.php';
require __DIR__ . '/aboutUs.php';
