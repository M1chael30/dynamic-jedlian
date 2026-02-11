import { Card, CardFooter, CardHeader } from "../ui/card";
import { CardTitle } from "../ui/card";
import { CardDescription } from "../ui/card";

import { homeStatsData } from "../../lib/homePageData";
import { motion } from "framer-motion";

const containerVariants = {
 hidden: {},
 show: {
  transition: {
   staggerChildren: 0.2,
  },
 },
};

const itemVariants = {
 hidden: {
  opacity: 0,
  y: -120,
  scale: 0.96,
 },
 show: {
  opacity: 1,
  y: 0,
  scale: 1,
  transition: {
   type: "spring",
   stiffness: 220,
   damping: 100,
   mass: 0.8,
  },
 },
};

export default function HomeStatsCards() {
 return (
  <motion.div
   className="grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl hidden md:grid"
   variants={containerVariants}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true, amount: 0.3 }}
  >
   {homeStatsData.map((item, index) => (
    <motion.div className="cursor-pointer" key={index} variants={itemVariants}>
     <Card className="text-black bg-white/75 border-yellow-600 hover:scale-110 duration-400 justify-center h-70 md:h-60 lg:h-76">
      <CardHeader>
       <CardTitle
        className={
         "cursor-default text-center text-title font-extrabold text-shadow-xs"
        }
       >
        {item.number}
       </CardTitle>
       <CardDescription className="text-zinc-900 text-sm text-center text-description italic">
        {item.title}
       </CardDescription>
      </CardHeader>
      <CardFooter>
       <p className="text-zinc-900 text-sm">{item.description}</p>
      </CardFooter>
     </Card>
    </motion.div>
   ))}
  </motion.div>
 );
}
