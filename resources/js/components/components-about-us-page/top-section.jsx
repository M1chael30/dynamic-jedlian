import { motion } from "motion/react";

export default function TopSection() {
 return (
  <motion.div className="relative"
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
  >
   <img
    src={"images/bannerAboutUs.png"}
    alt="Banner Casa Jedliana"
    className="w-full h-auto max-w-full object-contain select-none"
   />
  </motion.div>
 );
}
