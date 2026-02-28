import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '../../ui/button';
import CreateBusinessBranchForm from '../create-business-branch-form';
import EditBusinessBranchForm from '../edit-business-branch-form';
import ViewBusinessBranchCard from '../view-business-branch-card';

export default function BranchesTabsCard({ business, branches }) {

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
                <TableHead>Address</TableHead>
                {/* <TableHead>Page URL</TableHead> */}
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {branches.map((branch, index) => (
                <TableRow key={index}>
                  <TableCell>{branch.address}</TableCell>
                  {/* <TableCell>{branch.google_map_embed}</TableCell> */}
                  <TableCell className="space-x-3">
                    <ViewBusinessBranchCard branch={branch}/>
                    <EditBusinessBranchForm branch={branch} />
                    <Button onClick={(e) => handleDeleteBranch(branch.id)}>Delete</Button>
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
