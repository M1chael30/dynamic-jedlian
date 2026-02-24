import { Head } from "@inertiajs/react";
import AdminLayout from "../../../layouts/admin-layout";
import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter, CardAction } from '../../../components/ui/card';
import { Button } from "../../../components/ui/button";
import AboutUsEditContentForm from "../../../components/components-admin-about-us-management/edit-content-form";

export default function AboutUsManagement({content}) {
  console.log(content)
  return (
    <>
      <Head title="Manage About Us" />
      <section className="space-y-5 px-4 py-5 w-full mx-auto max-w-5xl">
            {content.map((item, index)=>(
              <Card key={index}>
                <CardHeader className={`items-center`}>
                  <CardTitle>{item.title}</CardTitle>
                  <CardAction>
                    <AboutUsEditContentForm content={item}/>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.content}</CardDescription>
                </CardContent>
              </Card>
            ))}

      </section>
    </>
  );
}

AboutUsManagement.layout = (page) => <AdminLayout children={page} />;
