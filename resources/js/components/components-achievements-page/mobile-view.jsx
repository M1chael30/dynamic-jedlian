import { achievementsData } from "../../lib/achievementsData";
import { motion } from "motion/react";

export default function MobileView() {
  return (
    <div className="md:hidden block">
      <div className="bg-[radial-gradient(circle_at_75%,#c89116,#c89116,#cfceaa)] h-1 w-full" />
      {achievementsData.reverse().map((achievement) => (
        <div key={achievement.id}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            className={`flex justify-center items-center gap-5 relative
                 ${achievement.id % 2 == 0 ? "" : "flex-row-reverse"} h-auto`}
          >
            <div
              className="bg-[radial-gradient(circle_at_75%,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text"
            >
              <h1 className="text-lg">{achievement.year}</h1>
              <p className="text-xs sm:max-w-30">{achievement.content}</p>
            </div>
            <img
              src={achievement.image}
              alt="achievement"
              className="w-37 h-45 select-none"
            />
          </motion.div>
          <div className="bg-[radial-gradient(circle_at_75%,#c89116,#c89116,#cfceaa)] h-1 w-full" />
        </div>
      ))}
    </div>
  );
}
