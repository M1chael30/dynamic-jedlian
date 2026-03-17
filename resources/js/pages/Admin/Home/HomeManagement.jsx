import { Head, Link } from '@inertiajs/react';
import { Button } from '../../../components/ui/button';
import AdminLayout from '../../../layouts/admin-layout';
import HomeStatsForm from '../../../components/components-admin-home-stats/edit-home-stats-form';
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';

export default function HomeManagement({ stats }) {
  console.log(stats);
  return (
    <>
      <Head title="Manage Home" />
      <section className="space-y-5 px-4 py-5 w-full mx-auto max-w-3xl">
        <Button asChild>
          <Link href={route('admin.index')}>Back</Link>
        </Button>
        <div className="flex items-center justify-between">
          <h1 className='text-2xl'>Manage Home</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className={'text-lg'}>
                  {stat?.title}
                </CardTitle>
                <CardAction>
                  <HomeStatsForm key={stat?.id} stat={stat} />
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className='text-3xl md:text-5xl'>
                  {stat?.stat}
                </p>
              </CardContent>
              <CardFooter>
                <p className='text-muted-foreground'>
                  {stat?.description}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

HomeManagement.layout = (page) => <AdminLayout children={page} />;
