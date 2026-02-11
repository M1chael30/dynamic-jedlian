import { motion } from "framer-motion";
import { containerVariants, fadeVariants } from "@/lib/animations";

export default function TopSection({
 imgBanner = "images/business-page-img/bannerCasa.png",
 imgCircle = "images/business-page-img/circleCasaJedliana.png",
}) {
 return (
  <motion.div
   variants={containerVariants}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true, amount: 0.3 }}
   className="relative"
  >
   <motion.div variants={fadeVariants}>
    {/* image banner at the top */}
    <img
     src={imgBanner}
     alt="Banner Casa Jedliana"
     className="w-full h-auto max-w-full object-contain select-none"
    />

    {/* circle image on the top right */}
    <img
     src={imgCircle}
     alt="Circle Casa Jedliana"
     className="absolute top-0 right-0 w-22 md:w-50 object-contain select-none"
    />
   </motion.div>
  </motion.div>
 );
}
