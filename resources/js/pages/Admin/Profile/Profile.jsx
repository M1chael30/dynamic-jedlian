import { Head, Link } from "@inertiajs/react";
import { Button } from "../../../components/ui/button";
import AdminLayout from "../../../layouts/admin-layout";
import PersonalInfoCard from "../../../components/components-admin-profile-management/personal-info-card";
import ChangePasswordCard from "../../../components/components-admin-profile-management/change-password-card";

export default function Profile({ profileInfo }) {
 return (
  <>
   <Head title="Manage Profile" />
   <section className="space-y-5 px-4 py-5 mx-auto w-full max-w-3xl">
    <Button asChild>
     <Link href={route('admin.index')}>Back</Link>
    </Button>
    <div className="flex items-center justify-between">
     <h1 className='text-2xl'>Manage Profile</h1>
    </div>

    <PersonalInfoCard profileInfo={profileInfo} />

    <ChangePasswordCard />
   </section>
  </>
 )
}

Profile.layout = (page) => <AdminLayout children={page} />;