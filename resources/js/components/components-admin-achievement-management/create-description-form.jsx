import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import AchievementSelectInput from './achievement-select-input';

export default function CreateDescriptionForm({ titles }) {
    const { data, setData, errors, post, reset, processing } = useForm({
        achievement_id: '',
        description_text: '',
    });

    const submitAchievementDescription = (e) => {
        e.preventDefault();

        post(route('achievement.store.description'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.success('Achievement Description Created Successfully');
            },
        });
    };

    return (
        <Card>
            <CardHeader>
                {/* <CardTitle>Create achievement description ni geronie</CardTitle> */}
                <CardTitle>Create achievement description</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={submitAchievementDescription} className="space-y-5">
                    <AchievementSelectInput
                        data={titles}
                        selectLabelTitle={'Title'}
                        labelTitle={'Title'}
                        placeholder="Select a title"
                        value={data.achievement_id}
                        onValueChange={(value) => setData('achievement_id', Number(value))}
                    />
                    <FormError message={errors.achievement_id && 'The title field is required.'} />

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
                    <Button type="submit" disabled={processing}>
                        {processing ? <Loading title="Loading" /> : 'Create'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
