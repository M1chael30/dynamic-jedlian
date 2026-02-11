import { FaFacebook, FaSquareInstagram } from 'react-icons/fa6';

import casaJedlianaLogo from '/public/images/casa-jedliana-logo.png';
import jedlianCommunicationLogo from '/public/images/jedlian-communication-logo.png';
import jedlianConstructionLogo from '/public/images/jedlian-construction-logo.png';
import jedlianDrugstoreLogo from '/public/images/jedlian-drugstore-logo.png';
import jedlianGasolineLogo from '/public/images/jedlian-gasoline-logo.png';

import bannerCasa from '/public/images/business-page-img/bannerCasa.png';
import bannerCommunication from '/public/images/business-page-img/bannerCommunication.png';
import bannerConstruction from '/public/images/business-page-img/bannerConstruction.png';
import bannerDrugStore from '/public/images/business-page-img/bannerDrugstore.png';
import bannerGasoline from '/public/images/business-page-img/bannerGasoline.png';

import circleCasaJedliana from '/public/images/business-page-img/circleCasaJedliana.png';
import circleJedlianCommunication from '/public/images/business-page-img/circleJedlianCommunication.png';
import circleJedlianConstruction from '/public/images/business-page-img/circleJedlianConstruction.png';
import circleJedlianDrugStore from '/public/images/business-page-img/circleJedlianDrugstore.png';
import circleJedlianGasoline from '/public/images/business-page-img/circleJedlianGasoline.png';

const homeStatsData = [
    {
        number: '20+',
        title: 'years of experience',
        description: 'Two decades of delivering trusted, innovative solutions.',
    },
    {
        number: '700+',
        title: 'overall employees',
        description: 'A talented team driving excellence across all operations.',
    },
    {
        number: '26',
        title: '  branches & offices',
        description: 'Strategically located in Regions I, II, III & CAR to serve communities nationwide.',
    },
    {
        number: '1B+',
        title: 'NFCC',
        description: 'Strong financial capacity for large-scale, long-term projects.',
    },
];

