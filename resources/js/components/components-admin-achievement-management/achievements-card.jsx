import { router } from "@inertiajs/react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Item, ItemActions, ItemContent, ItemDescription } from "../ui/item";
import { AchievementDropdownMenu } from "./achievement-dropdown-menu";
import { TrashIcon } from "lucide-react";
import { toast } from "sonner";
import EditDescriptionForm from "./edit-description-form";

export default function AchievementsCard({ achievement }) {
  function handleDelete(id) {
    if (confirm('Are you sure you want to delete? ')) {
      router.delete(route('achievement.delete.description', id), {
        preserveScroll: true,
        onSuccess: () => {
          toast.success('Achivement description deleted successfully');
        },
      })
    }
  }

  function handleVisibility() {
    router.put(route('achievement.update.visibility', achievement?.id), {}, { preserveScroll: true })
  }

  return (
    <Card>
      <CardHeader className={'space-y-4'}>
        <CardTitle className={'text-lg'}>
          Achievement: {achievement?.title}
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-2">
            <Switch
              id="is_visible"
              className={'cursor-pointer'}
              checked={achievement?.is_visible}
              onCheckedChange={handleVisibility} />
            <Label htmlFor="is_visible">
              Visible to public website?
            </Label>
          </div>
        </CardDescription>
        <CardAction className={'space-x-3 flex items-center'}>
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
              {/* TODO */}
              <Button
                variant={'ghost'}
                className={'text-destructive-foreground'}
                onClick={() => handleDelete(description?.id)}
              >
                <TrashIcon className="size-4" /> Delete
              </Button>
              <Button variant={'ghost'} asChild>
                <EditDescriptionForm key={description?.id} description={description} />
              </Button>
            </ItemActions>
          </Item>
        ))}
        <div className="aspect-video w-full rounded-xl bg-muted overflow-hidden">
          <img
            src={`/storage/${achievement?.achievement_image.image_filename}`} alt="achievement imge" className="object-center h-full w-full" />
        </div>
      </CardContent>
    </Card>
  )
}
