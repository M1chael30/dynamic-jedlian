import aspireAwardee from "/public/images/achievements/achievement2014.png";
import quarter1and2Awards from "/public/images/achievements/achievement2016.png";
import NCLaward from "/public/images/achievements/achievement2017.png";
import hakotAward2019 from "/public/images/achievements/achievement2019.png";
import hakotAward2021 from "/public/images/achievements/achievement2021.png";
import AwardedOSP from "/public/images/achievements/achievement2023.png";
import lakasGinhawaAngatLahat from "/public/images/achievements/achievement2024.png";

export const achievementsData = [
 {
  id: 0,
  period: "2024",
  title: "Trailblazer of the year",
  description: ["Lakas Ginhawa Angat Lahat Award."],
  image: lakasGinhawaAngatLahat,
 },
 {
  id: 0,
  period: "2023",
  title: "Awarded OSP",
  description: [
   "2023 - Awarded OSP Corrective and Preventive Maintenance within the whole regions of North and Central Luzon.",
  ],
  image: AwardedOSP,
 },
 {
  id: 1,
  period: "2021",
  title: "Hakot Award 2021",
  description: [
   "2021 - Passed monthly scorecard for full year 2 areas: Area 1 and 4.",
   "2021 - Highest percentage (%) in terms of monthly scorecard passed at 97% (35 of 36 months passed for 3 areas) – Number 1 in Nationwide tally.",
   "2021 - Top 1 in Install Flow through (Controllable) in NCL reached as high at 96.78%, and Top 2 Nationally.",
  ],
  image: hakotAward2021,
 },
 {
  id: 2,
  period: "2019",
  title: "Hakot Award 2019",
  description: [
   "2019 - Took 3 Narra Areas in North and Central Luzon in 2019 to help improve regional performance.",
   "2019 - Ranked number 1 in Repair NPS (Net Promoter Score Category.",
   "2019 - Ranked number 2 in Partner of the Year (Annual CFS Partner Awards.",
   " 2019 Actively participated in Narra Council in Quarter 3 by sharing operational strategies and plans.",
  ],
  image: hakotAward2019,
 },
 {
  id: 3,
  period: "2016",
  title: "NCL Award",
  description: [
   "2016 Outstanding SLI/R Contractor and consistent performer in all categories in NCL.",
  ],
  image: quarter1and2Awards,
 },
 {
  id: 4,
  period: "2015",
  title: "Quarter 1 and 2 Awards",
  description: [
   "Quarter 2-2015 Excellence in Installation Completion in Luzon.",
   "Quarter 1-2015 Excellence in Quality Assurance.",
  ],
  image: NCLaward,
 },
 {
  id: 5,
  period: "2014",
  title: "Aspire Awardee",
  description: ["2014 Aspire Awardee Top BBSP Nationwide"],
  image: aspireAwardee,
 },
];
