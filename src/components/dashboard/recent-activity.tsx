import { Card, CardContent, CardHeader } from '@/components/ui/card';

const activities = [
  {
    title: 'Repository Connected',
    description: 'DevTrace AI repository was connected successfully.',
    time: '2 hours ago',
  },
  {
    title: 'Resume Reviewed',
    description: 'AI completed resume analysis.',
    time: 'Yesterday',
  },
  {
    title: 'Interview Started',
    description: 'Frontend mock interview created.',
    time: '2 days ago',
  },
];

export function RecentActivity() {
  return (
    <section className="bg-card rounded-xl border p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">Recent Activity</h2>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div key={activity.title} className="border-primary border-l-2 pl-4">
            <h3 className="font-medium">{activity.title}</h3>

            <p className="text-muted-foreground text-sm">{activity.description}</p>

            <span className="text-muted-foreground text-xs">{activity.time}</span>
          </div>
        ))}

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Recent Activity</h2>
          </CardHeader>

          <CardContent>...</CardContent>
        </Card>
      </div>
    </section>
  );
}
