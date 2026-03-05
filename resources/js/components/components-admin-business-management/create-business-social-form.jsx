import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import { Button } from '../ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import TextInput from '../text-input'
import { useState } from 'react';

export default function CreateBusinessSocialForm({ business }) {
    const [open, setOpen] = useState(false)

    const { data, setData, errors, post, reset, processing } = useForm({
        business_id: business.id,
        platform_name: '',
        url: '',
    });

    const createBusinessSocial = (e) => {
        e.preventDefault();
        post(route('business.store.social'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.success('Business Social Created Successfully');
                setOpen(false);
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add Social</Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={createBusinessSocial} className="space-y-6">
                    <DialogHeader>
                        <DialogTitle>Add social media platform</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-3">
                        <TextInput
                            placeholder="Type platform name here"
                            labelTitle="Platform name"
                            labelName="Platform name"
                            value={data.platform_name}
                            onChange={(e) => setData('platform_name', e.target.value)}
                        />
                        <FormError message={errors.platform_name} />
                    </div>

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
                        <Button type="submit" disabled={processing}>
                            {processing ? <Loading title="Loading" /> : 'Create'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    );
}

