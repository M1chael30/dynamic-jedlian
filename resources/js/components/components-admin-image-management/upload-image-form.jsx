import { useForm } from '@inertiajs/react';
import { ImagesIcon, RotateCcwIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import Loading from '../loading';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup } from '../ui/select';

export default function UploadImageForm({ period }) {
  const fileInputRef = useRef(null);
  const [undoBtn, setUndoBtn] = useState(false);
  const [open, setOpen] = useState(false);

  const { data, setData, errors, post, reset, processing } = useForm({
    title: '',
    image_filename: null,
    period_id: period?.id,
  });

  const [image, setImage] = useState(null);

  const submitAchievement = (e) => {
    e.preventDefault();

    setData('period_id', period?.id);

    post(route('achievement.store.title'), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        toast.success('Achievement Created Successfully');
        setOpen(false);
        setUndoBtn(false);
        setImage(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      },
    });
  };

  const selectedImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setUndoBtn(true);
      setData('image_filename', e.target.files[0]);
    }
  };

  const handleUndoBtn = (e) => {
    e.preventDefault();
    setImage(null);
    setUndoBtn(false);
    setData('image_filename', null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Upload Image</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={submitAchievement} className="space-y-5">
          <DialogHeader>
            <DialogTitle>Image upload</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Select className="w-full">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Image Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="light">Logo</SelectItem>
                  <SelectItem value="dark">Banner</SelectItem>
                  <SelectItem value="system">Circle Banner</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label>Upload Image (Max size: 3MB)</Label>
            <Label htmlFor="image_filename" className={`cursor-pointer`}>
              <Input id="image_filename" hidden type={'file'} onChange={selectedImage} accept="image/*" ref={fileInputRef} />
              <Avatar
                className={cn(
                  'aspect-video h-full w-full rounded-md',
                  errors.image_filename && 'ring-offset-background ring-2 ring-red-500 ring-offset-[3px]',
                )}
              >
                <AvatarImage className={'rounded-md'} src={image} />
                <AvatarFallback className={'rounded-md'}>
                  <ImagesIcon />
                </AvatarFallback>
              </Avatar>
            </Label>
            {undoBtn && (
              <Button type="button" onClick={handleUndoBtn} variant="outline">
                <RotateCcwIcon /> Undo
              </Button>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={processing}>
              {processing ? <Loading title="Loading..." /> : 'Create'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
