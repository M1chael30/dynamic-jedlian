import { motion } from 'framer-motion';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { SlSocialFacebook } from 'react-icons/sl';
import { contactsData } from '../../lib/contactUsData';

export default function ContactUsDetails({ contactUsData }) {
  const companyPhoneNumber = contactUsData[0];
  const companyEmail = contactUsData[1];
  const businessHours = contactUsData[2];
  const facebook = contactUsData[3];

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      className="mb-3 w-full space-y-5 md:mb-0 md:w-1/2"
    >
      <motion.p className="text-description">{contactsData.description}</motion.p>

      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2">
          <motion.div className="text-description flex items-center rounded-full bg-[#cfceaa] p-2 text-black">
            <BsTelephone />
          </motion.div>
          <motion.p className="text-description">{companyPhoneNumber?.content}</motion.p>
        </div>

        <div className="flex items-center gap-2">
          <motion.div className="text-description flex items-center rounded-full bg-[#cfceaa] p-2 text-black">
            <MdOutlineEmail />
          </motion.div>
          <motion.p className="text-sm">{companyEmail?.content}</motion.p>
        </div>

        <div className="flex items-center gap-2">
          <motion.div className="text-description flex items-center rounded-full bg-[#cfceaa] p-2 text-black">
            <SlSocialFacebook />
          </motion.div>
          <motion.a href={facebook?.content} target="_blank" className="text-description">
            Facebook
          </motion.a>
        </div>
      </div>

      <div className="space-y-2">
        <motion.h1 className="text-subtitle bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] bg-clip-text font-extrabold text-transparent">
          Business Hours
        </motion.h1>

        <div>
          <motion.p className="text-description">{businessHours?.title}</motion.p>
          <motion.p className="text-description">{businessHours?.content}</motion.p>
        </div>
      </div>
    </motion.div>
  );
}
