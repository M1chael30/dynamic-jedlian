import { itemVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function ButtonCards({ img, alt, onClick, className }) {
 return (
  <motion.div
   // variants={'itemVariants'}
   onClick={onClick}
  >
   <div
    className={cn(
     "rounded-lg overflow-hidden border-2 cursor-pointer transition-transform duration-300 ease-out hover:scale-105",
     className
    )}
   >
    <img src={img} alt={alt} className="aspect-video object-cover" />
   </div>
  </motion.div>
 );
}
