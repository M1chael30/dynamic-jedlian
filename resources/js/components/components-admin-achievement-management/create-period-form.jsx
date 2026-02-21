import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import TextInput from '../text-input';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ImagesIcon, RotateCcwIcon } from 'lucide-react';
import { cn } from '../../lib/utils'
import { useRef, useState } from 'react';

export default function CreatePeriodForm() {
    const currentYear = new Date().getFullYear();
    const [undoBtn, setUndoBtn] = useState(false);
    const fileInputRef = useRef(null);


    const { data, setData, errors, post, reset, processing } = useForm({
        year: '',
        image_filename: '',
    });

    const currentImage = data.image_filename ?? null
    const [image, setImage] = useState(currentImage);

    const submitPeriod = (e) => {
        e.preventDefault();

        post(route('achievement.store.period'), {
            preserveScroll: true,
            onFinish: () => reset(),
            onSuccess: () => {
                reset();
                toast.success('Period Created Successfully');
                setUndoBtn(false);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            },
        });
    };

    const selectedImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imagePreview = URL.createObjectURL(e.target.files[0]);
            setImage(imagePreview);
            setUndoBtn(true);
            setData('image_filename', e.target.files[0]);
        }
    };

    const handleUndoBtn = (e) => {
        e.preventDefault();
        setImage(currentImage);
        setUndoBtn(false);
        setData('image_filename', null);

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <Card>
            <CardHeader>
                {/* <CardTitle>Create period ni geronie</CardTitle> */}
                <CardTitle>Create period</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={submitPeriod} className="space-y-5">
                    <div className="space-y-3">
                        <TextInput
                            labelTitle={'Year'}
                            labelName={'Year'}
                            placeholder={`ex. ${currentYear}`}
                            type="number"
                            value={data.year}
                            onChange={(e) => setData('year', e.target.value)}
                            min="1"
                        />
                        <FormError message={errors.year} />
                    </div>

                    <div className="space-y-3">
                        <Label>Upload Image (Max size: 3MB)</Label>
                        <Label htmlFor="avatar" className={`cursor-pointer`}>
                            <Input
                                id="avatar"
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
                                <AvatarImage className={'rounded-md'} src={image ?? null} />
                                <AvatarFallback className={'rounded-md'}>
                                    <ImagesIcon />
                                </AvatarFallback>
                            </Avatar>
                        </Label>
                        {errors && <FormError message={errors.image_filename} />}

                        {undoBtn && (
                            <Button type="button" onClick={handleUndoBtn} size="sm" variant="outline">
                                <RotateCcwIcon />
                                Undo
                            </Button>
                        )}
                    </div>

                    <Button type="submit" disabled={processing}>
                        {processing ? <Loading title="Loading" /> : 'Create'}
                    </Button>
                </form>
            </CardContent>
        </Card >
    );
}
