import { Head, useForm } from '@inertiajs/react';
import YearSelectInput from '../../../components/components-admin-achievement-management/year-select-input';
import FormError from '../../../components/form-error';
import TextInput from '../../../components/text-input';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import AdminLayout from '../../../layouts/admin-layout';

export default function AchievementManagement({ periods }) {
    const currentYear = new Date().getFullYear();

    const { data, setData, errors, post } = useForm({
        year: '',
        period_id: null,
    });

    const submitPeriod = (e) => {
        e.preventDefault();

        console.log(data.period_id)
    };

    return (
        <>
            <Head title="Achievement Management" />
            <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
                <Card>
                    <CardHeader>
                        <CardTitle>period ni geronie</CardTitle>
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
                                />
                                <FormError message={errors.year} />
                            </div>
                            <Button type="submit">Create</Button>
                        </form>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>create geronie</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submitPeriod} className="space-y-5">
                            <div className="space-y-3">
                                <YearSelectInput
                                    data={periods}
                                    selectLabelTitle={'Period'}
                                    labelTitle={'Period'}
                                    placeholder="Select a period"
                                    value={data.period_id}
                                    onValueChange={(value) => setData('period_id', value)}
                                />
                                <FormError message={errors.period_id} />
                            </div>
                            <div className="space-y-3">
                                <TextInput labelTitle={'Title'} />
                            </div>  
                            <div className="space-y-3">
                                <Label>Description</Label>
                                <Textarea className={'w-full'} placeholder="Type new description" />
                            </div>
                            <Button type="submit">Create</Button>
                        </form>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

AchievementManagement.layout = (page) => <AdminLayout children={page} />;
