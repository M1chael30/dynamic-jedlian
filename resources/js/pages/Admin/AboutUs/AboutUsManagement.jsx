import { Head, Link } from '@inertiajs/react';
import { Image } from 'lucide-react';
import AboutUsEditContentForm from '../../../components/components-admin-about-us-management/edit-content-form';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { Button } from '../../../components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import AdminLayout from '../../../layouts/admin-layout';
import { cn } from '../../../lib/utils';

export default function AboutUsManagement({ content }) {
  return (
    <>
      <Head title="Manage About Us" />
      <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
        <Button asChild>
          <Link href={route('admin.index')}>Back</Link>
        </Button>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Manage About Us</h1>
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
              {item.image_path && (
                <Avatar className={'size-20'}>
                  <AvatarImage src={`/storage/${item.image_path}`} className={cn((item.id === 1 || item.id === 2) && 'object-cover object-top')} />
                  <AvatarFallback>
                    <Image />
                  </AvatarFallback>
                </Avatar>
              )}
              {item.quote && <CardDescription>{item.quote}</CardDescription>}
              <CardDescription>{item.content}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}

AboutUsManagement.layout = (page) => <AdminLayout children={page} />;
