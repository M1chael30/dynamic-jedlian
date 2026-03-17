import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import TextInput from '../text-input';
import { Button } from '../ui/button';
import { useState } from 'react';
import {
 Dialog,
 DialogContent,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
 DialogFooter,
 DialogClose,
} from '../ui/dialog'

export default function ResetPasswordForm({ user }) {
 const [open, setOpen] = useState(false);

 const { data, setData, errors, put, processing } = useForm({
  admin_password: '',
 });

 const submitUserPassword = (e) => {
  e.preventDefault();

  put(route('user.reset.password', user?.id), {
   preserveScroll: true,
   onSuccess: () => {
    toast.success('User password changed successfully');
    setOpen(false)
   },
  });
 };

 return (
  <Dialog open={open} onOpenChange={setOpen}>
   <DialogTrigger asChild>
    <Button variant={'ghost'} className={'w-full justify-start px-2'}>Reset password</Button>
   </DialogTrigger>
   <DialogContent>
    <form onSubmit={submitUserPassword} className='space-y-6'>
     <DialogHeader>
      <DialogTitle>Reset {user?.name} password</DialogTitle>
     </DialogHeader>
     <div className="space-y-3">
      <TextInput
       labelTitle={'Password'}
       labelName={'Password'}
       placeholder={'********'}
       type='password'
       value={data.admin_password}
       onChange={(e) => setData('admin_password', e.target.value)}
      />
      <FormError message={errors.admin_password} />
      <small className='text-muted-foreground'>Please enter your current password to change user password.</small>
     </div>
     <DialogFooter>
      <DialogClose asChild>
       <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button type="submit" disabled={processing}>
       {
        processing ? <Loading title={'Loading...'} /> : 'Reset'
       }
      </Button>
     </DialogFooter>
    </form>
   </DialogContent>
  </Dialog>
 );
}

