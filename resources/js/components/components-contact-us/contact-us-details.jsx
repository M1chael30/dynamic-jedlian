import { contactsData } from "../../lib/contactUsData";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { itemVariants, sectionVariants } from "../../lib/animations";

export default function ContactUsDetails() {
  return (
    <motion.div
        initial={{opacity: 0, x:-10}}
    animate={{opacity:1,x:0, transition: {duration:1}}}

    className="space-y-5 mb-3 md:mb-0 w-full md:w-1/2">
      <motion.p className="text-description">
        {contactsData.description}
      </motion.p>
      <div className="text-sm flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <motion.div className="flex items-center rounded-full p-2 bg-[#cfceaa] text-black text-description">
            <BsTelephone />
          </motion.div>
          <motion.p className="text-description">{contactsData.tel}</motion.p>
        </div>

        <div className="flex gap-2 items-center">
          <motion.div className="flex items-center rounded-full p-2 bg-[#cfceaa] text-black text-description">
            <MdOutlineEmail />
          </motion.div>
          <motion.p className="text-sm">{contactsData.email}</motion.p>
        </div>
      </div>
      <div className="space-y-2">
        <motion.h1 className="font-extrabold bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] text-transparent bg-clip-text text-subtitle">
          Business Hours
        </motion.h1>
        <div>
          <motion.p className="text-description">{contactsData.day}</motion.p>
          <motion.p className="text-description">{contactsData.hours}</motion.p>
        </div>
      </div>
    </motion.div>
  );
}
