<?php

use App\Http\Controllers\Home\ContactUsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('guest')->group(function () {
    Route::get('/contact-us', [ContactUsController::class, 'index'])->name('contact.us.index');
});
