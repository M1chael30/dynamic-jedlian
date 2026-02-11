import bannerAchievements from "images/banners/bannerAchievements.png";
import {motion} from "motion/react"

export default function AchievementsTopSection() {
 return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    >
        <img
         src={bannerAchievements}
         alt="Banner Casa Jedliana"
         className="w-full h-auto max-w-full object-contain select-none"
        />
    </motion.div>
 );
}
