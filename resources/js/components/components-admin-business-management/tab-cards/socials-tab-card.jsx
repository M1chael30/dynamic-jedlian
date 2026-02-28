import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '../../ui/button';
import CreateBusinessSocialForm from '../create-business-social-form';
import EditBusinessSocialForm from '../edit-business-social-form';

export default function SocialTabsCard({ business, socials }) {

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

  return (
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
  );
}
