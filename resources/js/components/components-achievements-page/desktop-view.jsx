import { motion } from 'motion/react';
import { achievementsData } from '../../lib/achievementsData';
import { containerVariants, fadeVariants } from '../../lib/animations';

export default function DesktopView() {
    return (
        <div className="w-full py-12 md:py-20">
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className="relative ml-3">
                {/* Timeline line */}
                <motion.div
                    variants={fadeVariants}
                    initial="hidden"
                    animate="show"
                    className="absolute top-4 bottom-0 left-0 border-l-2 bg-yellow-600"
                />

                {achievementsData.reverse().map(({ description, period, title, image }, index) => (
                    <motion.div
                        variants={fadeVariants}
                        initial="hidden"
                        whileInView="show"
                        className="relative grid gap-5 pb-15 pl-8 last:pb-0 md:grid-cols-2"
                        key={index}
                    >
                        {/* Timeline dot */}
                        <div className="absolute top-3 left-px h-4 w-4 -translate-x-1/2 rounded-full bg-yellow-400" />

                        {/* Content */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-center gap-2.5 bg-[radial-gradient(circle_at_50%,#c89116,#c89116,#cfceaa)] bg-clip-text text-transparent md:justify-normal">
                                <span className="text-3xl font-semibold md:text-5xl">{period}</span>
                            </div>
                            <div className="flex justify-center md:block md:justify-normal">
                                <img
                                    src={image}
                                    alt="nakamit mo"
                                    className="block h-45 w-65 rounded-xl border border-yellow-400 select-none md:hidden"
                                    draggable="false"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center py-3 md:items-start">
                                <h3 className="text-lg font-semibold tracking-[-0.01em] md:text-xl">{title}</h3>
                                <p className="text-muted-foreground text-center text-sm text-pretty sm:text-base md:text-left">{description}</p>
                            </div>
                        </div>
                        <div className="hidden items-center justify-center md:flex">
                            <img
                                src={image}
                                alt="nakamit mo"
                                className="h-60 w-90 rounded-xl border border-yellow-400 select-none"
                                draggable="false"
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
