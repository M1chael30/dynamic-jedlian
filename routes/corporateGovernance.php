<?php

use App\Http\Controllers\Home\ContactUsController;
use App\Http\Controllers\Home\CorporateGovernanceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/corporate-governance', [CorporateGovernanceController::class, 'index'])
 ->name('corporate.governance.index');
