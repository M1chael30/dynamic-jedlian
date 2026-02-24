import { Head, Link } from '@inertiajs/react';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import AdminLayout from '../../../layouts/admin-layout';
import HomeStatsForm from '../../../components/components-admin-home-stats/edit-home-stats-form';

export default function HomeManagement({ stats }) {
  console.log(stats);
  return (
    <>
      <Head title="Manage Home" />
      <section className=" space-y-5 px-4 py-5">
        <Button asChild>
          <Link href={route('admin.index')}>Back</Link>
        </Button>
        <div className="flex items-center justify-between">
          <h1>Manage Home</h1>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Stats</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stats.map((stat, index) => (
              <TableRow key={index}>
                <TableCell>{stat.title}</TableCell>
                <TableCell>{stat.stat}</TableCell>
                <TableCell>{stat.description}</TableCell>
                <TableCell>
                    <HomeStatsForm stat={stat}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}

HomeManagement.layout = (page) => <AdminLayout children={page} />;
