import { Head } from '@inertiajs/react';
import CreateDescriptionForm from '../../../components/components-admin-achievement-management/create-description-form';
import CreatePeriodForm from '../../../components/components-admin-achievement-management/create-period-form';
import CreateTitleForm from '../../../components/components-admin-achievement-management/create-title-form';
import AdminLayout from '../../../layouts/admin-layout';

export default function CreateAchievement({ periods }) {
    return (
        <>
            <Head title="Achievement Management" />
            <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
                {/* create year period */}
                <CreatePeriodForm />

                {/* create title */}
                <CreateTitleForm periods={periods} />
            </section>
        </>
    );
}

CreateAchievement.layout = (page) => <AdminLayout children={page} />;
