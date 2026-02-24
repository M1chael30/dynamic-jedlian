<?php

namespace Database\Seeders;

use App\Models\AboutUsContent;
use App\Models\HomeStat;
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
                'route_name' => 'home.management',
            ],
            [
                'name' => 'About Us',
                'route_name' => 'about_us.management',


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

        HomeStat::factory()->createMany([
            [
                'title' => 'years of experience',
                'stat' => '20+',
                'description' => 'Two decades of delivering trusted, innovative solutions.',
            ],
            [
                'title' => 'overall employees',
                'stat' => '700+',
                'description' => 'A talented team driving excellence across all operations.',
            ],
            [
                'title' => 'branches & offices',
                'stat' => '26',
                'description' => 'Strategically located in Regions I, II, III & CAR to serve communities nationwide.',
            ],
            [
                'title' => 'NFCC',
                'stat' => '1B+',
                'description' => 'Strong financial capacity for large-scale, long-term projects.',
            ],
        ]);

        AboutUsContent::factory()->createMany([
            [
                'title' => 'CEO description',
                'content' => "Jedlian Holdings Inc. is a diversified parent company that oversees and strategically manages five thriving business enterprises, each contributing to the organization's continued growth and reputation for excellence: Jedlian Communication, Jedlian Construction, Jedlian Gasoline, Jedlian Drugstore, and Casa Jedliana Hotel and Resort."
            ],
            [
                'title' => 'COO description',
                "content" => "Built on a strong foundation in telecommunications, the company expanded into construction, hospitality, energy, and healthcare—delivering quality, innovation, and value across industries. United by a commitment to excellence, Jedlian Holdings continues to drive sustainable growth and long-term impact."
            ],
            [
                "title"=> "Geo footprint",
                "content" => "Our company has successfully achieved major advancements in the ongoing development of our projects. As a result, we are proud to have established a prominent foothold in various regions in Luzon. This momentum showcases our widespread reach and strong presence, proving our capacity to deliver impressive results."
            ]
        ]);
    }
}
