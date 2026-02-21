import { motion } from 'motion/react';
import { containerVariants, fadeVariants } from '../../lib/animations';

export default function DesktopView({ achievements }) {
    console.log(achievements)
    return (
        <div className="w-full py-12 md:py-20">
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className="relative">
                {/* Timeline line */}
                <motion.div
                    variants={fadeVariants}
                    initial="hidden"
                    animate="show"
                    className="absolute top-4 bottom-0 left-0 border-l-2 bg-yellow-600"
                />

                {achievements.map((achievement, index) => (
                    <motion.div
                        variants={fadeVariants}
                        initial="hidden"
                        whileInView="show"
                        className="relative pb-15 pl-8 last:pb-0"
                        key={index}
                    >
                        {/* Timeline dot */}
                        <div className="absolute top-3 left-px h-4 w-4 -translate-x-1/2 rounded-full bg-yellow-400" />

                        {/* Content */}
                        <div className="space-y-3">
                            <h1
                                className="text-3xl font-semibold 
                                md:text-5xl bg-[radial-gradient(circle_at_50%,#c89116,#c89116,#cfceaa)] 
                                bg-clip-text 
                                text-transparent"
                            >
                                {achievement.year}
                            </h1>

                            <div className="gap-6 grid lg:grid-cols-2 w-full max-w-7xl">
                                {achievement.achievements.map(({ id, title, achievement_descriptions }) => (
                                    <div key={id} className="flex flex-col items-center justify-center space-y-3 py-3 md:items-start">
                                        <h3 className="text-lg font-semibold tracking-[-0.01em] md:text-xl">{title}</h3>
                                        <ul className="text-muted-foreground list-disc space-y-3 text-center text-sm text-pretty sm:text-base md:text-left">
                                            {achievement_descriptions.map(({ id, description_text }) => (
                                                <li key={id}>{description_text}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                {
                                    achievement?.achievement_image && (
                                        <div className="aspect-video rounded-xl border border-yellow-400 overflow-hidden">
                                            <img
                                                src={`storage/${achievement?.achievement_image.image_filename}`}
                                                alt="nakamit mo"
                                                className="h-full w-full select-none"
                                            />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
