import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { router } from '@inertiajs/react';
import UploadImageForm from '../../components-admin-business-management/upload-image-form';
import { Button } from '../../ui/button';
import { toast } from 'sonner';

export default function ImagesTabsCard({ business, images }) {
  function handleDeleteImage(id) {
    if (confirm('Are you sure you want to delete?')) {
      router.delete(route('business.delete.image', id), {
        preserveScroll: true,
        only: ['business'],
        onSuccess: () => {
          toast.success('Image deleted successfully');
        },
      });
    }
  }

  return (
    <TabsContent value="images">
      <Card className="bg-background border-0">
        <CardHeader className={'space-y-4'}>
          <CardTitle>Images</CardTitle>
          <CardAction>
            <UploadImageForm images={images} business={business} />
          </CardAction>
        </CardHeader>
        <CardContent className={'space-y-4 px-0'}>
          {images.map((image, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="capitalize">{image.image_type == 'circle_banner' ? 'Circle Banner' : image.image_type}</CardTitle>
                <CardAction>
                  <Button
                    variant="link"
                    className={'text-destructive-foreground'}
                    onClick={() => handleDeleteImage(image?.id)}
                  >
                    Delete
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="bg-muted aspect-video w-full overflow-hidden rounded-xl">
                  <img
                    src={`/storage/${image.image_path}`}
                    alt="business image"
                    className="h-full w-full object-center object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
