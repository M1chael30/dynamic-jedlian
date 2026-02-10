import { CiFacebook } from "react-icons/ci";
import Navlink from "../nav/nav-link";
import { Link } from "@inertiajs/react";

export default function FooterBottomSection() {
 return (
  <section className="flex md:justify-around items-center px-3 flex-col md:flex-row w-full max-w-7xl mx-auto">
   <div className="flex items-center gap-3 flex-col md:flex-row">
    <ul className="flex space-x-3 text-2xl text-muted-foreground">
     <li>
      <Link href="https://www.facebook.com/profile.php?id=100094395693803">
       <CiFacebook />
      </Link>
     </li>
    </ul>
    <Navlink customClassName="text-zinc-400" link="Copyright Notice" />
    <Navlink customClassName="text-zinc-400" link="Legal Notice" />
   </div>

   <h1 className="text-sm text-muted-foreground mt-3">
    @2026 Jedlian Holdings. All rights reserved
   </h1>
  </section>
 );
}
