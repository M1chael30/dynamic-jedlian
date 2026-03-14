<?php

use App\Http\Controllers\Admin\AboutUsController;
use App\Http\Controllers\Admin\AchievementController;
use App\Http\Controllers\Admin\BusinessController;
use App\Http\Controllers\Admin\ContactUsController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\EnsureUserIsAdminMiddleware;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')
    ->middleware(["auth", EnsureUserIsAdminMiddleware::class])
    ->group(function () {

        // profile
        Route::prefix('profile')
            ->controller(ProfileController::class)
            ->group(function () {

                Route::get('/', 'index')->name('profile.index');

                Route::post('/update', 'update')->name('profile.update');

                Route::post('/update-password', 'updatePassword')
                    ->name('profile.update.password');
            });

        // users
        Route::prefix('user-management')
            ->controller(UserController::class)
            ->group(function () {

                Route::get('/', 'index')->name('user.index');

                Route::post('/', 'store')->name('user.store');

                Route::put('/{user}', 'update')->name('user.update');

                Route::delete('/{user}', 'destroy')
                    ->name('user.destroy');

                Route::put('/{user}/reset-password', 'resetPassword')
                    ->name('user.reset.password');
            });

        // logout
        Route::post("/logout", [AuthController::class, 'logout'])->name('logout');

        // dashboard
        Route::get("/dashboard", [DashboardController::class, "index"])
            ->name("admin.index");

        // home
        Route::prefix('home-management')
            ->controller(HomeController::class)
            ->group(function () {
                Route::get('/', 'index')->name('home.management');
                Route::put('/{homestat}', 'update')->name('update.homestat');
            });

        // achivements
        Route::prefix('achievement-management')
            ->controller(AchievementController::class)
            ->group(function () {

                Route::get('/', 'index')->name('achievement.management');

                Route::post('/period', 'storePeriod')->name('achievement.store.period');

                Route::post('/title', 'storeAchievement')
                    ->name('achievement.store.title');

                Route::post('/description', 'storeAchievementDescription')
                    ->name('achievement.store.description');

                Route::put('/{achievementVisiblity}/update', 'updateAchievementVisibility')->name('achievement.update.visibility');

                Route::put('/description/{description}', 'updateDescription')
                    ->name('achievement.update.description');

                Route::patch('/achievement/{achievement}', 'updateAchievement')
                    ->name('achievement.update.title');

                Route::delete('/description/{description}', 'deleteDescription')
                    ->name('achievement.delete.description');

                Route::post('/achievement/{achievement}', 'deleteAchievement')
                    ->name('achievement.delete.title');
            });

        // about us
        Route::prefix('about-us-management')
            ->controller(AboutUsController::class)
            ->group(function () {
                Route::get('/', 'index')->name('about_us.management');
                Route::put('/{content}', 'update')->name('update.about_us_content');
            });

        // businesses
        Route::prefix('business-management')
            ->controller(BusinessController::class)
            ->group(function () {

                Route::get('/', 'index')->name('business.management');
                Route::get('/{business}', 'show')->name('business.show');

                Route::post('/', 'storeBusiness')->name('business.store');
                Route::put('/{business}', 'updateBusiness')->name('business.update');
                Route::delete('/{business}', 'deleteBusiness')->name('business.delete');

                Route::post('/section', 'storeSection')->name('business.store.section');
                Route::put('/section/{section}', 'updateSection')
                    ->name('business.update.section');
                Route::delete('/section/{section}', 'deleteSection')
                    ->name('business.delete.section');

                Route::post('/branch', 'storeBranch')->name('business.store.branch');
                Route::put('/branch/{branch}', 'updateBranch')
                    ->name('business.update.branch');
                Route::delete('/branch/{branch}', 'deleteBranch')
                    ->name('business.delete.branch');

                Route::post('/image', 'storeImage')->name('business.store.image');
                Route::put('/image/{image}', 'updateImage')
                    ->name('business.update.image');
                Route::delete('/image/{image}', 'deleteImage')
                    ->name('business.delete.image');

                Route::post('/social', 'storeSocial')->name('business.store.social');
                Route::put('/social/{social}',  'updateSocial')
                    ->name('business.update.social');
                Route::delete('/social/{social}', 'deleteSocial')
                    ->name('business.delete.social');
            });

        // contact us
        Route::prefix('contact-us-management')
            ->controller(ContactUsController::class)
            ->group(function () {

                Route::get('/', 'index')->name('contact_us.management');

                Route::put('/{contactUs}', 'update')->name('contact_us.update');
            });
    });
