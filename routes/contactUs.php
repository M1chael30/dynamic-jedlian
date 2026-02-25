<?php

use App\Http\Controllers\ContactUsManagementController;
use App\Http\Controllers\Home\ContactUsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/contact-us', [ContactUsController::class, 'index'])
    ->name('contact.us.index');

Route::prefix('admin')
    ->middleware(['auth'])
    ->controller(ContactUsManagementController::class)
    ->group(function () {
        Route::get('/contact_us-management', 'index')->name('contact_us.management');
        Route::put('/contact_us-management/{contactUs}/update', 'update')->name('contact_us.update');
    });
