import React from 'react'
import AdminLayout from '../../../layouts/admin-layout'
import { Head, Link } from '@inertiajs/react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';


export default function AchievementManagement({ achievements }) {
    console.log(achievements)
    return (
        <>
            <Head title="Manage Achievements" />
            <section className="space-y-5 px-4 py-5">
                <div className={'mx-auto w-full max-w-3xl rounded-sm border-2 p-2'}>
                    <div className='flex justify-between items-center px-2'>
                        <h1>Achievements</h1>
                        <Link href={route('achievement.create')} className='text-sm hover:underline'>Add Achievement?</Link>
                    </div>
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
                                        <Link href={`/admin/achievement-management/show/${achievement.id}`}>View</Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>
            </section>
        </>
    )
}


AchievementManagement.layout = (page) => <AdminLayout children={page} />