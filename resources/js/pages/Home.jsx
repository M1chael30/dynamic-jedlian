"use client";

// import Image from "next/image";
// import HomePageImage from "/";
import JedlianBusinessesSection from "";
import HomeStatsSection from "@/components/components-home-stats-section/home-stats-section";
import CorporateResponsibilitySection from "@/components/components-corporate-responsibility-section/corporate-responsibility-section";

import { motion } from "motion/react";

export default function Home() {
 return (
  <section>
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 3 } }}
    className="w-full mx-auto max-w-7xl"
   >
    {/* front page image */}
    {/* <Image
     src={HomePageImage}
     alt="Jedlian landing page image"
     className="w-full h-auto max-w-full object-contain"
    /> */}
   </motion.div>
   {/* contents */}
   <HomeStatsSection />
   <JedlianBusinessesSection />
   <CorporateResponsibilitySection />
  </section>
 );
}
