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

export default function CreateBusinessBranchForm({ business }) {
    const [open, setOpen] = useState(false)

    const { data, setData, errors, post, reset, processing } = useForm({
        business_id: business.id,
        address: '',
        google_map_embed: '',
    });

    const createBusinessBranch = (e) => {
        e.preventDefault();
        post(route('business.store.branch'), {
            preserveScroll: true,
            onSuccess: () => {
                // reset();
                toast.success('Business Branch Created Successfully');
                setOpen(false);
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={'ghost'}>Add Section</Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={createBusinessBranch} className="space-y-6">
                    <DialogHeader>
                        <DialogTitle>Business Page Sections</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3">
                        <TextInput placeholder="Type address here" labelTitle="Section Title" value={data.address} onChange={(e)=> setData('address', e.target.value)}/>
                        <TextInput placeholder="Paste google map embed here" labelTitle="Google Map Embed" value={data.google_map_embed} onChange={(e)=> setData('google_map_embed', e.target.value)}/>
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

