import AdminLayout from '../../../layouts/admin-layout';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, router } from '@inertiajs/react';

import SectionsTabCard from '../../../components/components-admin-business-management/tab-cards/sections-tab-card';
import BranchesTabsCard from '../../../components/components-admin-business-management/tab-cards/branches-tab-card';
import SocialTabsCard from '../../../components/components-admin-business-management/tab-cards/socials-tab-card';
import ImagesTabsCard from '../../../components/components-admin-business-management/tab-cards/images-tab-card';
import OverviewTabsCard from '../../../components/components-admin-business-management/tab-cards/overview-tab-card';

export default function ShowBusiness({ business }) {
  const sections = business.business_sections;
  const socials = business.business_socials;
  const branches = business.business_branches;
  const images = business.business_images;

  console.log(branches)


  return (
    <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
      <Button asChild>
        <Link href={route('business.management')}>Back</Link>
      </Button>
      <div>{business.name}</div>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sections">Sections</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="branches">Branches</TabsTrigger>
          <TabsTrigger value="socials">Socials</TabsTrigger>
        </TabsList>
        <OverviewTabsCard business={business}/>
        <SectionsTabCard sections={sections} business={business}/>
        <ImagesTabsCard/>
        <BranchesTabsCard branches={branches} business={business}/>
        <SocialTabsCard business={business} socials={socials}/>
      </Tabs>
    </section>
  );
}

ShowBusiness.layout = (page) => <AdminLayout children={page} />;
