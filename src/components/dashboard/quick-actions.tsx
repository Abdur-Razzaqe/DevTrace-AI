import { Bot, FileText, FolderGit2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const actions = [
  {
    title: 'Connect Repository',
    icon: FolderGit2,
  },
  {
    title: 'Resume Review',
    icon: FileText,
  },
  {
    title: 'Start Interview',
    icon: Bot,
  },
];

export function QuickActions() {
  return (
    <section className="bg-card rounded-xl border p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">Quick Actions</h2>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Button key={action.title} variant="outline" className="w-full justify-start gap-3">
              <Icon className="h-5 w-5" />

              {action.title}
            </Button>
          );
        })}
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
