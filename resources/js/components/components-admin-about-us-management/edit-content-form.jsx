import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import { Button } from '../ui/button';
import { ScrollArea } from "../ui/scroll-area"
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { useRef, useState } from 'react';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ImagesIcon, RotateCcwIcon } from 'lucide-react';
import { cn } from '../../lib/utils'
import TextInput from '../text-input';

export default function AboutUsEditContentForm({ content }) {
   const fileInputRef = useRef(null);
   const [undoBtn, setUndoBtn] = useState(false);
   const [open, setOpen] = useState(false)

   const currentImage =
      `/storage/${content?.image_path}` ?? ''

   const [image, setImage] = useState(currentImage);

   const { data, setData, errors, post, processing, isDirty, reset } = useForm({
      title: content.title,
      position: content.position,
      content: content.content,
      image_path: '',
      _method: 'PUT'
   });

   const submitAboutUsContent = (e) => {
      e.preventDefault();

      post(route('update.about_us_content', content?.id), {
         preserveScroll: true,
         only: ['content'],
         onSuccess: () => {
            toast.success('Content Updated Successfully');
            setOpen(false)
            setUndoBtn(false);
            reset('image_path');
         },
      });
   };

   const selectedImage = (e) => {
      const file = e.target.files[0];
      if (file) {
         if (image && image.startsWith('blob:')) {
            URL.revokeObjectURL(image);
         }

         setImage(URL.createObjectURL(file));
         setUndoBtn(true);
         setData('image_path', file);
      }
   };

   const handleUndoBtn = (e) => {
      e.preventDefault();
      setImage(currentImage);
      setUndoBtn(false);
      setData('image_path', null);

      if (fileInputRef.current) {
         fileInputRef.current.value = '';
      }
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
                  <DialogTitle>Edit About Us Content</DialogTitle>
               </DialogHeader>
               <ScrollArea className={'h-100'}>
                  <div className="space-y-3 mb-8">
                     <TextInput
                        labelName={content.id === 1 || content.id === 2 ? 'Name' : 'Title'}
                        labelTitle={content.id === 1 || content.id === 2 ? 'Name' : 'Title'}
                        placeholder={'ex. Juan Dela Cruz'}
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                     />
                     <FormError message={errors.title} />
                  </div>
                  {
                     (content.id === 1 || content.id === 2) &&
                     <div className="space-y-3 mb-8">
                        <TextInput
                           labelName={'Position'}
                           labelTitle={'Position'}
                           placeholder={'ex.CEO/President'}
                           value={data.position}
                           onChange={(e) => setData('position', e.target.value)}
                        />
                        <FormError message={errors.position} />
                     </div>
                  }
                  <div className="space-y-3 mb-8">
                     <Label htmlFor="desc">Content</Label>
                     <Textarea
                        id="desc"
                        placeholder="Content Something..."
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                     />
                     <FormError message={errors.content} />
                  </div>
                  <div className="space-y-3 mb-8">
                     <Label>Upload Image (Max size: 3MB)</Label>
                     <Label htmlFor="image_filename" className={`cursor-pointer`}>
                        <Input
                           id="image_filename"
                           hidden
                           type={'file'}
                           onChange={selectedImage}
                           accept="image/*"
                           ref={fileInputRef}
                        />

                        <Avatar
                           className={cn(
                              'rounded-md aspect-video w-full h-full',
                              errors.image_path &&
                              'ring-offset-background ring-2 ring-red-500 ring-offset-[3px]'
                           )}>
                           <AvatarImage className={'rounded-md'} src={image ?? null} />
                           <AvatarFallback className={'rounded-md'}>
                              <ImagesIcon />
                           </AvatarFallback>
                        </Avatar>
                     </Label>
                     <FormError message={errors.image_path} />
                     {undoBtn && (
                        <Button
                           type="button"
                           onClick={handleUndoBtn}
                           variant="outline"
                           disabled={processing}
                        >
                           <RotateCcwIcon /> Undo
                        </Button>
                     )}
                  </div>
               </ScrollArea>
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



