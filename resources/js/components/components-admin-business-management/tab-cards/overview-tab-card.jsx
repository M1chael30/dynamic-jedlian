import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';

export default function OverviewTabsCard({ business }) {
  return (
    <TabsContent value="overview">
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            {business.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </TabsContent>
  );
}
