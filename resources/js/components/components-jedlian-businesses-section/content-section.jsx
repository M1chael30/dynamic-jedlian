import { fadeRightVariants, sectionVariants } from "../../lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CustomButton from "../ui/custom-button";

export default function ContentSection({ item }) {

    const images = item.business_images
    const logo = images.find((img) => img.image_type === 'logo')?.image_path;

    return (
        <AnimatePresence mode="wait">
            <motion.section
                key={item.id}
                variants={sectionVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col gap-14 md:flex-row md:justify-between w-full max-w-7xl mx-auto"
            >
                {/* Image */}
                <motion.div
                    variants={fadeRightVariants}
                    className="w-full md:w-1/2"
                >
                    <img src={`/storage/${logo}`} alt="No image provided." className="object-cover rounded-xl min-h-100 max-h-100 w-full" />
                </motion.div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-4 h-70">
                    <motion.h1
                        variants={fadeRightVariants}
                        className="text-title font-bold max-w-[15ch]"
                    >
                        {item.name}
                    </motion.h1>

                    <motion.p
                        variants={fadeRightVariants}
                        className="text-description text-muted-foreground"
                    >
                        {item.description}
                    </motion.p>

                    <motion.div
                        variants={fadeRightVariants}
                    >
                        <CustomButton
                            icon={<ArrowRight size={18} />}
                            buttonHref={route('business', item?.id)}
                            buttonText="Read more"
                        />
                    </motion.div>
                </div>
            </motion.section>
        </AnimatePresence>
    );
}
