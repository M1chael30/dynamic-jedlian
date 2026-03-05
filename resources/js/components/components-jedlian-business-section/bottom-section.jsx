import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { fadeVariants, sectionVariants } from '../../lib/animations';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export default function BottomSection({ business }) {
  const branches = business.business_branches;
  let content;
  // conditional render of content.
  if (business?.category === 'branches' && branches.length !== 0) {
    content = (
      <motion.div variants={fadeVariants} initial="hidden" whileInView="show">
        <Carousel
          className="mx-auto w-70 md:w-full"
          plugins={[
            Autoplay({
              delay: 10000,
            }),
          ]}
        >
          <CarouselContent>
            {branches?.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col justify-center space-y-4 overflow-hidden p-1 md:h-120">
                  {item?.google_map_embed ? (
                    <iframe
                      src={'https://www.google.com/maps/embed?pb=' + item?.google_map_embed}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full rounded-lg"
                    ></iframe>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-zinc-800">No embedded Google Maps location.</div>
                  )}

                  <div className="text-center">
                    <p className="text-description">{item?.address}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-7.75 md:top-1/2 md:-left-12" />
          <CarouselNext className="-right-7.75 md:top-1/2 md:-right-12" />
        </Carousel>
      </motion.div>
    );
  } else if (business?.category === 'offices' && branches.length !== 0) {
    content = (
      <motion.div variants={fadeVariants} initial="hidden" whileInView="show">
        <ul>
          {branches.map((item, index) => (
            <li key={index}>{item.address}</li>
          ))}
        </ul>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full space-y-6 p-6 md:p-18 lg:px-48 lg:py-5"
    >
      {
        branches.length > 0 &&
        <motion.h1
          variants={fadeVariants}
          initial="hidden"
          whileInView="show"
          className="text-title capitalize bg-[radial-gradient(circle_at_center,#cfceaa,#c89116,#cfceaa)] bg-clip-text font-extrabold text-transparent"
        >
          {business?.category}
        </motion.h1>
      }
      {content}
    </motion.div>
  );
}
