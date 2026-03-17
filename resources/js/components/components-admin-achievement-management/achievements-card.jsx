import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Item, ItemActions, ItemContent, ItemDescription } from '../ui/item';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { AchievementDropdownMenu } from './achievement-dropdown-menu';
import EditDescriptionForm from './edit-description-form';

export default function AchievementsCard({ achievement }) {
  function handleDelete(id) {
    if (confirm('Are you sure you want to delete? ')) {
      router.delete(route('achievement.delete.description', id), {
        preserveScroll: true,
        onSuccess: () => {
          toast.success('Achivement description deleted successfully');
        },
      });
    }
  }

  function handleVisibility() {
    router.put(route('achievement.update.visibility', achievement?.id), {}, { preserveScroll: true });
  }

  return (
    <Card>
      <CardHeader className={'space-y-4'}>
        <CardTitle className={'text-lg'}>Achievement: {achievement?.title}</CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-2">
            <Switch id="is_visible" className={'cursor-pointer'} checked={achievement?.is_visible} onCheckedChange={handleVisibility} />
            <Label htmlFor="is_visible">Visible to public website?</Label>
          </div>
        </CardDescription>
        <CardAction className={'flex items-center space-x-3'}>
          <AchievementDropdownMenu achievement={achievement} />
        </CardAction>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        {achievement?.achievement_descriptions.map((description, index) => (
          <Item key={index} variant="outline" size="sm">
            <ItemContent>
              <ItemDescription>{description?.description_text}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant={'link'} className={'text-destructive-foreground'} onClick={() => handleDelete(description?.id)}>
                Delete
              </Button>
              <Button variant={'ghost'} asChild>
                <EditDescriptionForm key={description?.id} description={description} />
              </Button>
            </ItemActions>
          </Item>
        ))}
          <div className="bg-muted aspect-video w-full overflow-hidden rounded-xl">
            <img src={`/storage/${achievement?.achievement_image.image_filename}`} alt="achievement imge" className="h-full w-full object-center" />
          </div>
      </CardContent>
    </Card>
  );
}
