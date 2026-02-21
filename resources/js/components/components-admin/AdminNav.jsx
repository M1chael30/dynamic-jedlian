// import Navlink from "./nav-link";
// import { navLinks, ourStory } from "../../lib/data";
// import { jedlianBusinessesData } from "@/lib/homePageData";
// import MobileNavLinks from "./mobile-nav-links";
// import { NavigationMenuComponent } from "./navigation-menu-component";
import { Link } from "@inertiajs/react";
import { Button } from "../ui/button";
import { router } from "@inertiajs/react";

export default function AdminNav() {
    const handleLogout = () => {
        router.post('/admin/logout')
    }

    return (
        <header className="sticky top-0 z-50">
            <div className="flex h-16 shrink-0 justify-between bg-background items-center px-4 mx-auto max-w-7xl w-full">
                {/* logo */}
                <Link href={route("home")}>
                    <img
                        src={"storage/business_logo/HOLDINGS-LOGO2.png"}
                        alt=""
                        className="w-33 h-10 object-cover select-none"
                    />
                </Link>
                <Button className={"bg-black text-white hover:bg-zinc-800"} onClick={handleLogout}>Logout</Button>

                {/* mobile nav links mobile view only*/}
                {/* <div className="ml-auto items-center gap-2 md:hidden flex">
     <MobileNavLinks />
    </div> */}
            </div>
        </header>
    );
}