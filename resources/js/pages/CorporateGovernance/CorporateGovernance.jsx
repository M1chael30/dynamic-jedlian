
import CorporateValues from "@/components/components-corporate-values-section/corporate-values";
import MissionVision from "@/components/components-mission-vision-section/mission-vision";
import CorporateValuesMobile from "@/components/components-corporate-values-section/corporate-values-mobile";

import { motion } from "motion/react";
import { Head } from "@inertiajs/react";

export default function CorporateGovernance() {
 return (
  <>
   <Head title="Corporate Governance"/>
   <section className="flex flex-col justify-center items-center mx-auto max-w-7xl w-full">
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
     className="w-full"
    >
     <img
      src={'images/banners/bannerCorporateGovernance.png'}
      alt="Jedlian landing page image"
      draggable="false"
      className="w-full h-auto max-w-full object-contain select-none"
     />
    </motion.div>
    <MissionVision />
    <div className="h-120 md:min-h-180 flex flex-col justify-center items-center my-10">
     <div className={`flex flex-col items-center md:justify-center`}>
      <motion.h1
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
       className="text-title font-extrabold text-center"
      >
       CORPORATE VALUES
      </motion.h1>
      <CorporateValues />
      <CorporateValuesMobile />
     </div>
    </div>
   </section>
  </>
 );
}
