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
import { Badge } from '../ui/badge';

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
            only: ['business'],
            onSuccess: () => {
                reset();
                toast.success('Business Branch Created Successfully');
                setOpen(false);
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add {business.category}</Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={createBusinessBranch} className="space-y-6">
                    <DialogHeader>
                        <DialogTitle>Add business {business.category}</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-3">
                        <TextInput
                            labelTitle="Address"
                            labelName={'Address'}
                            placeholder="Type address here"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                        />
                        <FormError message={errors.address} />
                    </div>

                    <div className="space-y-3">
                        <TextInput
                            placeholder="Paste google map embed here"
                            labelTitle="Google Map Embed"
                            labelName={'Google Map Embed'}
                            value={data.google_map_embed}
                            onChange={(e) => setData('google_map_embed', e.target.value)}
                        />
                        <small className='text-muted-foreground'>
                            Enter only the location code after
                            <Badge variant={'outline'} className={'mx-1'}>pb=</Badge>
                            (without parentheses).
                            https://www.google.com/maps/embed?pb=(location)
                        </small>
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