const jedlianBusinessesData = [
    {
        id: 0,
        title: 'Jedlian Commmunication',
        titleTwo: 'Our Mission',
        titleThree: 'Our Vision',
        description:
            'Specializing in cutting-edge telecommunications technology, JEDLIAN COMMUNICATIONS at the forefront of providing seamless connectivity solutions for businesses and individuals.',
        descriptionTwo:
            'Jedlian Communications made significant strides in the Telecommunication sector by providing state-of-the-art communication solutions year 2008. Today, Jedlian Communications continues to expand its presence and enhance connectivity in the communities it serves, further solidifying its role as a leading provider in the industry.',
        descriptionThree:
            'Our Mission is to provide innovative, reliable and quality installation and repair services while consistently exceeding our customers expectations for them to have the best internet experience.',
        descriptionFour: "Our vision is to become the leader in providing a complete and full range of services to meet our customer's requirements.",
        img: jedlianCommunicationLogo,
        imgBanner: bannerCommunication,
        imgCircleBanner: circleJedlianCommunication,
        alt: 'Jedlian Communication Logo',
        path: '/business/jedlian-communication',
        params: 'jedlian-communication',
        socials: [
            {
                icon: FaFacebook,
                socialLink: 'https://www.facebook.com/jedliancommunications',
            },
        ],
    },
    {
        id: 1,
        title: 'Jedlian Construction',
        titleTwo: 'Our Mission',
        titleThree: 'Our Vision',
        description:
            'JEDLIAN Construction is a trusted leader in construction, delivering excellence across residential, commercial, and government projects.',
        descriptionTwo:
            'Jedlian Construction provides reliable construction solutions specializing in commercial and residential projects, housing developments, repair and renovation works, and solar renewable energy systems. We are committed to delivering quality craftsmanship, efficient project execution, and sustainable building solutions that meet our clients’ needs.',
        descriptionThree:
            'To build structures that stand the test of time by combining expert craftsmanship and innovation, while creating developments that meet evolving needs and uphold a consistent commitment to quality and responsibility.',
        descriptionFour:
            'Jedlian Construction envisions becoming a trusted leader in the industry, recognized for excellence, innovation, and reliability. We aim to deliver impactful projects that support communities and reflect a lasting standard of quality.',
        img: jedlianConstructionLogo,
        imgBanner: bannerConstruction,
        imgCircleBanner: circleJedlianConstruction,
        alt: 'Jedlian Construction Logo',
        path: '/business/jedlian-construction',
        params: 'jedlian-construction',
    },
    {
        id: 2,
        title: 'Jedlian Gasoline',
        titleTwo: 'Our Mission',
        titleThree: 'Our Vision',
        description:
            'Jedlian Gasoline is committed to delivering premium-quality fuel that powers optimal performance and dependable operation for every engine.',
        descriptionTwo:
            'Jedlian Gasoline provides reliable and high-quality fuel solutions designed to meet the daily transportation and business needs of our communities. We are committed to safe operations, efficient service, and dependable fuel supply that customers can trust.',
        descriptionThree:
            'To deliver high-quality fuel products and dependable service that help keep vehicles and machinery running efficiently, while upholding strict safety and quality standards for the communities we serve.',
        descriptionFour: 'To contribute to community progress by providing quality fuel services delivered with integrity and professionalism.',
        img: jedlianGasolineLogo,
        imgBanner: bannerGasoline,
        imgCircleBanner: circleJedlianGasoline,
        alt: 'Jedlian Gasoline Logo',
        path: '/business/jedlian-gasoline',
        params: 'jedlian-gasoline',
    },
    {
        id: 3,
        title: 'Jedlian Drugstore',
        titleTwo: 'Our Mission',
        titleThree: 'Our Vision',
        description:
            'JEDLIAN Drugstore provides a comprehensive range of pharmaceutical products and wellness services, dedicated to supporting the health and well-being of the community.',
        descriptionTwo:
            'Jedlian Drugstore is a community-focused pharmacy dedicated to providing accessible, affordable, and reliable healthcare products. We serve our customers with professionalism, care, and a strong commitment to quality and trust.',
        descriptionThree:
            'To deliver more than pharmaceutical products by serving with care, professionalism, and purpose—seeking to make a positive difference in the everyday lives of the community.',
        descriptionFour:
            'To be Generika’s preferred franchisee by providing consistent service and being recognized for excellence in operations, while fostering a reliable and hospitable for the communities we serve.',
        img: jedlianDrugstoreLogo,
        imgBanner: bannerDrugStore,
        imgCircleBanner: circleJedlianDrugStore,
        alt: 'Jedlian Drugstore Logo',
        path: '/business/jedlian-drugstore',
        params: 'jedlian-drugstore',
    },
    {
        id: 4,
        title: 'Casa Jedliana',
        titleTwo: 'Our Mission',
        titleThree: 'Our Vision',
        description:
            'Nestled in a scenic location, Casa Jedliana Hotel and Resort delivers exceptional hospitality with luxurious accommodations and premium amenities, perfect for both leisure and business travelers.',
        descriptionTwo:
            'Embracing its Spanish-inspired motto "Mi Casa Es Tu Casa," Casa Jedliana Hotel and Resort is a haven where guests are embraced as family, now standing proudly as a symbol of luxury and tranquility in the heart of Nueva Ecija. Devoted to delivering premium accommodations and a range of amenities, Casa Jedliana remains connected to its origins, deeply entrenched in the verdant rice fields that characterize this picturesque region',
        descriptionThree:
            'Casa Jedliana is dedicated to crafting a haven where extraordinary memories find a home, passionately striving for unparalleled excellence to ensure that every celebration and stay becomes an enduring and exceptional experience, forever etched in the heart.',
        descriptionFour:
            'Casa Jedliana warmly envisions becoming the cherished and leading hotel in the region, beckoning guests to experience an inviting extension of their homes, where every stay unfolds with personal stories and inspirations, creating a unique haven in the heart of hospitality.',
        img: casaJedlianaLogo,
        imgBanner: bannerCasa,
        imgCircleBanner: circleCasaJedliana,
        alt: 'Casa Jedliana Logo',
        path: '/business/casa-jedliana',
        params: 'casa-jedliana',
        socials: [
            {
                icon: FaFacebook,
                socialLink: 'https://www.facebook.com/casa.jedliana',
            },
            {
                icon: FaSquareInstagram,
                socialLink: 'https://www.instagram.com/casajedliana',
            },
        ],
    },
];

