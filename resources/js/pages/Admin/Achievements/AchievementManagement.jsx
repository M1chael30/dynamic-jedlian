import { Head, Link } from '@inertiajs/react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import AdminLayout from '../../../layouts/admin-layout';
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";



export default function AchievementManagement({ periods, descriptions }) {
    // console.log(periods);
    console.log(periods);
    return (
        <>
            <Head title="Manage Achievements" />
            <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
                <div className="flex items-center justify-between">
                    <h1>Achievements</h1>
                    <Link href={route('achievement.create')} className="text-sm hover:underline">
                        Add Period
                    </Link>
                </div>
                <div className={'flex flex-col gap-2'}>
                    {/* <Table>
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
                    </Table> */}
                    {periods.map((period, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <h1 className="text-2xl font-semibold">{period.year}</h1>
                                    <div className="space-x-4">
                                        <Button>Delete</Button>
                                        <Button>Edit</Button>
                                        <Button>+ Add Achievement</Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className='space-y-5'>
                                    {period.achievements.map((achievement, index) => (
                                        <li key={index} className='rounded-lg bg-zinc-800 p-4'>
                                            <div className={``}>
                                                <p className=''>
                                                Achievement: {achievement.title}
                                                </p>
                                                <div className='flex w-full items-center gap-5 py-1'>
                                                    <Link className='text-xs hover:underline flex items-center gap-1'><FaTrash/>Delete</Link>
                                                    <Link className='text-xs hover:underline flex items-center gap-1'><MdModeEdit/>Edit</Link>
                                                    <Link className='text-xs hover:underline flex items-center gap-1'><IoIosAddCircle/>Add Description</Link>
                                                </div>
                                            </div>
                                            <ul className="m-2 space-y-1 text-xs text-zinc-400">
                                                {achievement.achievement_descriptions.map((description, index) => (
                                                    <li key={index}> - {description.description_text}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
}

AchievementManagement.layout = (page) => <AdminLayout children={page} />;
