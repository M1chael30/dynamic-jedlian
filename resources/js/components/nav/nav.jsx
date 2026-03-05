import Navlink from "./nav-link";
import { navLinks, ourStory } from "../../lib/data";
import MobileNavLinks from "./mobile-nav-links";
import { NavigationMenuComponent } from "./navigation-menu-component";
import { Link, usePage } from "@inertiajs/react";
import { BusinessNavigation } from "./business-navigation";

export default function Nav({ businesses }) {

 const page = usePage().component

 console.log(page)

 return (
  <header className="sticky top-0 z-50">
   <div className="flex h-16 shrink-0 bg-background items-center px-4 mx-auto max-w-7xl w-full">
    {/* logo */}
    <Link href={route("home")}>
     <img
      src={"/storage/business_logo/HOLDINGS-LOGO2.png"}
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
     <BusinessNavigation
      businesses={businesses}
     />
     {navLinks.map((link, i) => (
      <>
       <Navlink
        key={i}
        link={link.name}
        href={link.path}
        customClassName={link.component === page && 'underline'}
       />
      </>
     ))}
    </div>
    {/* mobile nav links mobile view only*/}
    <div className="ml-auto items-center gap-2 md:hidden flex">
     <MobileNavLinks businesses={businesses} />
    </div>
   </div>
  </header>
 );
}