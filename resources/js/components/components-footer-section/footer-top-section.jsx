import FooterList from "./footer-list";
import { footerQuickLinks } from "../../lib/data";
import { footerContactUs } from "../../lib/data";

export default function FooterTopSection() {
 return (
  <section className="flex justify-around border-b-2 border-b-muted px-3 py-4 w-full max-w-7xl mx-auto">
   <img
    src="images/HOLDINGS-LOGO2.png"
    alt=""
    className="w-70 h-20 aspect-video object-cover hidden md:block select-none"
    draggable="false"
   />
   <FooterList title="Quick Links" list={footerQuickLinks} />
   <FooterList title="Contact Us" list={footerContactUs} />
  </section>
 );
}
