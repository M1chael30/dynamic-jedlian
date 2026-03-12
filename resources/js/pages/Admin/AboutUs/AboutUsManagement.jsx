import { Head, Link } from "@inertiajs/react";
import AdminLayout from "../../../layouts/admin-layout";
import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardAction } from '../../../components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../../../components/ui/avatar';
import { Button } from "../../../components/ui/button";
import AboutUsEditContentForm from "../../../components/components-admin-about-us-management/edit-content-form";
import { Image } from "lucide-react";
import { cn } from "../../../lib/utils";

export default function AboutUsManagement({ content }) {
  return (
    <>
      <Head title="Manage About Us" />
      <section className="space-y-5 px-4 py-5 w-full mx-auto max-w-3xl">
        <Button asChild>
          <Link href={route('admin.index')}>Back</Link>
        </Button>
        <div className="flex items-center justify-between">
          <h1 className='text-2xl'>Manage About Us</h1>
        </div>
        {content.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className={'text-lg'}>{item.title}</CardTitle>
              <CardDescription>{item.position}</CardDescription>
              <CardAction>
                <AboutUsEditContentForm key={item?.id} content={item} />
              </CardAction>
            </CardHeader>
            <CardContent className={'space-y-4'}>
              {
                item.image_path &&
                <Avatar className={'size-20'}>
                  <AvatarImage
                    src={`/storage/${item.image_path}`}
                    className={cn(
                      (item.id === 1 || item.id === 2) && 'object-top object-cover'
                    )}
                  />
                  <AvatarFallback>
                    <Image />
                  </AvatarFallback>
                </Avatar>
              }
              <CardDescription>{item.content}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}

AboutUsManagement.layout = (page) => <AdminLayout children={page} />;
