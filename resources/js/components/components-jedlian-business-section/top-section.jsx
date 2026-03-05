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
          className="h-100 w-full max-w-full object-cover select-none"
        />

        {/* circle image on the top right */}
        <img
          src={`/storage/${circle}`}
          alt="No image provided"
          className="absolute top-0 right-0 w-22 object-contain select-none md:w-50"
        />
      </motion.div>
    </motion.div>
  );
}
