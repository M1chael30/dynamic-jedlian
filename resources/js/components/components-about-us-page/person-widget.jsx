import { motion } from "motion/react";
import { cn } from '../../lib/utils'

export default function PersonWidget({ image, content, isReverse, banner }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      className={'md:grid-cols-2 items-center justify-center max-w-4xl min-w-70 w-full mx-auto hidden md:grid'}
    >
      <img
        src={image}
        alt={"boss"}
        className={
          cn(
            'object-cover rounded-2xl shadow-xl bg-red-100 h-160 w-150 hidden md:flex select-none',
            isReverse ? "" : "order-last"
          )
        }
      />
      <div>
        {/*Content*/}
        <div className={
          cn(
            'border-2 border-amber-300 md:rounded-none rounded-xl relative max-h-lg',
            isReverse ? "md:border-l-0 md:rounded-r-lg" : "md:border-r-0 md:rounded-l-lg"
          )
        }
        >
          <img
            src={image}
            alt={"boss"}
            className="rounded-2xl shadow-xl flex md:hidden select-none" draggable="false"
          />

          <img
            src={banner}
            alt={"boss"}
            className="md:absolute md:top-5 w-full select-none" draggable="false"
          />

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
