import bannerAboutUs from "images/bannerAboutUs.png";
import { motion } from "motion/react";

export default function TopSection() {
 return (
  <motion.div className="relative"
  initial={{opacity:0}}
  animate={{opacity:1}}
  >
   <img
    src={bannerAboutUs}
    alt="Banner Casa Jedliana"
    className="w-full h-auto max-w-full object-contain select-none"
   />
  </motion.div>
 );
}
