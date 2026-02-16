import { Head } from '@inertiajs/react';
import AdminLayout from '../../layouts/admin-layout';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <section className="flex flex-col justify-center items-center">admin admina admin admin</section>
        </>
    );
}

Dashboard.layout = (page) => <AdminLayout children={page} />;
