<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')
    ->middleware("auth")
    ->group(function () {
        Route::get("/dashboard", [AdminController::class, "index"])
            ->name("admin.index");
        Route::post("/logout", [AuthController::class, 'logout'])->name('logout');
    });
