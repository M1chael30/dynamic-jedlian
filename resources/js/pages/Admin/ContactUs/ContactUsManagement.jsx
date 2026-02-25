import { Head, Link } from "@inertiajs/react";
import AdminLayout from "../../../layouts/admin-layout";
import { Button } from "../../../components/ui/button";

export default function ContactUsManagement() {
 return (
  <>
   <Head title="Manage Achievements" />
   <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
    <Button asChild>
     <Link href={route('admin.index')}>Back</Link>
    </Button>
    <div className="flex items-center justify-between">
     <h1>Manage Contact Us</h1>
    </div>
   </section>
  </>
 )
}

ContactUsManagement.layout = (page) => <AdminLayout children={page} />;