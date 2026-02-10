import { Link } from "@inertiajs/react";
import { Button } from "../ui/button";

export default function Navlink({
 link,
 href = "/",
 variant = "link",
 customClassName,
 icon,
}) {
 return (
  <Button asChild variant={variant}>
   <Link href={href} className={customClassName}>
    {icon}
    {link}
   </Link>
  </Button>
 );
}