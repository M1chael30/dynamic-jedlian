import { motion } from "motion/react";
import image from "images/geo-footprint.png";
import {
 containerVariants,
 fadeRightSlowVariants,
 fadeVariants,
} from "../../lib/animations";

export default function GeoFootPrintSection() {
 return (
  <section className="flex flex-col items-center justify-center">
   <div className="grid py-5 md:grid-cols-2">
    <motion.div
     variants={fadeVariants}
     initial="hidden"
     whileInView="show"
     className="flex items-center justify-center"
    >
     <Image
      draggable="false"
      src={image}
      alt="pilipinas"
      className="
      w-full h-auto md:w-auto max-w-full object-contain select-none
      "
     />
    </motion.div>
    <motion.div
     variants={containerVariants}
     className="flex flex-col justify-center items-center mx-5"
    >
     <motion.h1
      variants={fadeRightSlowVariants}
      initial="hidden"
      whileInView="show"
      className="text-title font-extrabold text-center md:text-left
             bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text
            "
     >
      Our Geographic Footprint
     </motion.h1>
     <motion.div
      variants={fadeRightSlowVariants}
      initial="hidden"
      whileInView="show"
      className="h-1 w-full bg-[#c89116] my-3"
     />
     <motion.p
      variants={fadeRightSlowVariants}
      initial="hidden"
      whileInView="show"
      className="text-description text-center md:text-left p-5 "
     >
      Our company has successfully achieved major advancements in the ongoing
      development of our projects. As a result, we are proud to have established
      a prominent foothold in various regions in Luzon. This momentum showcases
      our widespread reach and strong presence, proving our capacity to deliver
      impressive results.
     </motion.p>
    </motion.div>
   </div>
  </section>
 );
}
