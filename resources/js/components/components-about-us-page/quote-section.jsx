import { motion } from "motion/react";
import { quotesData } from "../../lib/aboutUsData";
import { containerVariants, fadeVariants } from "../../lib/animations";

export default function QuoteSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-10">
      <div className="md:m-20 border-2 border-white p-10">
        <motion.h1 
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{duration:2}}}
        className="text-[clamp(1rem,5vw,2.5rem)] text-center font-extrabold uppercase md:mb-10 font-serif">
          "The power of dreams can be reached when <span className="text-title">one</span>  has the courage to pursue them."
        </motion.h1>
        <div className="hidden md:flex h-100"/>
        </div>
      <div className="md:absolute bottom-50 bg-zinc-200 py-5 w-full max-w-7xl">
        <motion.div 
        variants={containerVariants}
        className="p-10 flex flex-col text-subtitle justify-center items-center text-center text-black space-y-5">
          <motion.p
          variants={fadeVariants}
          initial="hidden"
          whileInView="show"
          className="text-description">{quotesData.text1}</motion.p>
          <motion.p
          variants={fadeVariants}
          initial="hidden"
          whileInView="show"
          className="text-description">{quotesData.text2}</motion.p>
          <motion.p
          variants={fadeVariants}
          initial="hidden"
          whileInView="show"
          className="text-description">{quotesData.text3}</motion.p>
        </motion.div>
      </div>
    </section>
  );
}
