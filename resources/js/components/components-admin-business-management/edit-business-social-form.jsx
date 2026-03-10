import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import { Button } from '../ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import TextInput from '../text-input'
import { useState } from 'react';

export default function EditBusinessSocialForm({ social }) {
    const [open, setOpen] = useState(false)

    const { data, setData, errors, put, processing, isDirty } = useForm({
        business_id: social?.business_id,
        platform_name: social?.platform_name,
        url: social?.url
    });

    const updateBusinessSocial = (e) => {
        e.preventDefault();
        put(route('business.update.social', social?.id), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Business Social Updated Successfully');
                setOpen(false);
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={'link'}>Edit</Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={updateBusinessSocial} className="space-y-6">
                    <DialogHeader>
                        <DialogTitle>Update social media platform link</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-3">
                        <TextInput
                            placeholder="Paste platform page url here"
                            labelTitle="Page URL"
                            labelName="Page URL"
                            value={data.url}
                            onChange={(e) => setData('url', e.target.value)}
                        />
                        <FormError message={errors.url} />
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={processing || !isDirty}>
                            {processing ? <Loading title="Loading" /> : 'Update'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    );
}

