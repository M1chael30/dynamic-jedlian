import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from '@inertiajs/react';
import CreateBusinessSectionForm from '../../../components/components-admin-business-management/create-business-section-form';
import AdminLayout from '../../../layouts/admin-layout';

export default function ShowBusiness({ business, sections }) {

    console.log(sections)

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
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardDescription>
              <p className="px-3">{business.description}</p>
            </CardDescription>
          </Card>
        </TabsContent>
        <TabsContent value="sections">
          <Card>
            <CardHeader>
              <CardTitle>Sections</CardTitle>
              <CreateBusinessSectionForm business={business} />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    {}
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardContent className="text-muted-foreground text-sm">Page views are up 25% compared to last month.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="images">
          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
              <CardDescription>Generate and download your detailed reports. Export data in multiple formats for analysis.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">You have 5 reports ready and available to export.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="branches">
          <Card>
            <CardHeader>
              <CardTitle>Branches</CardTitle>
              <CardDescription>Manage your account preferences and options. Customize your experience to fit your needs.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">Configure notifications, security, and themes.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="socials">
          <Card>
            <CardHeader>
              <CardTitle>Socials</CardTitle>
              <CardDescription>Manage your account preferences and options. Customize your experience to fit your needs.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">Configure notifications, security, and themes.</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}

ShowBusiness.layout = (page) => <AdminLayout children={page} />;
