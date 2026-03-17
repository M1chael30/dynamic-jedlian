import { motion } from 'motion/react';
import { containerVariants, fadeRightVariants, fadeUpVariants } from '../../lib/animations';

export default function QuoteSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative mx-auto flex w-full max-w-7xl items-center overflow-hidden p-10 md:p-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="/images/bg-casa-jedliana.png" alt="Casa Jedliana Background" className="h-full w-full object-cover" />
      </div>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col gap-14 md:flex-row">
        {/* Left section */}
        <div className="w-full space-y-4 md:w-1/2">
          <motion.h1 variants={fadeUpVariants} className="text-subtitle max-w-[26ch] font-semibold uppercase">
            “The power of dreams can be reached when ONE has the courage to pursue them.”
          </motion.h1>
        </div>

        {/* Right section */}
        <motion.div variants={fadeRightVariants} className="w-full md:w-full space-y-5">
          <p className="text-description text-zinc-200">
Dreams have the potential to change our lives. When we believe in ourselves and bravely take steps toward our goals, even the biggest dreams can become possible. With courage, determination, and perseverance, what once seemed impossible can turn into reality.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
