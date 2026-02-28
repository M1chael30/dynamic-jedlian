import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import UploadImageForm from '../../components-admin-image-management/upload-image-form';


export default function ImagesTabsCard({ business, images }) {
  return (
    <TabsContent value="images">
    <Card>
      <CardHeader className={'space-y-4'}>
        <CardTitle>
          Images
        </CardTitle>
        <CardAction>
          <UploadImageForm/>
        </CardAction>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <div className="aspect-video w-full rounded-xl bg-muted overflow-hidden">
          <img
            // src={`/storage/${achievement?.achievement_image.image_filename}`}
             alt="achievement imge" className="object-center h-full w-full" />
        </div>
      </CardContent>
    </Card>
    </TabsContent>
  );
}
