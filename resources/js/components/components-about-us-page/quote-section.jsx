import { motion } from 'motion/react';
import { containerVariants, fadeRightVariants, fadeUpVariants } from '../../lib/animations';

export default function QuoteSection() {
  return (
    // <section className="relative flex flex-col items-center justify-center gap-10">
    //   <div className="md:m-20 border-2 border-white p-10">
    //     <motion.h1
    //     initial={{opacity:0}}
    //     whileInView={{opacity:1, transition:{duration:2}}}
    //     className="text-[clamp(1rem,5vw,2.5rem)] text-center font-extrabold uppercase md:mb-10 font-serif">
    //       "The power of dreams can be reached when <span className="text-title">one</span>  has the courage to pursue them."
    //     </motion.h1>
    //     <div className="hidden md:flex h-100"/>
    //     </div>
    //   <div className="md:absolute bottom-50 bg-zinc-200 py-5 w-full max-w-7xl">
    //     <motion.div
    //     variants={containerVariants}
    //     className="p-10 flex flex-col text-subtitle justify-center items-center text-center text-black space-y-5">
    //       <motion.p
    //       variants={fadeVariants}
    //       initial="hidden"
    //       whileInView="show"
    //       className="text-description">{quotesData.text1}</motion.p>
    //       <motion.p
    //       variants={fadeVariants}
    //       initial="hidden"
    //       whileInView="show"
    //       className="text-description">{quotesData.text2}</motion.p>
    //       <motion.p
    //       variants={fadeVariants}
    //       initial="hidden"
    //       whileInView="show"
    //       className="text-description">{quotesData.text3}</motion.p>
    //     </motion.div>
    //   </div>
    // </section>
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
          <p className="text-sm">
            Through your leadership, this company has not only thrived but also become a beacon of hope for those who dare to dream big.
          </p>
          <p className="text-sm">
            Because you did not falter nor weaken in faith, many people have been blessed. Because you bravely faced all challenges, here we are on
            our way to greatness.
          </p>
          <p className="text-sm">
            Thank you for being the pillar of strength and source of inspiration to many. A man, that inspires us through his life by his living
            testimony of God's favor and abundant blessing.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
