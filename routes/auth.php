<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {

    // login
    Route::get('/login', [AuthController::class, 'index'])
        ->name('login');

    // authenticate
    Route::post('/login', [AuthController::class, 'authenticate']);
});
