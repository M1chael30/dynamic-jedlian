import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuGroup,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";

export function BusinessNavigation({
 businesses,
}) {
 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="link">
     Our Businesses <ChevronDown />
    </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent>
    <DropdownMenuGroup>
     {businesses.map((item, index) => (
      <DropdownMenuItem key={index}>
       <Link href={route("business", item.id)} className="w-full">
        {item.name}
       </Link>
      </DropdownMenuItem>
     ))}
    </DropdownMenuGroup>
   </DropdownMenuContent>
  </DropdownMenu>
 );
}