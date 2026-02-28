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

export default function EditBusinessBranchForm({ branch }) {
    const [open, setOpen] = useState(false)

    const { data, setData, errors, put, reset, processing } = useForm({
        business_id: branch.business_id,
        address: branch.address,
        google_map_embed: branch.google_map_embed,
    });

    const updateBusinessBranch = (e) => {
        e.preventDefault();
        put(route('business.update.branch', branch?.id), {
            preserveScroll: true,
            onSuccess: () => {
                // reset();
                toast.success('Business Branch Updated Successfully');
                setOpen(false);
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={'ghost'}>Edit</Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={updateBusinessBranch} className="space-y-6">
                    <DialogHeader>
                        <DialogTitle>Update branch</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3">
                        <TextInput placeholder="Type address here" labelTitle="Section Title" value={data.address} onChange={(e)=> setData('address', e.target.value)}/>
                        <TextInput placeholder="Paste google map embed here" labelTitle="Google Map Embed" value={data.google_map_embed} onChange={(e)=> setData('google_map_embed', e.target.value)}/>
                            <small className='text-muted-foreground'>Enter only the location code afterpb=(without parentheses). https://www.google.com/maps/embed?pb=(location)</small>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={processing}>
                            {processing ? <Loading title="Loading" /> : 'Update'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    );
}

