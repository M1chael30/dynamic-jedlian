<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('123456789'),
        ]);

        Page::factory()->createMany([
            [
                'name' => 'Home',
                'route_name' => 'home',
            ],
            [
                'name' => 'About Us',
                'route_name' => 'home',


            ],
            [
                'name' => 'Our Businesses',
                'route_name' => 'home',

            ],
            [
                'name' => 'Achievements',
                'route_name' => 'achievement.management',

            ],
            [
                'name' => 'Contact Us',
                'route_name' => 'home',

            ],
        ]);
    }
}
