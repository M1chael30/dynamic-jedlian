import JedlianBusinessesSection from "@/components/components-jedlian-businesses-section/jedlian-businesses-section";
import HomeStatsSection from "@/components/components-home-stats-section/home-stats-section";
import CorporateResponsibilitySection from "@/components/components-corporate-responsibility-section/corporate-responsibility-section";

import { motion } from "motion/react";
import { Head } from "@inertiajs/react";

export default function Home() {
 return (
  <>
   <Head title="Home" />
   <section>
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1, transition: { duration: 3 } }}
     className="w-full mx-auto max-w-7xl"
    >
     {/* front page image */}
     <img
      src={'images/home-page-image.png'}
      alt="Jedlian landing page image"
      className="w-full h-auto max-w-full object-contain"
     />
    </motion.div>
    {/* contents */}
    <HomeStatsSection />
    <JedlianBusinessesSection />
    <CorporateResponsibilitySection />
   </section>
  </>
 );
}
