import { Head, Link } from '@inertiajs/react';
import { Button } from '../../../components/ui/button';
import AdminLayout from '../../../layouts/admin-layout';
import CreatePeriodForm from '../../../components/components-admin-achievement-management/create-period-form';
import PeriodsCard from '../../../components/components-admin-achievement-management/periods-card';

export default function AchievementManagement({ periods }) {
    return (
        <>
            <Head title="Manage Achievements" />
            <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
                <Button asChild>
                    <Link href={route('admin.index')}>Back</Link>
                </Button>
                <div className="flex items-center justify-between">
                    <h1 className='text-2xl'>Manage Achievements</h1>
                    <CreatePeriodForm />
                </div>
                <div className={'flex flex-col gap-6'}>
                    {periods.map((period, index) => (
                        <PeriodsCard key={index} period={period} />
                    ))}
                </div>
            </section>
        </>
    );
}

AchievementManagement.layout = (page) => <AdminLayout children={page} />;
