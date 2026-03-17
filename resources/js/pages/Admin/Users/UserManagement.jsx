import { Head, Link } from '@inertiajs/react';
import { Button } from '../../../components/ui/button';
import AdminLayout from '../../../layouts/admin-layout'
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from '../../../components/ui/table'
import UserDropdownMenu from '../../../components/components-admin-user-management/user-dropdown-menu';
import CreateUserForm from '../../../components/components-admin-user-management/create-user-form';


export default function UserManagement({ users }) {
 return (
  <>
   <Head title="Manage Users" />
   <section className="space-y-5 px-4 py-5 mx-auto w-full max-w-3xl">
    <Button asChild>
     <Link href={route('admin.index')}>Back</Link>
    </Button>
    <div className="flex items-center justify-between">
     <h1 className='text-2xl'>Manage Users</h1>
     <CreateUserForm />
    </div>
    <div className={'rounded-sm border-2 p-2'}>
     <Table>
      <TableHeader>
       <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Actions</TableHead>
       </TableRow>
      </TableHeader>
      <TableBody>
       {
        users.length > 0 && (
         users.map((user, index) =>
          <TableRow key={index}>
           <TableCell className={'capitalize'}>{user?.name}</TableCell>
           <TableCell>{user?.email}</TableCell>
           <TableCell className={'capitalize'}>{user?.role}</TableCell>
           <TableCell>
            <UserDropdownMenu key={user?.id} user={user} />
           </TableCell>
          </TableRow>
         )
        )
       }
      </TableBody>
     </Table>
    </div>
   </section>
  </>
 )
}

UserManagement.layout = (page) => <AdminLayout children={page} />;
