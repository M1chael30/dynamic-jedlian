import { fadeRightVariants, fadeVariants, sectionVariants } from '@/lib/animations';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CustomButton from '../ui/custom-button';

export default function ContentSection({ business }) {
  const sections = business.business_sections;
  const socials = business.business_socials;
  const branches = business.business_branches;
  const images = business.business_images;

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col space-y-12 p-4 md:p-18 lg:px-48 lg:py-5"
    >
      {/* top section */}
      <motion.h1
        variants={fadeRightVariants}
        initial="hidden"
        animate="show"
        className="text-title bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] bg-clip-text py-10 font-bold text-transparent"
      >
        {business?.name}
      </motion.h1>
      {sections.map((item, index) => (
        <div className="space-y-2" key={index}>
          <motion.h1 variants={fadeVariants} initial="hidden" whileInView="show" className="text-subtitle font-bold">
            {item?.title}
          </motion.h1>
          <motion.p variants={fadeVariants} initial="hidden" whileInView="show" className="text-description text-justify">
            {item?.content}
          </motion.p>
        </div>
      ))}
      <div>
        {/* button  */}
        {business?.name === 'Casa Jedliana' && (
          <motion.div variants={fadeVariants} whileInView="show" initial="hidden">
            <CustomButton icon={<ArrowRight size={18} />} buttonText="Learn more about casa" buttonHref="https://casajedliana.com/" />
          </motion.div>
        )}
      </div>
      
      {/* social icon */}
      {/* <motion.div variants={fadeVariants} initial="hidden" whileInView="show" className="flex space-x-4">
        {item?.socials &&
          item.socials.map((item, index) => (
            <Link href={item.socialLink} key={index}>
              <item.icon size={32} />
            </Link>
          ))} */}
      {/* </motion.div> */}
    </motion.div>
  );
}
