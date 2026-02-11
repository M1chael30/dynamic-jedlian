import sample from "images/ceoLabel.png"
import { motion } from "motion/react";
import { fadeUpVariants } from "../../lib/animations";

export default function PersonWidget({ image, name, position, content, isReverse, banner }) {

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1, transition: {duration:1.5}}}
    className={`md:grid-cols-2 items-center justify-center max-w-4xl min-w-70 w-full mx-auto hidden md:grid`}>
      <Image src={image} alt={"boss"} className={`object-cover rounded-2xl shadow-xl bg-red-100 h-160 hidden md:flex ${isReverse ? "" : "order-last"} select-none`}  draggable="false" />
      <div>
        {/*Content*/}
        <div className={`border-2 border-amber-300 md:rounded-none rounded-xl relative max-h-lg ${isReverse ? "md:border-l-0 md:rounded-r-lg" : "md:border-r-0 md:rounded-l-lg"}`}>
                <Image src={image} alt={"boss"} className="rounded-2xl shadow-xl flex md:hidden select-none"   draggable="false"/>

        <Image src={banner} alt={"boss"} className="md:absolute md:top-5 w-full select-none "  draggable="false"/>
        {/*text*/}
          <div className="h-16 hidden md:flex" />
          <p className="text-gray-300 p-10 h-auto text-description">
            {content}        
          </p>
        </div>
      </div>
    </motion.div>
  );
}
