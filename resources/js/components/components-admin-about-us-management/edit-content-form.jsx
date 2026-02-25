import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { useState } from 'react';
import { PenIcon } from 'lucide-react';

export default function AboutUsEditContentForm({ content }) {
 const [open, setOpen] = useState(false)

 const { data, setData, errors, put, processing, isDirty } = useForm({
    content: content.content
 });

 const submitAboutUsContent = (e) => {
  e.preventDefault();

  put(route('update.about_us_content', content?.id), {
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
    <Button variant={'ghost'} onClick={()=>console.log(content?.id)}>
     <PenIcon className="size-4" /> Edit
    </Button>
   </DialogTrigger>
   <DialogContent>
    <form onSubmit={submitAboutUsContent} className="space-y-6">
     <DialogHeader>
      <DialogTitle>Edit About Us Content</DialogTitle>
     </DialogHeader>
     <div className="space-y-3">
      <Label htmlFor="desc">Content</Label>
      <Textarea
       id="desc"
       placeholder="Content Something..."
       value={data.content}
       onChange={(e) => setData('content', e.target.value)}
      />
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

