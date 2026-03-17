import CorporateValuesButton from "./corporate-values-button";
import { corporateValuesButtonsData } from "../../lib/corporateGovernanceData";

import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "../ui/carousel";
import CorporateValuestitle from "./corporate-values-title";

export default function CorporateValuesMobile() {
 return (
  <section className="visible md:hidden my-10">
   <Carousel className="w-55 h-auto visible md:hidden">
    <CarouselContent>
     {corporateValuesButtonsData.map((item, index) => (
      <CarouselItem key={index} className="">
       <div className=" flex flex-col items-center justify-center gap-3">
        <CorporateValuesButton
         key={index}
         customClassName={"bg-gradient-to-b from-yellow-600 to-yellow-200"}
        >
         <img src={item.logo} alt="logo" className="w-20 h-20" />
        </CorporateValuesButton>
        <div className="text-center">
         <CorporateValuestitle customClassName={`font-bold text-yellow-400`}>
          {item.title}
         </CorporateValuestitle>
         <p className="text-description h-20">{item.description}</p>
        </div>
       </div>
      </CarouselItem>
     ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
   </Carousel>
  </section>
 );
}
