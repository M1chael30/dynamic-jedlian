<?php

use App\Http\Controllers\Home\HomePageController;
use App\Http\Controllers\HomeManagementController;
use Illuminate\Support\Facades\Route;

//render home page
Route::get('/', [HomePageController::class, 'index'])->name('home');



Route::prefix('admin')
    ->middleware(['auth'])
    ->controller(HomeManagementController::class)
    ->group(function () {
        Route::get('/home-management', 'index')->name('home.management');
        Route::put('/home-management/{homestat}/update', 'update')->name('update.homestat');
    });

require __DIR__ . '/contactUs.php';
require __DIR__ . '/achievements.php';
require __DIR__ . '/corporateGovernance.php';
require __DIR__ . '/aboutUs.php';


require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/businesses.php';

