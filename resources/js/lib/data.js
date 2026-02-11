import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
 {
  name: "Achievements",
  path: "/achievements",
 },
 {
  name: "Contact Us",
  path: "/contact-us",
 },
];

const ourStory = [
 {
  name: "About Us",
  path: "/about-us",
 },
 {
  name: "Corporate Governance",
  path: "/corporate-governance",
 },
];

const footerQuickLinks = [
 {
  name: "About Us",
  path: "/about-us",
 },
 {
  name: "Contact Us",
  path: "/contact-us",
 },
];

const footerContactUs = [
 {
  name: "+63 124-456-789",
  path: "#",
  icon: Phone,
 },
 {
  name: "jedlian@gmail.com",
  path: "/",
  icon: Mail,
 },
 {
  name: "Santa Rosa, Nueva Ecija",
  path: "https://www.google.com/maps/place/Jedlian+Communication+Inc.+Head+Office/@15.4465586,120.9825232,692m/data=!3m2!1e3!4b1!4m6!3m5!1s0x339729e1c706f4ad:0xd0edade06adaa587!8m2!3d15.4465586!4d120.9850981!16s%2Fg%2F11mhglwsm3!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
  icon: MapPin,
 },
];


export {
 navLinks,
 ourStory,
 footerContactUs,
 footerQuickLinks,
};
