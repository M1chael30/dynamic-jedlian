import Autoplay from "embla-carousel-autoplay";

import {
 Card,
 CardHeader,
 CardTitle,
 CardDescription,
 CardFooter,
} from "../ui/card";

import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "../ui/carousel";
import { homeStatsData } from "@/lib/homePageData";

export function HomeStatsCardMobile() {
 return (
  <Carousel
   plugins={[
    Autoplay({
     delay: 3000,
    }),
   ]}
   className="w-55 h-60 visible md:hidden"
  >
   <CarouselContent>
    {homeStatsData.map((item, index) => (
     <CarouselItem key={index}>
      <Card className="text-black bg-white/75 border-yellow-600 h-60">
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
     </CarouselItem>
    ))}
   </CarouselContent>
   <CarouselPrevious />
   <CarouselNext />
  </Carousel>
 );
}
