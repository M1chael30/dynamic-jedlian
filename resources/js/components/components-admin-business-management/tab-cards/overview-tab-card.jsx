import { Card, CardDescription, CardHeader, CardTitle, CardAction } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TabsContent } from '@/components/ui/tabs';
import EditBusinessForm from '../edit-business-form';

export default function OverviewTabsCard({ business }) {
  return (
    <TabsContent value="overview">
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardDescription>
          <p className="px-3">{business.description}</p>
        </CardDescription>
      </Card>
    </TabsContent>
  );
}
