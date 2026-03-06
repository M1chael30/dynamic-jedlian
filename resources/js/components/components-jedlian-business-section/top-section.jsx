import { containerVariants, fadeVariants } from '@/lib/animations';
import { motion } from 'framer-motion';

export default function TopSection({ images }) {

  const banner = images.find((img) => img.image_type === 'banner')?.image_path;
  const circle = images.find((img) => img.image_type === 'circle_banner')?.image_path;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative"
    >
      <motion.div variants={fadeVariants}>
        {/* image banner at the top */}
        <img
          src={`/storage/${banner}`}
          alt="No image provided"
          className="w-full h-auto max-w-full object-contain select-none"
        />

        {/* circle image on the top right */}
        <div className="absolute top-0 right-0 w-24 md:w-44">
          <div className="relative">
            <img
              src="/images/business-page-img/circleBG.png"
              alt="No image provided"
              className="w-full select-none object-contain"
            />
            <img
              src={`/storage/${circle}`}
              alt="No image provided"
              className="absolute top-0 right-0 w-18 md:w-32 object-contain select-none"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