const jedlianCommunicationOffices = {
    title: 'Jedlian Communication',
    titleTwo: 'Offices',
    location: [
        {
            locationName: '18B MAHARLIKA HIGHWAY, TUGUEGARAO CITY',
        },
        {
            locationName: 'SILLAWIT, CAUAYAN CITY, ISABELA ',
        },
        {
            locationName: 'EAGLE CREST PHASE 1 BAKAKENG NEW SITE BAGUIO CITY ',
        },
        {
            locationName: 'BRGY BULAG WEST BANTAY ILOCOS SUR',
        },
        {
            locationName: 'BRGY. BUNUAN GUESET DAGUPAN CITY ',
        },
        {
            locationName: 'CALULUT CITY OF SAN FERNANDO PAMPANGA',
        },
        {
            locationName: 'BRGY TIBAG TARLAC CITY TARLAC',
        },
        {
            locationName: 'DONA FRANCISCA BALANGA BATAAN',
        },
        {
            locationName: 'BRGY. STO TOMAS STA. MONICA SUBDIVISION SUBIC ZAMBALES',
        },
        {
            locationName: 'BRGY BINTOG PLARIDEL BULACAN',
        },
        {
            locationName: 'BRGY. SAOG MARILAO BULACAN.',
        },
        {
            locationName: 'Kaypian City of SJDM Bulacan',
        },
        {
            locationName: 'BARANGAY TAGPOS STA. ROSA NUEVA ECIJA 3101',
        },
        {
            locationName: 'BRGY. QUINAVITY BAUANG LA UNION',
        },
    ],
};

const jedlianGasolineBranches = {
    title: 'Jedlian Gasoline',
    titleTwo: 'Branches',
    location: [
        {
            locationName: 'PAPAYA ROAD BRGY. MABINI EXTENSION CABANATUAN CITY NUEVA ECIJA (INTERSECTION OF WESLEYAN HOSPITAL)',
            longLat:
                '!1m18!1m12!1m3!1d3845.0478231283932!2d120.975551!3d15.481859600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339729735045812f%3A0x52bfdf8592b82aeb!2sJEDLIAN%20GAS%20STATION!5e0!3m2!1sen!2sph!4v1768885654652!5m2!1sen!2sph',
        },
        {
            locationName: 'BRGY.  SAN RICARDO, TALAVERA NUEVA ECIJA (SAN RICARDO 7/11 ALONG THE HIGHWAY)',
            longLat:
                '!1m14!1m8!1m3!1d245945.64592738688!2d120.973237!3d15.5969525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33972b45a831ab7d%3A0x88fecd50a7aed35d!2sJEDLIAN%20GASOLINE!5e0!3m2!1sen!2sph!4v1768885493535!5m2!1sen!2sph',
        },
    ],
};

