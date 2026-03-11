<?php

namespace Database\Seeders;

use App\Models\Businesses\Business;
use App\Models\Businesses\BusinessBranch;
use App\Models\Businesses\BusinessImage;
use App\Models\Businesses\BusinessSection;
use App\Models\Businesses\BusinessSocial;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BusinessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Business::factory()->createMany([
            [
                "name" => "Jedlian Communication",
                "description" => "Specializing in cutting-edge telecommunications technology, JEDLIAN COMMUNICATIONS at the forefront of providing seamless connectivity solutions for businesses and individuals.",
                "category" => "offices",
            ],
            [
                "name" => "Jedlian Construction",
                "description" => "JEDLIAN Construction is a trusted leader in construction, delivering excellence across residential, commercial, and government projects.",
                "category" => "branches",
            ],
            [
                "name" => "Jedlian Gasoline",
                "description" => "Jedlian Gasoline is committed to delivering premium-quality fuel that powers optimal performance and dependable operation for every engine.",
                "category" => "branches",
            ],
            [
                "name" => "Jedlian Drugstore",
                "description" => "Jedlian Drugstore provides a comprehensive range of pharmaceutical products and wellness services, dedicated to supporting the health and well-being of the community.",
                "category" => "branches",
            ],
            [
                "name" => "Casa Jedliana",
                "description" => "Nestled in a scenic location, Casa Jedliana Hotel and Resort delivers exceptional hospitality with luxurious accommodations and premium amenities, perfect for both leisure and business travelers.",
                "category" => "branches",
            ],
        ]);
        BusinessSection::factory()->createMany([
            [
                "business_id" => 1,
                "title" => null,
                "content" => "Jedlian Communications made significant strides in the Telecommunication sector by providing state-of-the-art communication solutions year 2008. Today, Jedlian Communications continues to expand its presence and enhance connectivity in the communities it serves, further solidifying its role as a leading provider in the industry."
            ],
            [
                "business_id" => 1,
                "title" => "Our Mission",
                "content" => "Our Mission is to provide innovative, reliable and quality installation and repair services while consistently exceeding our customers expectations for them to have the best internet experience."
            ],
            [
                "business_id" => 1,
                "title" => "Our Vision",
                "content" => "Our vision is to become the leader in providing a complete and full range of services to meet our customer's requirements."
            ],
            [
                "business_id" => 2,
                "title" => null,
                "content" => "Jedlian Construction provides reliable construction solutions specializing in commercial and residential projects, housing developments, repair and renovation works, and solar renewable energy systems. We are committed to delivering quality craftsmanship, efficient project execution, and sustainable building solutions that meet our clients’ needs."
            ],
            [
                "business_id" => 2,
                "title" => "Our Mission",
                "content" => "To build structures that stand the test of time by combining expert craftsmanship and innovation, while creating developments that meet evolving needs and uphold a consistent commitment to quality and responsibility."
            ],
            [
                "business_id" => 2,
                "title" => "Our Vision",
                "content" => "Jedlian Construction envisions becoming a trusted leader in the industry, recognized for excellence, innovation, and reliability. We aim to deliver impactful projects that support communities and reflect a lasting standard of quality."
            ],


            [
                "business_id" => 3,
                "title" => null,
                "content" => "Jedlian Gasoline provides reliable and high-quality fuel solutions designed to meet the daily transportation and business needs of our communities. We are committed to safe operations, efficient service, and dependable fuel supply that customers can trust."
            ],
            [
                "business_id" => 3,
                "title" => "Our Mission",
                "content" => "To deliver high-quality fuel products and dependable service that help keep vehicles and machinery running efficiently, while upholding strict safety and quality standards for the communities we serve."
            ],
            [
                "business_id" => 3,
                "title" => "Our Vision",
                "content" => "To contribute to community progress by providing quality fuel services delivered with integrity and professionalism."
            ],

            [
                "business_id" => 4,
                "title" => null,
                "content" => "Jedlian Drugstore is a community-focused pharmacy dedicated to providing accessible, affordable, and reliable healthcare products. We serve our customers with professionalism, care, and a strong commitment to quality and trust."
            ],
            [
                "business_id" => 4,
                "title" => "Our Mission",
                "content" => "To deliver more than pharmaceutical products by serving with care, professionalism, and purpose—seeking to make a positive difference in the everyday lives of the community."
            ],
            [
                "business_id" => 4,
                "title" => "Our Vision",
                "content" => "To be Generika’s preferred franchisee by providing consistent service and being recognized for excellence in operations, while fostering a reliable and hospitable for the communities we serve."
            ],

            [
                "business_id" => 5,
                "title" => null,
                "content" => "Embracing its Spanish-inspired motto \"Mi Casa Es Tu Casa\" Casa Jedliana Hotel and Resort is a haven where guests are embraced as family, now standing proudly as a symbol of luxury and tranquility in the heart of Nueva Ecija. Devoted to delivering premium accommodations and a range of amenities, Casa Jedliana remains connected to its origins, deeply entrenched in the verdant rice fields that characterize this picturesque region"
            ],
            [
                "business_id" => 5,
                "title" => "Our Mission",
                "content" => "Casa Jedliana is dedicated to crafting a haven where extraordinary memories find a home, passionately striving for unparalleled excellence to ensure that every celebration and stay becomes an enduring and exceptional experience, forever etched in the heart."
            ],
            [
                "business_id" => 5,
                "title" => "Our Vision",
                "content" => "Casa Jedliana warmly envisions becoming the cherished and leading hotel in the region, beckoning guests to experience an inviting extension of their homes, where every stay unfolds with personal stories and inspirations, creating a unique haven in the heart of hospitality."
            ],
        ]);

        BusinessBranch::factory()->createMany([
            [
                "business_id" => 1,
                "address" => "18B MAHARLIKA HIGHWAY, TUGUEGARAO CITY",
            ],
            [
                "business_id" => 1,
                "address" => "SILLAWIT, CAUAYAN CITY, ISABELA",
            ],
            [
                "business_id" => 1,
                "address" => "EAGLE CREST PHASE 1 BAKAKENG NEW SITE BAGUIO CITY",
            ],
            [
                "business_id" => 1,
                "address" => "BRGY BULAG WEST BANTAY ILOCOS SUR",
            ],
            [
                "business_id" => 1,
                "address" => "BRGY. BUNUAN GUESET DAGUPAN CITY",
            ],
            [
                "business_id" => 1,
                "address" => "CALULUT CITY OF SAN FERNANDO PAMPANGA",
            ],
            [
                "business_id" => 1,
                "address" => "BRGY TIBAG TARLAC CITY TARLAC",
            ],
            [
                "business_id" => 1,
                "address" => "DONA FRANCISCA BALANGA BATAAN",
            ],
            [
                "business_id" => 1,
                "address" => "BRGY. STO TOMAS STA. MONICA SUBDIVISION SUBIC ZAMBALES",
            ],
            [
                "business_id" => 1,
                "address" => "BRGY BINTOG PLARIDEL BULACAN",
            ],
            [
                "business_id" => 1,
                "address" => "BRGY. SAOG MARILAO BULACAN.",
            ],
            [
                "business_id" => 1,
                "address" => "KAYPIAN CITY OF SJDM BULACAN",
            ],
            [
                "business_id" => 1,
                "address" => "BARANGAY TAGPOS STA. ROSA NUEVA ECIJA 3101",
            ],
            [
                "business_id" => 1,
                "address" => "BRGY. QUINAVITY BAUANG LA UNION",
            ],
            [
                "business_id" => 3,
                "address" => "PAPAYA ROAD BRGY. MABINI EXTENSION CABANATUAN CITY NUEVA ECIJA (INTERSECTION OF WESLEYAN HOSPITAL)",
                "google_map_embed" => "!1m18!1m12!1m3!1d3679.8309244783445!2d120.975551!3d15.481859600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339729735045812f%3A0x52bfdf8592b82aeb!2sJEDLIAN%20GAS%20STATION!5e1!3m2!1sen!2sph!4v1773193600037!5m2!1sen!2sph"
            ],
            [
                "business_id" => 3,
                "address" => "BRGY. SAN RICARDO, TALAVERA NUEVA ECIJA (SAN RICARDO 7/11 ALONG THE HIGHWAY)",
                "google_map_embed" => "!1m18!1m12!1m3!1d3677.7760774053822!2d120.97323700000001!3d15.596952499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33972b45a831ab7d%3A0x88fecd50a7aed35d!2sJEDLIAN%20GASOLINE!5e1!3m2!1sen!2sph!4v1773193520730!5m2!1sen!2sph"
            ],
            [
                "business_id" => 4,
                "address" => "NEC, SAN ANTONIO POBLACION",
                "google_map_embed" =>
                "!1m18!1m12!1m3!1d3848.280342040044!2d120.8581086!3d15.306992600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396df000069435f%3A0xd4874a17543ee32a!2sGENERIKA%20DRUGSTORE%20SAN%20ANTONIO!5e0!3m2!1sen!2sph!4v1768881122165!5m2!1sen!2sph",
            ],
            [
                "business_id" => 4,
                "address" => "NEC, CABANATUAN 1- MABINI",
                "google_map_embed" =>
                "!1m18!1m12!1m3!1d3844.961467268648!2d120.97339300000002!3d15.486504700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397291fc836f58d%3A0xb2931ec53b490f6b!2sGENERIKA%20DRUGSTORE!5e0!3m2!1sen!2sph!4v1768881175733!5m2!1sen!2sph",
            ],
            [
                "business_id" => 4,
                "address" => "NEC, CABANATUAN 2- SUPERMARKET",
                "google_map_embed" =>
                "!1m18!1m12!1m3!1d3844.961467268648!2d120.97339300000002!3d15.486504700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397291fc836f58d%3A0xb2931ec53b490f6b!2sGENERIKA%20DRUGSTORE!5e0!3m2!1sen!2sph!4v1768881215739!5m2!1sen!2sph",
            ],
            [
                "business_id" => 4,
                "address" => "NEC, BONGABON",
                "google_map_embed" =>
                "!1m18!1m12!1m3!1d3842.2580700203284!2d121.143894!3d15.631240100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390cc5c41c5ca1b%3A0xa394c087ccbf352c!2sGenerika%20Drugstore!5e0!3m2!1sen!2sph!4v1768881305436!5m2!1sen!2sph",
            ],
            [
                "business_id" => 4,
                "address" => "NEC, LUPAO",
                "google_map_embed" =>
                "!1m18!1m12!1m3!1d61401.10258458572!2d120.8289578582031!3d15.879238800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390d8c000000001%3A0x3ea160239e668f5b!2sRBG%20Generika%20Drugstore!5e0!3m2!1sen!2sph!4v1768884903341!5m2!1sen!2sph",
            ],
            [
                "business_id" => 4,
                "address" => "NUV, ARITAO POBLACION",
                "google_map_embed" =>
                "!1m18!1m12!1m3!1d245368.87743236969!2d120.96584299999998!3d16.071263900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390f89555555555%3A0x28b1020187c5f919!2sGenerika%20Drugstore!5e0!3m2!1sen!2sph!4v1768881460855!5m2!1sen!2sph",
            ],
            [
                "business_id" => 4,
                "address" => "BULACAN, SAN RAFAEL KRYS",
                "google_map_embed" =>
                "!1m18!1m12!1m3!1d3853.3912749447454!2d120.93450119999999!3d15.0264591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339701843d6e16af%3A0x2fd2b817744baf3!2sGenerika%20Drug%20Store!5e0!3m2!1sen!2sph!4v1768881484922!5m2!1sen!2sph",
            ],
            [
                "business_id" => 4,
                "address" => "BULACAN, VICTORY TOWN CENTER",
                "google_map_embed" =>
                "!1m18!1m12!1m3!1d123407.33906592715!2d120.98565295820313!3d14.85445110000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a8c9e8159cd5%3A0x2b19800bb5f4384a!2sVictory%20Town%20Center%20(VTC)!5e0!3m2!1sen!2sph!4v1768881515382!5m2!1sen!2sph",
            ],
            [
                "business_id" => 4,
                "address" => "BULACAN, SAN ILDEFONSO",
                "google_map_embed" =>
                "!1m18!1m12!1m3!1d3852.4507672528557!2d120.94108179999998!3d15.07846520000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397044000000001%3A0xdd07a267e5e67809!2sGENERIKA%20DRUGSTORE%20-%20Poblacion%20San%20Ildefonso%20Bulacan!5e0!3m2!1sen!2sph!4v1768881551901!5m2!1sen!2sph",
            ],
            [
                "business_id" => 4,
                "address" => "CM RECTO, PAMPANGA",
                "google_map_embed" =>
                "!1m18!1m12!1m3!1d246533.2548824469!2d120.50663486965877!3d15.09880278473987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f26a9c6d7c2b%3A0x92dd8af09167aff6!2sGenerika%20Drugstore!5e0!3m2!1sen!2sph!4v1768885052702!5m2!1sen!2sph",
            ],
            [
                "business_id" => 4,
                "address" => "MAESTRANG KIKAY, TALAVERA",
                "google_map_embed" =>
                "!1m14!1m8!1m3!1d122965.11602319845!2d120.8866882!3d15.6098109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390d52555555555%3A0xf7d8103c55e07742!2sGENERIKA%20DRUGSTORE!5e0!3m2!1sen!2sph!4v1768885121874!5m2!1sen!2sph",
            ]
        ]);

        BusinessSocial::factory()->createMany([
            [
                "business_id" => 1,
                "platform_name" => "facebook",
                "url" => "https://www.facebook.com/jedliancommunications",
                "class" => "fa-brands fa-facebook",
            ],
            [
                "business_id" => 5,
                "platform_name" => "facebook",
                "url" => "https://www.facebook.com/casa.jedliana",
                "class" => "fa-brands fa-facebook",
            ],
            [
                "business_id" => 5,
                "platform_name" => "instagram",
                "url" => "https://www.instagram.com/casajedliana",
                "class" => "fa-brands fa-instagram",
            ],
        ]);

        BusinessImage::factory()->createMany([

        ]);


    }
}
