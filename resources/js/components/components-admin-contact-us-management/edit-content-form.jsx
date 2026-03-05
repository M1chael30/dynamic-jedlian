import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import TextInput from '../text-input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { useState } from 'react';
import { PenIcon } from 'lucide-react';

export default function ContactUsEditContentForm({ item }) {
   const [open, setOpen] = useState(false)

   const { data, setData, errors, put, processing, isDirty } = useForm({
      title: item?.title,
      content: item?.content
   });

   const submitAboutUsContent = (e) => {
      e.preventDefault();

      put(route('contact_us.update', item?.id), {
         preserveScroll: true,
         onSuccess: () => {
            toast.success('Content Updated Successfully');
            setOpen(false);
         },
      });
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button variant={'link'}>
               Edit
            </Button>
         </DialogTrigger>
         <DialogContent>
            <form onSubmit={submitAboutUsContent} className="space-y-6">
               <DialogHeader>
                  <DialogTitle>Edit Contact Us Content</DialogTitle>
               </DialogHeader>
               <div className="space-y-3">
                  <TextInput
                     labelTitle={'Title'}
                     labelName={'title'}
                     placeholder={'Title'}
                     disabled
                     value={data.title}
                     onChange={(e) => setData('title', e.target.value)}
                  />
                  <FormError message={errors.title} />
               </div>
               <div className="space-y-3">
                  <TextInput
                     labelTitle={'Content'}
                     labelName={'content'}
                     placeholder={'ex. Something...'}
                     value={data.content}
                     onChange={(e) => setData('content', e.target.value)}
                  />
                  {
                     item?.id === 4 && (
                        <small className='text-muted-foreground'>
                           Enter only the location code after
                           <Badge variant={'outline'} className={'mx-1'}>pb=</Badge>
                           (without parentheses).
                           https://www.google.com/maps/embed?pb=(location)
                        </small>
                     )
                  }
                  <FormError message={errors.content} />
               </div>
               <DialogFooter>
                  <DialogClose asChild>
                     <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" disabled={processing || !isDirty}>
                     {processing ? <Loading title="Loading..." /> : 'Update'}
                  </Button>
               </DialogFooter>
            </form>
         </DialogContent>
      </Dialog >
   );
}

