import { missionVisionData } from "../../lib/corporateGovernanceData";
import MissionVisionWidget from "./mission-vision-widget";
import { motion } from "motion/react";
import { containerVariants } from "../../lib/animations";

export default function MissionVision() {
 return (
  <motion.section
   className="
        grid grid-cols-1 md:grid-cols-2
     md:gap-5 gap-10 px-10 justify-center items-center
     text-center"
   variants={containerVariants}
   initial="hidden"
   animate="show"
  >
   {missionVisionData.map((item, index) => (
    <MissionVisionWidget
     key={index}
     title={item.title}
     description={item.description}
     icon={item.icon}
    />
   ))}
  </motion.section>
 );
}
