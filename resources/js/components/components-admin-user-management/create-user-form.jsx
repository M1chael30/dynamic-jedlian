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

export default function CreateUserForm() {
 const [open, setOpen] = useState(false);

 const { data, setData, errors, post, reset, processing } = useForm({
  name: '',
  email: '',
 });



 const submitUser = (e) => {
  e.preventDefault();

  post(route('user.store'), {
   preserveScroll: true,
   onSuccess: () => {
    reset();
    toast.success('User created successfully');
    setOpen(false)
   },
  });
 };



 return (
  <Dialog open={open} onOpenChange={setOpen}>
   <DialogTrigger asChild>
    <Button>Add User</Button>
   </DialogTrigger>
   <DialogContent>
    <form onSubmit={submitUser} className='space-y-6'>
     <DialogHeader>
      <DialogTitle>Add a user</DialogTitle>
     </DialogHeader>
     <div className="space-y-3">
      <TextInput
       labelTitle={'User'}
       labelName={'User'}
       placeholder={'ex. John'}
       value={data.name}
       onChange={(e) => setData('name', e.target.value)}
      />
      <FormError message={errors.name} />
     </div>
     <div className="space-y-3">
      <TextInput
       labelTitle={'Email'}
       labelName={'Email'}
       placeholder={'ex. john@email.com'}
       value={data.email}
       onChange={(e) => setData('email', e.target.value)}
      />
      <FormError message={errors.email} />
     </div>
     <DialogFooter>
      <DialogClose asChild>
       <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button type="submit" disabled={processing}>
       {
        processing ? <Loading title={'Loading...'} /> : 'Create'
       }
      </Button>
     </DialogFooter>
    </form>
   </DialogContent>
  </Dialog>
 );
}

