import {
 Sheet,
 SheetContent,
 SheetDescription,
 SheetHeader,
 SheetTitle,
 SheetTrigger,
} from "@/components/ui/sheet";
import { ChartNoAxesGantt } from "lucide-react";
import { Button } from "../ui/button";
import Navlink from "./nav-link";
import { navLinks, ourStory } from "../../lib/data";
// import { jedlianBusinessesData } from "@/lib/homePageData";
import { NavigationMenuComponent } from "./navigation-menu-component";

export default function MobileNavLinks() {

 return (
  <Sheet>
   <SheetTrigger asChild>
    <Button variant="outline">
     <ChartNoAxesGantt />
    </Button>
   </SheetTrigger>
   <SheetContent>
    {/* para hindi mag error */}
    <SheetHeader>
     <SheetTitle></SheetTitle>
     <SheetDescription></SheetDescription>
    </SheetHeader>

    {/* content */}
    <div className="flex flex-col">
     <NavigationMenuComponent
      navigationMenuTitle="Our Story"
      dropdownMenuItem={ourStory}
     />
     <NavigationMenuComponent
      navigationMenuTitle="Our Business"
      // dropdownMenuItem={jedlianBusinessesData}
     />
     {navLinks.map((link, i) => (
      <Navlink
       key={i}
       link={link.name}
       href={link.path}
       // variant={link.path === pathName ? "active" : "link"}
      />
     ))}
    </div>
   </SheetContent>
  </Sheet>
 );
}