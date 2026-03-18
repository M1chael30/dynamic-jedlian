import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import TextInput from '../text-input';
import { Button } from '../ui/button';
import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from '../ui/dialog'

export default function CreatePeriodForm() {
    const currentYear = new Date().getFullYear();
    const [open, setOpen] = useState(false);

    const { data, setData, errors, post, reset, processing } = useForm({
        year: '',
        image_filename: '',
    });



    const submitPeriod = (e) => {
        e.preventDefault();

        post(route('achievement.store.period'), {
            preserveScroll: true,
            only: ['periods'],
            onFinish: () => reset(),
            onSuccess: () => {
                reset();
                toast.success('Period created successfully');
                setOpen(false)
            },
        });
    };



    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add Period</Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={submitPeriod} className='space-y-6'>
                    <DialogHeader>
                        <DialogTitle>Year Period</DialogTitle>
                    </DialogHeader>
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
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={processing}>
                            {
                                processing ? <Loading title={'Loading...'} /> : 'Create'
                            }
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

