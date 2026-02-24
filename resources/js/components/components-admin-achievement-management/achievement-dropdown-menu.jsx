import { Button } from "../ui/button"
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { EllipsisIcon, } from "lucide-react"
import CreateDescriptionForm from "./create-description-form"
import EditTitleForm from "./edit-title-form"
import { router } from "@inertiajs/react"
import { toast } from "sonner"

export function AchievementDropdownMenu({ achievement }) {

 function handleDeleteAchievement() {
  if (confirm(`Are you sure you want to delete ${achievement?.title}?`)) {
   router.post(route('achievement.delete.title', achievement?.id), {
    preserveScroll: true,
    onSuccess: () => {
     toast.success('Achievement delete successfully');
    },
   })
  }
 }

 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="outline">
     <EllipsisIcon />
    </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent>
    <DropdownMenuItem asChild>
     <EditTitleForm key={achievement?.id} achievement={achievement} />
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem asChild>
     <CreateDescriptionForm key={achievement?.id} achievement={achievement} />
    </DropdownMenuItem>
    <DropdownMenuItem variant="destructive" onClick={handleDeleteAchievement}>
     Delete
    </DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu>
 )
}
