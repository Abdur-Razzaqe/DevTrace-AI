import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border py-16 text-center">
      <Inbox className="text-muted-foreground mb-5 h-12 w-12" />

      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="text-muted-foreground mt-2 max-w-sm">{description}</p>
    </div>
  );
}
