import { Head, Link } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import AdminLayout from '../../layouts/admin-layout';
import LogsTimeline from '../../components/components-admin-dashboard/logs-timeline';
import PaginationLinks from '../../components/pagination-links'

export default function Dashboard({ pages, logs }) {
    return (
        <>
            <Head title="Dashboard" />
            <section className="space-y-5 px-4 py-5 mx-auto w-full max-w-3xl">
                <div className="flex items-center justify-between">
                    <h1 className='text-2xl'>Manage Contents</h1>
                </div>
                <div className={'rounded-sm border-2 p-2'}>
                    <h1 className="text-center">Pages</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Page Name</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pages.map((page, index) => (
                                <TableRow key={index}>
                                    <TableCell>{page.name}</TableCell>
                                    <TableCell>
                                        <Link href={route(page.route_name)}>View</Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className={'rounded-sm border-2 p-2'}>
                    <h1 className="text-center">Recent Activity</h1>
                    <LogsTimeline logs={logs?.data} />
                    <PaginationLinks
                        prev_page_url={logs?.prev_page_url}
                        next_page_url={logs?.next_page_url}
                        loadOnly={['logs']}
                    />
                </div>
            </section>
        </>
    );
}

Dashboard.layout = (page) => <AdminLayout children={page} />;
