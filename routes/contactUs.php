<?php

use App\Http\Controllers\Home\ContactUsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/contact-us', [ContactUsController::class, 'index'])->name('contact.us.index');
