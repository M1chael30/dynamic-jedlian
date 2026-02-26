<?php

use App\Http\Controllers\BusinessManagementController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->middleware(["auth"])->controller(BusinessManagementController::class)->group(function( ) {
    Route::get("/business-management", 'index')->name('business.management');
    Route::get('/business-management/{business}','show')->name('business.show');
    Route::post('/business-management/store', 'store')->name('business.store.section');
});