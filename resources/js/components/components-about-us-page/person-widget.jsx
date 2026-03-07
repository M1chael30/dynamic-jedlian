import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export default function PersonWidget({ image, content, isReverse, banner }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      className={'mx-auto hidden w-full max-w-4xl min-w-70 items-center justify-center md:grid md:grid-cols-2'}
    >
      <img
        src={image}
        alt={'boss'}
        className={cn('hidden h-158 w-140 rounded-2xl bg-red-100 object-cover shadow-xl select-none md:flex', isReverse ? '' : 'order-last')}
      />
      <div className="mt-20">
        {/*Content*/}
        <div className="relative w-full">
          <img src={banner} alt={'boss'} className="w-full select-none md:absolute bottom-0" draggable="false" />
        </div>
        <div
          className={cn(
            'max-h-md relative rounded-xl border-2 border-t-0 border-amber-300 md:rounded-none break-words',
            isReverse ? 'md:rounded-br-lg md:border-l-0 md:mr-10' : 'md:rounded-bl-lg md:border-r-0 md:ml-10',
          )}
        >
          <img src={image} alt={'boss'} className="flex rounded-2xl shadow-xl select-none md:hidden" draggable="false" />
          {/*text*/}
          <div className="hidden md:flex" />
          <p className="text-xl h-auto p-10 text-gray-300">{content}</p>
        </div>
      </div>
    </motion.div>
  );
}
