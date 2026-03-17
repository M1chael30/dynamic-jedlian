import { motion } from 'motion/react';
import { containerVariants, fadeRightSlowVariants, fadeVariants } from '../../lib/animations';

export default function GeoFootPrintSection({ data }) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="grid py-5 md:grid-cols-2">
        <motion.div
          variants={fadeVariants}
          initial="hidden"
          whileInView="show"
          className="flex items-center justify-center"
        >
          <img
            draggable="false"
            src={
              data[2].image_path ?
                `/storage/${data[2].image_path}` :
                '/images/empty.png'
            }
            alt="pilipinas"
            className="h-auto w-full max-w-full object-contain select-none md:w-auto"
          />
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="mx-5 flex flex-col items-center justify-center"
        >
          <motion.h1
            variants={fadeRightSlowVariants}
            initial="hidden"
            whileInView="show"
            className="text-title bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] bg-clip-text text-center font-extrabold text-transparent md:text-left"
          >
            Our Geographic Footprint
          </motion.h1>
          <motion.div
            variants={fadeRightSlowVariants}
            initial="hidden"
            whileInView="show"
            className="my-3 h-1 w-full bg-[#c89116]"
          />
          <motion.p
            variants={fadeRightSlowVariants}
            initial="hidden"
            whileInView="show"
            className="text-description p-5 text-center md:text-left"
          >
            {data[2].content}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
