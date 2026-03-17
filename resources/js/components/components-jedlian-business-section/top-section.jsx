import { containerVariants, fadeVariants } from '@/lib/animations';
import { motion } from 'framer-motion';
import empty from '../../../../public/images/empty.png';

export default function TopSection({ images }) {
  const banner = images.find((img) => img.image_type === 'banner')?.image_path;
  const circle = images.find((img) => img.image_type === 'circle_banner')?.image_path;

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="relative">
      <motion.div variants={fadeVariants}>
        {/* image banner at the top */}
        {banner ? (
          <img src={`/storage/${banner}`} alt="No image provided" className="h-auto w-full max-w-full object-contain select-none" />
        ) : (
          <div className="flex h-auto w-full max-w-full items-center justify-center object-contain select-none">
            <img src={empty} alt="No image provided" />
          </div>
        )}

        {/* circle image on the top right */}
        <div className="absolute top-0 right-0 w-24 md:w-44">
            {circle ? (
          <div className="relative">
            <img src="/images/business-page-img/circleBG.png" alt="No image provided" className="w-full object-contain select-none" />
              <img src={`/storage/${circle}`} alt="No image provided" className="absolute top-0 right-0 w-18 object-contain select-none md:w-32" />
          </div>
            ) : (
              <div className="absolute top-0 right-0 w-18 object-contain select-none md:w-32">
                <img src={empty} alt="No image provided" className='w-10 h-10' />
              </div>
            )}
        </div>
      </motion.div>
    </motion.div>
  );
}
