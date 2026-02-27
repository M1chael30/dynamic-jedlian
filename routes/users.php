<?php

use App\Http\Controllers\UserManagementController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')
 ->middleware(['auth'])
 ->controller(UserManagementController::class)
 ->group(function () {
  Route::get('/user-management', 'index')->name('user.index');
  Route::post('/user-management', 'store')->name('user.store');
  Route::put('/user-management/{user}/update', 'update')->name('user.update');
  Route::delete('/user-management/{user}', 'destroy')->name('user.destroy');
  Route::put('/user-management/{user}/reset-password', 'resetPassword')->name('user.reset.password');
 });
