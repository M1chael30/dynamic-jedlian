import { motion } from 'motion/react';
import { containerVariants, fadeVariants } from '../../lib/animations';
import { Fragment } from 'react';

export default function DesktopView({ periods }) {
  return (
    <div className="w-full py-12 md:py-20">
      <motion.div variants={containerVariants} initial="hidden" whileInView="show" className="relative">
        <motion.div variants={fadeVariants} initial="hidden" animate="show" className="absolute top-4 bottom-0 left-0 border-l-2 bg-yellow-600" />

        {periods.map((period, index) => (
          <motion.div variants={fadeVariants} initial="hidden" whileInView="show" className="relative pb-15 pl-8 last:pb-0" key={index}>
            <div className="absolute top-3 left-px h-4 w-4 -translate-x-1/2 rounded-full bg-yellow-400" />

            <div className="space-y-3">
              <h1 className="bg-[radial-gradient(circle_at_50%,#c89116,#c89116,#cfceaa)] bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
                {period.year}
              </h1>

              <div className="grid w-full max-w-7xl gap-6 lg:grid-cols-2">
                {period.achievements.map(({ id, title, achievement_descriptions, achievement_image }) => (
                  <Fragment key={id}>
                    <div className="flex flex-col items-center justify-center space-y-3 py-3 md:items-start">
                      <h3 className="text-lg font-semibold tracking-[-0.01em] md:text-xl">{title}</h3>
                      <ul className="text-muted-foreground list-disc space-y-3 text-center text-sm text-pretty sm:text-base md:text-left">
                        {achievement_descriptions.map(({ id, description_text }) => (
                          <li key={id}>{description_text}</li>
                        ))}
                      </ul>
                    </div>
                    {achievement_image && (
                      <div className="aspect-video overflow-hidden rounded-xl border border-yellow-400">
                        <img
                          src={`/storage/${achievement_image?.image_filename}`}
                          alt="nakamit mo"
                          className="h-full w-full select-none"
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
