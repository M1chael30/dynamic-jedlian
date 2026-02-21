import { Head, Link } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import AdminLayout from '../../../layouts/admin-layout';

export default function AchievementManagement({ achievements }) {
    console.log(achievements);
    return (
        <>
            <Head title="Manage Achievements" />
            <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
                <div className="flex items-center justify-between">
                    <h1>Achievements</h1>
                    <Link href={route('achievement.create')} className="text-sm hover:underline">
                        Add Achievement?
                    </Link>
                </div>
                <div className={'rounded-xl border'}>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Period</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {achievements.map((achievement, index) => (
                                <TableRow key={index}>
                                    <TableCell>{achievement.title}</TableCell>
                                    <TableCell>{achievement.period.year}</TableCell>
                                    <TableCell>
                                        <Link href={`/admin/achievement-management/${achievement.id}`}>View</Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </>
    );
}

AchievementManagement.layout = (page) => <AdminLayout children={page} />;
