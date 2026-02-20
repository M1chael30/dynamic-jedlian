import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import TextInput from '../text-input';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import YearSelectInput from './year-select-input';

export default function CreateTitleForm({ periods }) {
    const { data, setData, errors, post, reset, processing } = useForm({
        period_id: '',
        title: '',
    });

    const submitAchievement = (e) => {
        e.preventDefault();

        post(route('achievement.store'), {
            preserveScroll: true,
            onFinish: () => reset(),
            onSuccess: () => {
                reset();
                toast.success('Achievement Created Successfully');
            },
        });
    };

    return (
        <Card>
            <CardHeader>
                {/* <CardTitle>Create achievement title ni geronie</CardTitle> */}
                <CardTitle>Create achievement title</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={submitAchievement} className="space-y-5">
                    <div className="space-y-3">
                        <YearSelectInput
                            data={periods}
                            selectLabelTitle={'Period'}
                            labelTitle={'Period'}
                            placeholder="Select a period"
                            value={data.period_id}
                            onValueChange={(value) => setData('period_id', Number(value))}
                        />
                        <FormError message={errors.period_id && 'The period field is required.'} />
                    </div>
                    <div className="space-y-3">
                        <TextInput
                            labelName={'Title'}
                            labelTitle={'Title'}
                            placeholder={'ex. Won something'}
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        <FormError message={errors.title} />
                    </div>
                    <Button type="submit" disabled={processing}>
                        {processing ? <Loading title="Loading" /> : 'Create'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
