import { EllipsisIcon } from 'lucide-react';
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuGroup,
 DropdownMenuItem,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import EditUserForm from './edit-user-form.';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import ResetPasswordForm from './reset-password-form.';

export default function UserDropdownMenu({ user }) {

 function handleDeleteUser() {
  if (confirm(`Are you sure you want to delete ${user?.email}?`)) {
   router.delete(route('user.destroy', user?.id), {
    preserveScroll: true,
    onSuccess: () => toast.success('User deleted successfully')
   })
  }
 }

 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="ghost" size={'icon'}>
     <EllipsisIcon />
    </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent>
    <DropdownMenuGroup>
     <DropdownMenuItem asChild>
      <EditUserForm key={user?.id} user={user} />
     </DropdownMenuItem>
     <DropdownMenuItem asChild>
      <ResetPasswordForm key={user?.id} user={user} />
     </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuGroup>
     <DropdownMenuSeparator />
     <DropdownMenuItem variant='destructive' onClick={handleDeleteUser}>Delete</DropdownMenuItem>
    </DropdownMenuGroup>
   </DropdownMenuContent>
  </DropdownMenu>
 )
}
