import Navlink from "./nav-link";
import { navLinks, ourStory } from "../../lib/data";
import { jedlianBusinessesData } from "@/lib/homePageData";
import MobileNavLinks from "./mobile-nav-links";
import { NavigationMenuComponent } from "./navigation-menu-component";
import { Link } from "@inertiajs/react";

export default function Nav() {

 return (
  <header className="sticky top-0 z-50">
   <div className="flex h-16 shrink-0 bg-background items-center px-4 mx-auto max-w-7xl w-full">
    {/* logo */}
    <Link href={route("home")}>
     <img
      src={"images/HOLDINGS-LOGO2.png"}
      alt=""
      className="w-33 h-10 object-cover select-none"
     />
    </Link>
    {/* nav links */}
    <div className="ml-auto items-center gap-2 hidden md:flex">
     <NavigationMenuComponent
      navigationMenuTitle="Our Story"
      dropdownMenuItem={ourStory}
     />
     <NavigationMenuComponent
      navigationMenuTitle="Our Business"
     dropdownMenuItem={jedlianBusinessesData}
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
    {/* mobile nav links mobile view only*/}
    <div className="ml-auto items-center gap-2 md:hidden flex">
     <MobileNavLinks />
    </div>
   </div>
  </header>
 );
}