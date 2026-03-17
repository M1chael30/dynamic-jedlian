import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import TextInput from '../text-input'
import { useState } from 'react';

export default function CreateBusinessSectionForm({ business }) {
    const [open, setOpen] = useState(false)

    const { data, setData, errors, post, reset, processing } = useForm({
        business_id: business.id,
        title: '',
        content: '',
    });

    const createBusinessSection = (e) => {
        e.preventDefault();
        post(route('business.store.section',), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.success('Business Section Updated Successfully');
                setOpen(false);
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add Section</Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={createBusinessSection} className="space-y-6">
                    <DialogHeader>
                        <DialogTitle>Add business page sections</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-3">
                        <TextInput
                            placeholder="Type title here"
                            labelTitle="Section Title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        <FormError message={errors.title} />

                    </div>

                    <div className="space-y-3">
                        <Label htmlFor="desc">Content</Label>
                        <Textarea
                            id="desc"
                            className={'w-full'}
                            placeholder="Type your content here..."
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                        />
                        <FormError message={errors.content} />
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

