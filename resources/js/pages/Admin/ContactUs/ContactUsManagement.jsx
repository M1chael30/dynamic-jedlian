import { Head, Link } from "@inertiajs/react";
import AdminLayout from "../../../layouts/admin-layout";
import { Button } from "../../../components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import ContactUsEditContentForm from "../../../components/components-admin-contact-us-management/edit-content-form";

export default function ContactUsManagement({ contactUsData }) {
 return (
  <>
   <Head title="Manage Contact Us" />
   <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
    <Button asChild>
     <Link href={route('admin.index')}>Back</Link>
    </Button>
    <div className="flex items-center justify-between">
     <h1 className='text-2xl'>Manage Contact Us</h1>
    </div>

    {
     contactUsData.map((item, index) => (
      <Card key={index}>
       <CardHeader>
        <CardTitle className={'text-lg'}>
         {item?.title}
        </CardTitle>
        <CardAction>
         <ContactUsEditContentForm key={item?.id} item={item} />
        </CardAction>
       </CardHeader>
       <CardContent>
        {
         item?.id === 4 && (
          <div className="aspect-video w-full rounded-xl bg-muted overflow-hidden">
           <iframe
            src={`https://www.google.com/maps/embed?pb=${item?.content}`}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            x="true"
           ></iframe>
          </div>
         )
        }
        <CardDescription className={'truncate'}>{item?.id !== 4 && item?.content}</CardDescription>
       </CardContent>
      </Card>
     ))
    }
   </section>
  </>
 )
}

ContactUsManagement.layout = (page) => <AdminLayout children={page} />;