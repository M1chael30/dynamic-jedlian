import FooterList from "./footer-list";
import { footerQuickLinks } from "../../lib/data";
import { Link } from "@inertiajs/react";


export default function FooterTopSection() {
 return (
  <section className="flex justify-around border-b-2 border-b-muted px-3 py-4 w-full max-w-7xl mx-auto">
    <Link href="/">
   <img
    src="/storage/business_logo/HOLDINGS-LOGO2.png"
    alt=""
    className="w-70 h-20 aspect-video object-cover hidden md:block select-none"
    draggable="false"
   />
    </Link>
   <FooterList title="Quick Links" list={footerQuickLinks} />
  </section>
 );
}
