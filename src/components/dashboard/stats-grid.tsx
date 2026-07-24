import { FolderGit2, GitCommit, Brain, TrendingUp } from 'lucide-react';

import { StatsCard } from './stats-card';

export function StatsGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard title="Repositories" value="12" icon={FolderGit2} />

      <StatsCard title="Commits" value="1,248" icon={GitCommit} />

      <StatsCard title="AI Reviews" value="42" icon={Brain} />

      <StatsCard title="Productivity" value="92%" icon={TrendingUp} />
    </section>
  );
}
