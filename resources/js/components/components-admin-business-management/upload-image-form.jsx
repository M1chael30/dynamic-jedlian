import { useForm } from '@inertiajs/react';
import { ImagesIcon, RotateCcwIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { cn } from '../../lib/utils';
import FormError from '../form-error';
import Loading from '../loading';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const imageType = [
  {
    key: 'logo',
    value: 'Logo',
  },
  {
    key: 'banner',
    value: 'Banner',
  },
  {
    key: 'circle_banner',
    value: 'Circle Banner',
  },
];

export default function UploadImageForm({ business, images }) {
  const fileInputRef = useRef(null);
  const [undoBtn, setUndoBtn] = useState(false);
  const [open, setOpen] = useState(false);

  const alreadyUsedImageType = images.map((type) => type.image_type);

  const { data, setData, errors, post, reset, processing } = useForm({
    business_id: business?.id,
    image_type: '',
    image_path: null,
  });

  const [image, setImage] = useState(null);

  const uploadImage = (e) => {
    e.preventDefault();

    setData('business_id', business?.id);

    post(route('business.store.image'), {
      preserveScroll: true,
      forceFormData: true,
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
      setData('image_path', e.target.files[0]);
    }
  };

  const handleUndoBtn = (e) => {
    e.preventDefault();
    setImage(null);
    setUndoBtn(false);
    setData('image_path', null);

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
        <form onSubmit={uploadImage} className="space-y-5">
          <DialogHeader>
            <DialogTitle>Image upload</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Label htmlFor="select">Image Type</Label>
            <Select className="w-full" id="select" value={data.image_type} onValueChange={(value) => setData('image_type', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Image Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {imageType &&
                    imageType
                      .filter((t) => !alreadyUsedImageType.includes(t.key))
                      .map((type, index) => (
                        <SelectItem key={index} value={type.key}>
                          {type.value}
                        </SelectItem>
                      ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors && <FormError message={errors.image_type} />}
          </div>
          <div className="space-y-3">
            <Label>Upload Image (Max size: 3MB)</Label>
            <Label htmlFor="image_path" className={`cursor-pointer`}>
              <Input id="image_path" hidden type={'file'} onChange={selectedImage} accept="image/*" ref={fileInputRef} />
              <Avatar
                className={cn(
                  'aspect-video h-full w-full rounded-md',
                  errors.image_path && 'ring-offset-background ring-2 ring-red-500 ring-offset-[3px]',
                )}
              >
                <AvatarImage className={'rounded-md'} src={image} />
                <AvatarFallback className={'rounded-md'}>
                  <ImagesIcon />
                </AvatarFallback>
              </Avatar>
            </Label>
            {errors && <FormError message={errors.image_path} />}
            {undoBtn && (
              <Button type="button" disabled={processing} onClick={handleUndoBtn} variant="outline">
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
