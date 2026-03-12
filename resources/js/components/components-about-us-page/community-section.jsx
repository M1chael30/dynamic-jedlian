import { motion } from 'motion/react';
import { containerVariants, fadeRightSlowVariants, fadeVariants } from '../../lib/animations';

export default function GeoFootPrintSection({ data }) {
  return (
    <section className="flex min-h-150 flex-col items-center justify-center py-10">
      <div className="grid py-5 md:grid-cols-2 gap-10 md:gap-0">
        <motion.div variants={containerVariants} className="order-2 mx-5 flex flex-col items-center justify-center md:order-1">
          <motion.h1
            variants={fadeRightSlowVariants}
            initial="hidden"
            whileInView="show"
            className="bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-right"
          >
            {data[3].title}
          </motion.h1>
          <motion.div variants={fadeRightSlowVariants} initial="hidden" whileInView="show" className="my-3 h-1 w-full bg-[#c89116]" />
          <motion.p variants={fadeRightSlowVariants} initial="hidden" whileInView="show" className="text-description p-5 text-center md:text-right">
            {data[3].content}
          </motion.p>
        </motion.div>

        <motion.div variants={fadeVariants} initial="hidden" whileInView="show" className="order-1 flex items-center justify-center md:order-2">
          <img
            draggable="false"
            src={
              data[3].image_path ?
                `/storage/${data[3].image_path}` :
                '/images/aboutus-page-img/communityGrid.png'
            }
            alt="pilipinas"
            className="h-auto w-full max-w-full object-contain select-none md:w-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
