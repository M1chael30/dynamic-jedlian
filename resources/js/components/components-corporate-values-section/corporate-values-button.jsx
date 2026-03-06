import { corporateValuesVariants } from "../../lib/animations";
import { motion } from "motion/react";
import { cn } from '../../lib/utils'

export default function CorporateValuesButton({
  children,
  onClick,
  customClassName,
}) {
  return (
    <motion.button
      variants={corporateValuesVariants}
      className={
        cn(
          'rounded-full w-30 h-30 flex justify-center items-center hover:bg-yellow-400 duration-500 lg:w-37 lg:h-37',
          customClassName
        )
      }
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
