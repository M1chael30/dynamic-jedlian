import { Head, Link } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import AdminLayout from '../../layouts/admin-layout';

export default function Dashboard({pages}) {
    return (
        <>
            <Head title="Dashboard" />
            <section className="space-y-5 px-4 py-5">
                <div className={'mx-auto w-full max-w-3xl rounded-sm border-2 p-2'}>
                    <h1 className="text-center">Pages</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Page Name</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* <TableRow>
                                <TableCell>Home</TableCell>
                                <TableCell>
                                    <Link>View</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>About Us</TableCell>
                                <TableCell>
                                    <Link>View</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Corporate Governance</TableCell>
                                <TableCell>
                                    <Link>View</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Our Businesses</TableCell>
                                <TableCell>
                                    <Link>View</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Achievements</TableCell>
                                <TableCell>
                                    <Link>View</Link>
                                </TableCell>
                            </TableRow> */}
                            {pages.map((page, index)=>(
                            <TableRow key={index}>
                                <TableCell>{page.name}</TableCell>
                                <TableCell>
                                    <Link href={route('achievement.management')}>View</Link>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className={'mx-auto w-full max-w-3xl rounded-sm border-2 p-2'}>
                    <h1 className="text-center">Recent Activity</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Action</TableHead>
                                <TableHead>Time</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Geronie</TableCell>
                                <TableCell>Inedit yung business page</TableCell>
                                <TableCell>Update</TableCell>
                                <TableCell>medyo kanina lang</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Geronie</TableCell>
                                <TableCell>Inalis yung inedit kanina sa business page</TableCell>
                                <TableCell>Update</TableCell>
                                <TableCell>kanina lang</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Geronie</TableCell>
                                <TableCell>Inedit uli yung business page</TableCell>
                                <TableCell>Update</TableCell>
                                <TableCell>kaninang kanina lang</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </section>
        </>
    );
}

Dashboard.layout = (page) => <AdminLayout children={page} />;
