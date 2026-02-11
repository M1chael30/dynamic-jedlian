import Link from "next/link";
import CustomButton from "../ui/custom-button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
 fadeVariants,
 sectionVariants,
 fadeRightVariants,
} from "@/lib/animations";

export default function ContentSection({ item }) {
 return (
  <motion.div
   variants={sectionVariants}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true, amount: 0.3 }}
   className="p-4 md:p-18 lg:px-48 lg:py-5 space-y-12 flex flex-col"
  >
   {/* top section */}
   <div>
    {/* title */}
    <motion.h1
     variants={fadeRightVariants}
     initial="hidden"
     animate="show"
     className="py-10 font-bold bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] bg-clip-text text-transparent text-title"
    >
     {item?.title}
    </motion.h1>
    {/* description */}
    <motion.p
     variants={fadeVariants}
     initial="hidden"
     whileInView="show"
     className="text-description text-justify mb-5"
    >
     {item?.descriptionTwo}
    </motion.p>
    {/* button  */}
    {item?.title === "Casa Jedliana" && (
     <motion.div variants={fadeVariants} whileInView="show" initial="hidden">
      <CustomButton
       icon={<ArrowRight size={18} />}
       buttonText="Learn more about casa"
       buttonHref="https://casajedliana.com/"
      />
     </motion.div>
    )}
   </div>
   {/* mid section */}
   <div className="space-y-2">
    {/* title */}
    <motion.h1
     variants={fadeVariants}
     initial="hidden"
     whileInView="show"
     className="font-bold text-subtitle"
    >
     {item?.titleTwo}
    </motion.h1>
    {/* description */}
    <motion.p
     variants={fadeVariants}
     initial="hidden"
     whileInView="show"
     className="text-description text-justify"
    >
     {item?.descriptionThree}
    </motion.p>
   </div>
   {/* bottom section */}
   <div className="space-y-2">
    {/* title */}
    <motion.h1
     variants={fadeVariants}
     initial="hidden"
     whileInView="show"
     className="font-bold text-subtitle"
    >
     {item?.titleThree}
    </motion.h1>
    {/* description */}
    <motion.p
     variants={fadeVariants}
     initial="hidden"
     whileInView="show"
     className="text-description text-justify"
    >
     {item?.descriptionFour}
    </motion.p>
   </div>
   {/* social icon */}
   <motion.div
    variants={fadeVariants}
    initial="hidden"
    whileInView="show"
    className="flex space-x-4"
   >
    {item?.socials &&
     item.socials.map((item, index) => (
      <Link href={item.socialLink} key={index}>
       <item.icon size={32} />
      </Link>
     ))}
   </motion.div>
  </motion.div>
 );
}
