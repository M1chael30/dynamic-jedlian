<?php

namespace Database\Seeders;

use App\Models\AboutUsContent;
use App\Models\ContactUs;
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

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        //     'password' => bcrypt('123456789'),
        // ]);

        // Page::factory()->createMany([
        //     [
        //         'name' => 'Home',
        //         'route_name' => 'home.management',
        //     ],
        //     [
        //         'name' => 'About Us',
        //         'route_name' => 'about_us.management',


        //     ],
        //     [
        //         'name' => 'Our Businesses',
        //         'route_name' => 'home',

        //     ],
        //     [
        //         'name' => 'Achievements',
        //         'route_name' => 'achievement.management',

        //     ],
        //     [
        //         'name' => 'Contact Us',
        //         'route_name' => 'home',

        //     ],
        // ]);

        // HomeStat::factory()->createMany([
        //     [
        //         'title' => 'years of experience',
        //         'stat' => '20+',
        //         'description' => 'Two decades of delivering trusted, innovative solutions.',
        //     ],
        //     [
        //         'title' => 'overall employees',
        //         'stat' => '700+',
        //         'description' => 'A talented team driving excellence across all operations.',
        //     ],
        //     [
        //         'title' => 'branches & offices',
        //         'stat' => '26',
        //         'description' => 'Strategically located in Regions I, II, III & CAR to serve communities nationwide.',
        //     ],
        //     [
        //         'title' => 'NFCC',
        //         'stat' => '1B+',
        //         'description' => 'Strong financial capacity for large-scale, long-term projects.',
        //     ],
        // ]);

        // AboutUsContent::factory()->createMany([
        //     [
        //         'title' => 'CEO description',
        //         'content' => "Jedlian Holdings Inc. is a diversified parent company that oversees and strategically manages five thriving business enterprises, each contributing to the organization's continued growth and reputation for excellence: Jedlian Communication, Jedlian Construction, Jedlian Gasoline, Jedlian Drugstore, and Casa Jedliana Hotel and Resort."
        //     ],
        //     [
        //         'title' => 'COO description',
        //         "content" => "Built on a strong foundation in telecommunications, the company expanded into construction, hospitality, energy, and healthcare—delivering quality, innovation, and value across industries. United by a commitment to excellence, Jedlian Holdings continues to drive sustainable growth and long-term impact."
        //     ],
        //     [
        //         "title" => "Geo footprint",
        //         "content" => "Our company has successfully achieved major advancements in the ongoing development of our projects. As a result, we are proud to have established a prominent foothold in various regions in Luzon. This momentum showcases our widespread reach and strong presence, proving our capacity to deliver impressive results."
        //     ]
        // ]);

        ContactUs::factory()->createMany([
            [
                'title' => "Company's Phone Number",
                'content' => "+63 917 588 0474"
            ],
            [
                'title' => "Company Email",
                'content' => "jedlian.humanresources@gmail.com"
            ],
            [
                'title' => "Monday - Sunday",
                'content' => "8:00am - 5:00pm"
            ],
            [
                'title' => "Purok 1, Barangay Tagpos, Santa Rosa, Nueva Ecija",
                'content' => "https://www.google.com/maps/place/Jedlian+Communication+Inc.+Head+Office/@15.4465586,120.9825232,692m/data=!3m2!1e3!4b1!4m6!3m5!1s0x339729e1c706f4ad:0xd0edade06adaa587!8m2!3d15.4465586!4d120.9850981!16s%2Fg%2F11mhglwsm3!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
            ],
        ]);
    }
}
