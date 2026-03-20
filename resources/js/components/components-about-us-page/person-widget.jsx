import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export default function PersonWidget({ data, isReverse }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      className={'mx-auto hidden w-full max-w-4xl min-w-70 items-center justify-center lg:grid lg:grid-cols-2'}
    >
      <img
        src={data.image_path}
        alt={'No image provided.'}
        className={cn('hidden h-158 w-140 rounded-2xl bg-zinc-800 object-cover shadow-xl select-none md:flex', isReverse ? '' : 'order-last')}
      />
      <div className="mt-5">
        {/*Content*/}
        <div className="relative flex w-full items-center justify-center overflow-hidden">
          {/* The "Background" Image */}
          <img
            src={isReverse ? '/images/aboutus-page-img/rightRibbon.png' : '/images/aboutus-page-img/leftRibbon.png'}
            alt="background ribbon"
            className="absolute inset-0 z-0 h-full w-full select-none"
            draggable="false"
          />

          {/* The Content (sitting on top) */}
          <div className="relative z-10 p-6 text-center">
            <h2 className="text-primary-foreground text-2xl font-bold tracking-widest uppercase">{data.title}</h2>
            <p className="text-primary-foreground mt-2 max-w-md">{data.position}</p>
          </div>
        </div>
        <div
          className={cn(
            'max-h-md relative rounded-xl border-2 border-t-0 border-amber-300 break-words md:rounded-none',
            isReverse ? 'md:mr-10 md:rounded-br-lg md:border-l-0' : 'md:ml-10 md:rounded-bl-lg md:border-r-0',
          )}
        >
          {/*text*/}
          <div className="hidden md:flex" />
          <div className='p-10'>
          {data.quote && <p className="text-lg pb-5 italic text-gray-300">{data.quote}</p>}
          <p className="h-auto text-xl text-gray-300">{data.content}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
