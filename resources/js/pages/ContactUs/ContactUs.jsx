import ContactUsSection from "@/components/components-contact-us/contact-us-section";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function ContactUs() {
        return (
                <>
                        <Head title="Contact Us" />
                        <section className="relative flex flex-col justify-center items-center p-7 max-w-7xl w-full mx-auto">
                                <img
                                        src={"images/business-page-img/bg-business-page.png"}
                                        className="absolute inset-0 w-full h-full object-cover -z-10"
                                        alt="Background"
                                />
                                <div className="relative z-10 w-full">
                                        <motion.h1
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                                                className="text-title bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
                                                text-transparent bg-clip-text font-extrabold"
                                        >
                                                Contact Us
                                        </motion.h1>
                                        <motion.div className="h-1 my-6 w-full bg-[#c89116]" />
                                        <ContactUsSection />
                                </div>
                        </section>
                </>
        );
}
