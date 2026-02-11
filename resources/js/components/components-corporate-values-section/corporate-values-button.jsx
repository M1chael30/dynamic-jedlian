import { corporateValuesVariants, itemVariants } from "../../lib/animations";
import { motion } from "motion/react";

export default function CorporateValuesButton({
  children,
  onClick,
  customClassName,
}) {
  return (
    <motion.button
      variants={corporateValuesVariants}
      // animate={{ scale: 1 }}
      // whileHover={{ scale: 1.05 }}
      className={` rounded-full
                    w-30 h-30
                    flex justify-center items-center
                    hover:bg-yellow-400 duration-500
                    ${customClassName} lg:w-37 lg:h-37
                    `}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