const jedlianDrugstoreBranches = {
    title: 'Jedlian Drugstore',
    titleTwo: 'Branches',
    location: [
        {
            locationName: 'NEC, SAN ANTONIO POBLACION',
            longLat:
                '!1m18!1m12!1m3!1d3848.280342040044!2d120.8581086!3d15.306992600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396df000069435f%3A0xd4874a17543ee32a!2sGENERIKA%20DRUGSTORE%20SAN%20ANTONIO!5e0!3m2!1sen!2sph!4v1768881122165!5m2!1sen!2sph',
        },
        {
            locationName: 'NEC, CABANATUAN 1- MABINI',
            longLat:
                '!1m18!1m12!1m3!1d3844.961467268648!2d120.97339300000002!3d15.486504700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397291fc836f58d%3A0xb2931ec53b490f6b!2sGENERIKA%20DRUGSTORE!5e0!3m2!1sen!2sph!4v1768881175733!5m2!1sen!2sph',
        },
        {
            locationName: 'NEC, CABANATUAN 2- SUPERMARKET',
            longLat:
                '!1m18!1m12!1m3!1d3844.961467268648!2d120.97339300000002!3d15.486504700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397291fc836f58d%3A0xb2931ec53b490f6b!2sGENERIKA%20DRUGSTORE!5e0!3m2!1sen!2sph!4v1768881215739!5m2!1sen!2sph',
        },
        {
            locationName: 'NEC, BONGABON',
            longLat:
                '!1m18!1m12!1m3!1d3842.2580700203284!2d121.143894!3d15.631240100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390cc5c41c5ca1b%3A0xa394c087ccbf352c!2sGenerika%20Drugstore!5e0!3m2!1sen!2sph!4v1768881305436!5m2!1sen!2sph',
        },
        {
            locationName: 'NEC, LUPAO',
            longLat:
                '!1m18!1m12!1m3!1d61401.10258458572!2d120.8289578582031!3d15.879238800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390d8c000000001%3A0x3ea160239e668f5b!2sRBG%20Generika%20Drugstore!5e0!3m2!1sen!2sph!4v1768884903341!5m2!1sen!2sph',
        },
        {
            locationName: 'NUV, ARITAO POBLACION',
            longLat:
                '!1m18!1m12!1m3!1d245368.87743236969!2d120.96584299999998!3d16.071263900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390f89555555555%3A0x28b1020187c5f919!2sGenerika%20Drugstore!5e0!3m2!1sen!2sph!4v1768881460855!5m2!1sen!2sph',
        },
        {
            locationName: 'BULACAN, SAN RAFAEL KRYS',
            longLat:
                '!1m18!1m12!1m3!1d3853.3912749447454!2d120.93450119999999!3d15.0264591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339701843d6e16af%3A0x2fd2b817744baf3!2sGenerika%20Drug%20Store!5e0!3m2!1sen!2sph!4v1768881484922!5m2!1sen!2sph',
        },
        {
            locationName: 'BULACAN, VICTORY TOWN CENTER',
            longLat:
                '!1m18!1m12!1m3!1d123407.33906592715!2d120.98565295820313!3d14.85445110000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a8c9e8159cd5%3A0x2b19800bb5f4384a!2sVictory%20Town%20Center%20(VTC)!5e0!3m2!1sen!2sph!4v1768881515382!5m2!1sen!2sph',
        },
        {
            locationName: 'BULACAN, SAN ILDEFONSO',
            longLat:
                '!1m18!1m12!1m3!1d3852.4507672528557!2d120.94108179999998!3d15.07846520000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397044000000001%3A0xdd07a267e5e67809!2sGENERIKA%20DRUGSTORE%20-%20Poblacion%20San%20Ildefonso%20Bulacan!5e0!3m2!1sen!2sph!4v1768881551901!5m2!1sen!2sph',
        },
        {
            locationName: 'CM RECTO, PAMPANGA',
            longLat:
                '!1m18!1m12!1m3!1d246533.2548824469!2d120.50663486965877!3d15.09880278473987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f26a9c6d7c2b%3A0x92dd8af09167aff6!2sGenerika%20Drugstore!5e0!3m2!1sen!2sph!4v1768885052702!5m2!1sen!2sph',
        },
        {
            locationName: 'MAESTRANG KIKAY, TALAVERA',
            longLat:
                '!1m14!1m8!1m3!1d122965.11602319845!2d120.8866882!3d15.6098109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390d52555555555%3A0xf7d8103c55e07742!2sGENERIKA%20DRUGSTORE!5e0!3m2!1sen!2sph!4v1768885121874!5m2!1sen!2sph',
        },
    ],
};

export { homeStatsData, jedlianBusinessesData, jedlianCommunicationOffices, jedlianDrugstoreBranches, jedlianGasolineBranches };
