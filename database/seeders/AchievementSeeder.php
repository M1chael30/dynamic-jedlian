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

        Achievement::factory()->createMany([
            [
                "period_id" => 7,
                "title" => "Aspire Awardee",
                "is_visible" => true,
            ],
            [
                "period_id" => 6,
                "title" => "Quarter 1 and 2 Awards",
                "is_visible" => true,
            ],
            [
                "period_id" => 5,
                "title" => "NCL Award",
                "is_visible" => true,
            ],
            [
                "period_id" => 4,
                "title" => "Hakot Award 2019",
                "is_visible" => true,
            ],
            [
                "period_id" => 3,
                "title" => "Hakot Award 2021",
                "is_visible" => true,
            ],
            [
                "period_id" => 2,
                "title" => "Awarded OSP",
                "is_visible" => true,
            ],
            [
                "period_id" => 1,
                "title" => "Traiblazer of Year",
                "is_visible" => true,
            ],
        ]);

        AchievementDescription::factory()->createMany([
            [
                "achievement_id" => 1,
                "description_text" => "2014 Aspire Awardee Top BBSP Nationwide",
            ],
            [
                "achievement_id" => 2,
                "description_text" => "Quarter 1 - 2015 Excellence Quality Assurance",
            ],

            [
                "achievement_id" => 2,
                "description_text" => "Quarter 2 - 2015 Excellence Quality Assurance",
            ],
            [
                "achievement_id" => 3,
                "description_text" => "NCL Award",
            ],
            [
                "achievement_id" => 4,
                "description_text" => "Took 3 Narra Areas in North and Central Luzon in 2019 to help improve regional performance.",
            ],
            [
                "achievement_id" => 4,
                "description_text" => "Ranked number 1 in Repair NPS (Net Promoter Score Category.",
            ],
            [
                "achievement_id" => 4,
                "description_text" => "Ranked number 2 in Partner of the Year (Annual CFS Partner Awards.",
            ],
            [
                "achievement_id" => 4,
                "description_text" => "Actively participated in Narra Council in Quarter 3 by sharing operational strategies and plans.",
            ],
            [
                "achievement_id" => 5,
                "description_text" => "Passed monthly scorecard for full year 2 areas: Area 1 and 4.",
            ],
            [
                "achievement_id" => 5,
                "description_text" => "Highest percentage (%) in terms of monthly scorecard passed at 97% (35 of 36 months passed for 3 areas) – Number 1 in Nationwide tally.",
            ],
            [
                "achievement_id" => 5,
                "description_text" => "Top 1 in Install Flow through (Controllable) in NCL reached as high at 96.78%, and Top 2 Nationally.",
            ],
            [
                "achievement_id" => 6,
                "description_text" => "Awarded OSP Corrective and Preventive Maintenance within the whole regions of North and Central Luzon.",
            ],
            [
                "achievement_id" => 7,
                "description_text" => "Lakas Ginhawa Angat Lahat Award.",
            ],
        ]);
    }
}
