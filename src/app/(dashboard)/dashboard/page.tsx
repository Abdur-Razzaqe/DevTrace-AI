import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { StatsGrid } from '@/components/dashboard/stats-grid';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <StatsGrid />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        <QuickActions />
      </div>
    </div>
  );
}
