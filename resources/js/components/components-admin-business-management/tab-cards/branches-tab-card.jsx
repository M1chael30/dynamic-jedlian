import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '../../ui/button';
import CreateBusinessBranchForm from '../create-business-branch-form';
import EditBusinessBranchForm from '../edit-business-branch-form';
import ViewBusinessBranchCard from '../view-business-branch-card';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import { Item, ItemActions, ItemContent, ItemTitle } from '../../ui/item';

export default function BranchesTabsCard({ business, branches }) {

  function handleDeleteBranch(id) {
    if (confirm('Are you sure you want to delete? ')) {
      router.delete(route('business.delete.branch', id), {
        preserveScroll: true,
        only: ['business'],
        onSuccess: () => {
          toast.success('Business branch deleted successfully');
        },
      });
    }
  }

  return (
    <TabsContent value="branches">
      <Card className='bg-background border-none'>
        <CardHeader>
          <CardTitle className='capitalize'>{business.category}</CardTitle>
          <CardAction>
            <CreateBusinessBranchForm key={business.id} business={business} />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          {branches.map((branch, index) => (
            <Item key={index} variant="outline" size="sm">
              <ItemContent>
                <ItemTitle>{branch.address}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ViewBusinessBranchCard branch={branch} />
                <EditBusinessBranchForm branch={branch} />
                <Button
                  variant={'link'}
                  className={'text-destructive-foreground'}
                  onClick={() => handleDeleteBranch(branch.id)}
                >
                  Delete
                </Button>
              </ItemActions>
            </Item>

          ))}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
