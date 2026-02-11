import { missionVisionVariants } from "../../lib/animations";
import { motion } from "motion/react";

export default function MissionVisionWidget({
  title,
  description,
  icon: Icon,
}) {
  return (
    <motion.div
      variants={missionVisionVariants}
      className="border border-yellow-400 rounded-4xl p-10"
    >
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cfceaa" />
            <stop offset="50%" stopColor="#c89116" />
            <stop offset="100%" stopColor="#c89116" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col items-center">
        <Icon
          className="text-7xl md:text-9xl"
          style={{ fill: "url(#gold-gradient)" }}
        />

        <h1
          className="uppercase text-title bg-[radial-gradient(circle_at_75%,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text "
        >
          {title}
        </h1>
      </div>

      <p className="text-description">{description}</p>
    </motion.div>
  );
}
