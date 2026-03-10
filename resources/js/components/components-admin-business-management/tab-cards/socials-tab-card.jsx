import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '../../ui/button';
import CreateBusinessSocialForm from '../create-business-social-form';
import EditBusinessSocialForm from '../edit-business-social-form';
import { Link, router } from '@inertiajs/react';
import { toast } from 'sonner';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '../../ui/item';
import { Badge } from '../../ui/badge';

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
      <Card className='bg-background border-none'>
        <CardHeader>
          <CardTitle>Socials</CardTitle>
          <CardAction>
            <CreateBusinessSocialForm key={business.id} business={business} socials={socials} />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0 space-y-3">
          {socials.map((social, index) => (
            <Item key={index} variant="outline" size="sm">
              <ItemContent>
                <ItemTitle className={'capitalize'}>{social.platform_name}</ItemTitle>
                <ItemDescription>
                  <Badge variant={'outline'}>{social.url} </Badge>
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <EditBusinessSocialForm key={social.id} social={social} />
                <Button
                  variant={'link'}
                  className={'text-destructive-foreground'}
                  onClick={(e) => handleDeleteSocial(social.id)}
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
