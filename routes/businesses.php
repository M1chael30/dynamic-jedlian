<?php

use App\Http\Controllers\BusinessManagementController;
use App\Http\Controllers\Home\BusinessController;
use Illuminate\Support\Facades\Route;

Route::get("/businesses/{business}", [BusinessController::class, 'index'])->name('business');

Route::prefix('admin')->middleware(["auth"])->controller(BusinessManagementController::class)->group(function( ) {
    Route::get("/business-management", 'index')->name('business.management');
    Route::get('/business-management/{business}','show')->name('business.show');
    Route::post("/business-management/business/store", 'storeBusiness')->name('business.store');
    Route::put("/business-management/business/{business}/update", 'updateBusiness')->name('business.update');
    Route::delete("/business-management/business/{business}/delete", 'deleteBusiness')->name('business.delete');

    Route::post('/business-management/section/store', 'storeSection')->name('business.store.section');
    Route::post('/business-management/image/store', 'storeImage')->name('business.store.image');
    Route::post('/business-management/branch/store', 'storeBranch')->name('business.store.branch');
    Route::post('/business-management/social/store', 'storeSocial')->name('business.store.social');

    Route::put('/business-management/section/{section}/update', 'updateSection')->name('business.update.section');
    Route::put('/business-management/image/{image}/update', 'updateImage')->name('business.update.image');
    Route::put('/business-management/branch/{branch}/update', 'updateBranch')->name('business.update.branch');
    Route::put('/business-management/social/{social}/update',  'updateSocial')->name('business.update.social');

    Route::delete('/business-management/section/{section}/delete', 'deleteSection')->name('business.delete.section');
    Route::delete('/business-management/image/{image}/delete', 'deleteImage')->name('business.delete.image');
    Route::delete('/business-management/branch/{branch}/delete', 'deleteBranch')->name('business.delete.branch');
    Route::delete('/business-management/social/{social}/delete', 'deleteSocial')->name('business.delete.social');
});