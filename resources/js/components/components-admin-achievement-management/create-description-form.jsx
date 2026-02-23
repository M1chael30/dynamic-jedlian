import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { useState } from 'react';

export default function CreateDescriptionForm({ achievement }) {
    const [open, setOpen] = useState(false)

    const { data, setData, errors, post, reset, processing } = useForm({
        achievement_id: achievement?.id,
        description_text: '',
    });

    const submitAchievementDescription = (e) => {
        e.preventDefault();

        post(route('achievement.store.description'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.success('Achievement Description Created Successfully');
                setOpen(false);
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={'ghost'} className={'justify-start w-full px-2'}>Add Description</Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={submitAchievementDescription} className="space-y-6">
                    <DialogHeader>
                        <DialogTitle>Achievement Description</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3">
                        <Label htmlFor="desc">Description</Label>
                        <Textarea
                            id="desc"
                            className={'w-full'}
                            placeholder="ex. 2016 - won something"
                            value={data.description_text}
                            onChange={(e) => setData('description_text', e.target.value)}
                        />
                        <FormError message={errors.description_text} />
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

