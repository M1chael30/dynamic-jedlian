import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, router } from '@inertiajs/react';
import { TrashIcon } from 'lucide-react';
import CreateBusinessBranchForm from '../../../components/components-admin-business-management/create-business-branch-form';
import CreateBusinessSectionForm from '../../../components/components-admin-business-management/create-business-section-form';
import CreateBusinessSocialForm from '../../../components/components-admin-business-management/create-business-social-form';
import EditBusinessSectionForm from '../../../components/components-admin-business-management/edit-business-section-form';
import EditBusinessSocialForm from '../../../components/components-admin-business-management/edit-business-social-form';
import { Item, ItemActions, ItemContent, ItemDescription } from '../../../components/ui/item';
import AdminLayout from '../../../layouts/admin-layout';
import { toast } from 'sonner';
import EditBusinessBranchForm from '../../../components/components-admin-business-management/edit-businesses-branch-form';

export default function ShowBusiness({ business }) {
  const sections = business.business_sections;
  const socials = business.business_socials;
  const branches = business.business_branches;
  const images = business.business_images;

  function handleDeleteSocial(id) {
    if (confirm('Are you sure you want to delete? ')) {
      router.delete(route('business.delete.social', id), {
        preserveScroll: true,
        onSuccess: () => {
          toast.success('Business social deleted successfully');
        },
      });
    }
  }

  function handleDeleteSection(id) {
    if (confirm('Are you sure you want to delete? ')) {
      router.delete(route('business.delete.section', id), {
        preserveScroll: true,
        onSuccess: () => {
          toast.success('Business section deleted successfully');
        },
      });
    }
  }

  function handleDeleteBranch(id) {
    if (confirm('Are you sure you want to delete? ')) {
      router.delete(route('business.delete.branch', id), {
        preserveScroll: true,
        onSuccess: () => {
          toast.success('Business branch deleted successfully');
        },
      });
    }
  }

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
              <CardAction>
                <CreateBusinessSectionForm key={business.id} business={business} />
              </CardAction>
            </CardHeader>
            <CardContent className="space-y-4">
              {sections.map((section, index) => (
                <Item key={index} variant="outline" size="sm">
                  <ItemContent>
                    <ItemDescription>{section?.title}</ItemDescription>
                    <ItemDescription>{section?.content}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    {/* TODO */}
                    <Button variant={'ghost'} className={'text-destructive-foreground'} onClick={() => handleDeleteSection(section?.id)}>
                      <TrashIcon className="size-4" /> Delete
                    </Button>
                    <Button variant={'ghost'} asChild>
                      <EditBusinessSectionForm key={business.id} section={section} />
                    </Button>
                  </ItemActions>
                </Item>
              ))}
            </CardContent>
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
              <CardAction>
                <CreateBusinessBranchForm key={business.id} business={business} />
              </CardAction>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
               <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Platform</TableHead>
                    <TableHead>Page URL</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {branches.map((branch, index) => (
                    <TableRow key={index}>
                      <TableCell>{branch.address}</TableCell>
                      <TableCell>{branch.google_map_embed}</TableCell>
                      <TableCell className="space-x-3">
                        <EditBusinessBranchForm key={branch.id} branch={branch} />
                        <Button onClick={(e) => handleDeleteBranch(branch.id)}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="socials">
          <Card>
            <CardHeader>
              <CardTitle>Socials</CardTitle>
              <CardAction>
                <CreateBusinessSocialForm key={business.id} business={business} />
              </CardAction>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Platform</TableHead>
                    <TableHead>Page URL</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {socials.map((social, index) => (
                    <TableRow key={index}>
                      <TableCell>{social.platform_name}</TableCell>
                      <TableCell>{social.url}</TableCell>
                      <TableCell className="space-x-3">
                        <EditBusinessSocialForm key={social.id} social={social} />
                        <Button onClick={(e) => handleDeleteSocial(social.id)}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}

ShowBusiness.layout = (page) => <AdminLayout children={page} />;
