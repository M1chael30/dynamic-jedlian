import AdminLayout from '../../../layouts/admin-layout';

import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import SectionsTabCard from '../../../components/components-admin-business-management/tab-cards/sections-tab-card';
import BranchesTabsCard from '../../../components/components-admin-business-management/tab-cards/branches-tab-card';
import SocialTabsCard from '../../../components/components-admin-business-management/tab-cards/socials-tab-card';
import ImagesTabsCard from '../../../components/components-admin-business-management/tab-cards/images-tab-card';

export default function ShowBusiness({ business }) {
  const sections = business.business_sections;
  const socials = business.business_socials;
  const branches = business.business_branches;
  const images = business.business_images;

  return (
    <>
      <Head title={business?.name} />
      <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
        <Button asChild>
          <Link href={route('business.management')}>Back</Link>
        </Button>
        <div>{business.name}</div>
        <Tabs defaultValue="sections" className="w-full">
          <TabsList>
            <TabsTrigger value="sections">Sections</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="branches">Branches</TabsTrigger>
            <TabsTrigger value="socials">Socials</TabsTrigger>
          </TabsList>
          <SectionsTabCard sections={sections} business={business} />
          <ImagesTabsCard business={business} images={images} />
          <BranchesTabsCard branches={branches} business={business} />
          <SocialTabsCard business={business} socials={socials} />
        </Tabs>
      </section>
    </>
  );
}

ShowBusiness.layout = (page) => <AdminLayout children={page} />;
