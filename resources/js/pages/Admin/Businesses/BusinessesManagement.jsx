import { Head, Link } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import AdminLayout from '../../../layouts/admin-layout';
import { Button } from '../../../components/ui/button';
import AddBusinessForm from '../../../components/components-admin-business-management/add-business-form';
import EditBusinessForm from '../../../components/components-admin-business-management/edit-business-form';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '../../../components/ui/item';
import { TrashIcon } from 'lucide-react';


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

        <div className={'space-y-3'}>
          <h1 className="text-center">Businesses</h1>
          {businesses.map((business, index) => (
            <Item key={index} variant="outline">
              <ItemContent>
                <ItemTitle>
                  {business.name}
                </ItemTitle>
                <ItemDescription>{business.description}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button asChild variant={'link'}>
                  <Link href={route('business.show', business.id)}>View</Link>
                </Button>
                <EditBusinessForm key={business.id} business={business} />
              </ItemActions>
            </Item>
          ))}
        </div>
      </section>
    </>
  );
}

BusinessesManagement.layout = (page) => <AdminLayout children={page} />;
