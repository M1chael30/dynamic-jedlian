import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import TextInput from '../text-input';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function CreatePeriodForm({ periods }) {
    const currentYear = new Date().getFullYear();

    const { data, setData, errors, post, reset, processing } = useForm({
        year: '',
    });

    const submitPeriod = (e) => {
        e.preventDefault();

        post(route('achievement.store.period'), {
            preserveScroll: true,
            onFinish: () => reset(),
            onSuccess: () => {
                reset();
                toast.success('Period Created Successfully');
            },
        });
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
                    <Button type="submit" disabled={processing}>
                        {processing ? <Loading title="Loading" /> : 'Create'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
