import { fadeRightVariants, sectionVariants } from "../../lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CustomButton from "../ui/custom-button";

export default function ContentSection({ item }) {
 return (
  <AnimatePresence mode="wait">
   <motion.section
    key={item.id}
    // variants={sectionVariants}
    initial="hidden"
    animate="show"
    exit="exit"
    className="flex flex-col gap-14 md:flex-row md:justify-between w-full max-w-7xl mx-auto"
   >
    {/* Image */}
    <motion.div
     // variants={fadeRightVariants}
     className="w-full md:w-1/2"
    >
     <img src={item.img} alt={item.alt} className="object-cover rounded-xl" />
    </motion.div>

    {/* Content */}
    <div className="w-full md:w-1/2 space-y-4 h-70">
     <motion.h1
      // variants={fadeRightVariants}
      className="text-title font-bold max-w-[15ch]"
     >
      {item.title}
     </motion.h1>

     <motion.p
      // variants={fadeRightVariants}
      className="text-description text-muted-foreground"
     >
      {item.description}
     </motion.p>

     <motion.div
     // variants={fadeRightVariants}
     >
      <CustomButton
       icon={<ArrowRight size={18} />}
       buttonHref={item.path}
       buttonText="Read more"
      />
     </motion.div>
    </div>
   </motion.section>
  </AnimatePresence>
 );
}
