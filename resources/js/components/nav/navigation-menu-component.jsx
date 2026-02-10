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

export function NavigationMenuComponent({
 navigationMenuTitle,
 dropdownMenuItem = [],
}) {
 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="link">
     {navigationMenuTitle} <ChevronDown />
    </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent>
    <DropdownMenuGroup>
     {dropdownMenuItem.map((item, index) => (
      <DropdownMenuItem key={index}>
       <Link href={item.path} className="w-full">
        {item.name ? item.name : item.title}
       </Link>
      </DropdownMenuItem>
     ))}
    </DropdownMenuGroup>
   </DropdownMenuContent>
  </DropdownMenu>
 );
}