<?php

namespace Database\Seeders;

use App\Models\Achievements\Achievement;
use App\Models\Achievements\AchievementDescription;
use App\Models\Achievements\AchievementImage;
use App\Models\Achievements\Period;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AchievementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Period::factory()->createMany([
            [
                "year" => "2024"
            ],
            [
                "year" => "2023"
            ],
            [
                "year" => "2021"
            ],
            [
                "year" => "2019"
            ],
            [
                "year" => "2016"
            ],
            [
                "year" => "2015"
            ],
            [
                "year" => "2014"
            ],
        ]);

      
    }
}
