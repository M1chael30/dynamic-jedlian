import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Item, ItemContent, ItemActions, ItemDescription, ItemTitle } from '@/components/ui/item';


import EditBusinessSectionForm from '../edit-business-section-form';
import CreateBusinessSectionForm from '../create-business-section-form';
import { Button } from '../../ui/button';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';


export default function SectionsTabCard({ sections, business }) {

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

  return (
    <TabsContent value="sections">
      <Card className='bg-background border-none'>
        <CardHeader>
          <CardTitle>Sections</CardTitle>
          <CardAction>
            <CreateBusinessSectionForm key={business.id} business={business} />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4 p-0">
          {sections.map((section, index) => (
            <Item key={index} variant="outline" size="sm">
              <ItemContent>
                <ItemTitle>{section?.title}</ItemTitle>
                <ItemDescription>{section?.content}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button
                  variant={'link'}
                  className={'text-destructive-foreground'}
                  onClick={() => handleDeleteSection(section?.id)}
                >
                  Delete
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
  )
}
