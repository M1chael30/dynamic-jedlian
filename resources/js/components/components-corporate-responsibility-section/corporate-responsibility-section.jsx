import CustomButton from "../ui/custom-button";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeUpVariants,
  fadeRightVariants,
} from "../../lib/animations";
import { ArrowRight } from "lucide-react";

export default function CorporateResponsibilitySection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex items-center overflow-hidden p-10 md:p-20 w-full max-w-7xl mx-auto"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-casa-jedliana.png"
          alt="Casa Jedliana Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-14 w-full">
        {/* Left section */}
        <div className="space-y-4 w-full md:w-1/2">
          <motion.h1
            variants={fadeUpVariants}
            className="text-subtitle font-semibold max-w-[26ch]"
          >
            Corporate Responsibility & Sustainability at Jedlian Holdings
          </motion.h1>

          <motion.div variants={fadeUpVariants}>
            <CustomButton
              buttonText="Visit Governance"
              buttonHref="/corporate-governance"
              icon={<ArrowRight size={18} />}
            />
          </motion.div>
        </div>

        {/* Right section */}
        <motion.div variants={fadeRightVariants} className="w-full md:w-1/2">
          <p className="text-sm">
            We maximize strong corporate governance to strengthen responsible
            decision-making, uphold ethical standards, and guide management
            actions—ensuring that long-term sustainability, stakeholder value, and
            social responsibility take precedence over short-term gains.
          </p>
        </motion.div>
      </div>
    </motion.div>

  );
}
