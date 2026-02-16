import { motion } from "framer-motion";
import { containerVariants } from "../../lib/animations";
import ButtonCards from "./button-cards";
import ContentSection from "./content-section";
import { useState } from "react";

import { jedlianBusinessesData } from "../../lib/homePageData";

export default function JedlianBusinessesSection() {
 const [activeIndex, setActiveIndex] = useState(0);
 const activeItem = jedlianBusinessesData[activeIndex];

 return (
  <div className="p-5 space-y-8 my-20">
   {/* content */}

   <div>
    <ContentSection item={activeItem} />
   </div>

   {/* buttons with logo clickable */}
   <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full mx-auto max-w-7xl"
   >
    {jedlianBusinessesData.map((button, index) => (
     <ButtonCards
      className={index === activeIndex && "border-2 border-[#EFBF04]"}
      onClick={() => setActiveIndex(index)}
      key={index}
      img={button.img}
      alt={button.alt}
     />
    ))}
   </motion.div>
  </div>
 );
}
