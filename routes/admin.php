<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware("auth")->group(function () {
    Route::get("/admin", [AdminController::class, "index"])->name("admin.index");
    Route::post("/admin/logout", [AuthController::class, 'logout'])->name('logout');
}); 
