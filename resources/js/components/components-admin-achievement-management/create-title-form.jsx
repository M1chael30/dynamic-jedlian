import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import TextInput from '../text-input';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import { useEffect, useRef, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ImagesIcon, RotateCcwIcon } from 'lucide-react';
import { cn } from '../../lib/utils'


export default function CreateTitleForm({ period }) {
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
            only: ['periods'],
            onSuccess: () => {
                reset();
                toast.success('Achievement Created Successfully');
                setOpen(false)
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
                <Button>Add title</Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={submitAchievement} className="space-y-5">
                    <DialogHeader>
                        <DialogTitle>Achievement title and image</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3">
                        <TextInput
                            labelName={'Title'}
                            labelTitle={'Title'}
                            placeholder={'ex. Won something'}
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        <FormError message={errors.title} />
                    </div>
                    <div className="space-y-3">
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
                                    errors.image_filename &&
                                    'ring-offset-background ring-2 ring-red-500 ring-offset-[3px]'
                                )}>
                                <AvatarImage className={'rounded-md'} src={image} />
                                <AvatarFallback className={'rounded-md'}>
                                    <ImagesIcon />
                                </AvatarFallback>
                            </Avatar>
                        </Label>
                        {errors &&
                            <FormError message={
                                errors.image_filename &&
                                'The image field is required.'
                            } />
                        }

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


