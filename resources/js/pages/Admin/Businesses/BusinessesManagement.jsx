import { Head, Link } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import AdminLayout from '../../../layouts/admin-layout';
import { Button } from '../../../components/ui/button';
import AddBusinessForm from '../../../components/components-admin-business-management/add-business-form';
import EditBusinessForm from '../../../components/components-admin-business-management/edit-business-form';


export default function BusinessesManagement({ businesses }) {
  return (
    <>
      <Head title="Manage Businesses" />
      <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
        <Button asChild>
          <Link href={route('admin.index')}>Back</Link>
        </Button>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Manage Businesses Content</h1>
          <AddBusinessForm />
        </div>
        <div className={'rounded-sm border-2 p-2'}>
          <h1 className="text-center">Businesses</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {businesses.map((business, index) => (
                <TableRow key={index}>
                  <TableCell>{business.name}</TableCell>
                  <TableCell>
                    <Button asChild variant={'link'}>
                      <Link href={route('business.show', business.id)}>View</Link>
                    </Button>
                    <EditBusinessForm key={business.id} business={business} />
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

BusinessesManagement.layout = (page) => <AdminLayout children={page} />;
