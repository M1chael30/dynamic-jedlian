import { itemVariants, sectionVariants } from "@/lib/animations";
import Questions from "./questions";
import { motion } from "framer-motion";

export default function FaqSection() {
  return (
    <motion.section className="w-full my-5 md:my-20">
      <div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className=""
        >
          <motion.h1 className="font-extrabold bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] text-transparent bg-clip-text text-title">
            FAQ
          </motion.h1>
          <motion.p className="text-white text-description">
            Do you have any questions for us?
          </motion.p>
        </motion.div>
        <motion.div className="h-1 my-6 w-full bg-[#c89116]" />
      </div>
      <Questions />
    </motion.section>
  );
}
