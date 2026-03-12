import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants, fadeVariants } from "../../lib/animations";

export default function ContactUsAddress({ contactUsData }) {
        const companyLocation = contactUsData[4]
        return (
                <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="space-y-4 md:w-1/2 w-full"
                >
                        <motion.div variants={fadeVariants} className="h-60 md:h-full">
                                <iframe
                                        src={`https://www.google.com/maps/embed?pb=${companyLocation?.content}`}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-2xl w-full h-full"
                                        x="true"
                                ></iframe>
                        </motion.div>
                        <motion.div
                                variants={fadeVariants}
                                className="bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] text-transparent bg-clip-text flex items-center gap-2 justify-center "
                        >
                                <FaMapMarkerAlt className="text-[#c89116] text-xl hidden md:flex" />
                                <p className="text-description text-center md:text-left">
                                        {companyLocation?.title}
                                </p>
                        </motion.div>
                </motion.div>
        );
}
