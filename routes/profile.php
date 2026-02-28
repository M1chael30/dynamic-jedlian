<?php

use App\Http\Controllers\ProfileManagementController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')
 ->middleware(['auth'])
 ->controller(ProfileManagementController::class)
 ->group(function () {
  Route::get('/profile', 'index')->name('profile.index');
  Route::post('/profile/update', 'update')->name('profile.update');
  Route::post('/profile/update-password', 'updatePassword')
   ->name('profile.update.password');
 });
