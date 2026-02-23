import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import CreateTitleForm from './create-title-form';
import AchievementsCard from './achievements-card';

export default function PeriodsCard({ period }) {
  return (
    <Card className={'bg-background border-0 shadow-none'}>
      <CardHeader>
        <CardTitle className={'text-xl'}>Year: {period?.year}</CardTitle>
        <CardAction className={'space-x-3'}>
          <CreateTitleForm key={period?.id} period={period} />
        </CardAction>
      </CardHeader>
      <CardContent className={'p-0'}>
        <div className="space-y-6">
          {period?.achievements.map((achievement, index) => (
            <AchievementsCard key={index} achievement={achievement} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
