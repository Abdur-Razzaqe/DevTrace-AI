import { LucideIcon } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export function StatsCard({ title, value, icon: Icon }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm">{title}</p>

          <Icon className="text-primary h-5 w-5" />
        </div>

        <h2 className="mt-4 text-3xl font-bold">{value}</h2>
      </CardContent>
    </Card>
  );
}
