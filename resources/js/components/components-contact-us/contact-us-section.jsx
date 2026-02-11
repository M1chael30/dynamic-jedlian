import ContactUsAddress from "./contact-us-address";
import ContactUsDetails from "./contact-us-details";

export default function ContactUsSection() {
 return (
  <div className="flex flex-col md:flex-row gap-6 mx-auto w-full max-w-6xl mt-10">
   <ContactUsDetails />
   <ContactUsAddress />
  </div>
 );
}
