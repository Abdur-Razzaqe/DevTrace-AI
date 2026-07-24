import { AlertTriangle } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = 'Something went wrong',
  description = 'Please try again later.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border py-16 text-center">
      <AlertTriangle className="text-destructive mb-5 h-12 w-12" />

      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="text-muted-foreground mt-2 mb-6 max-w-sm">{description}</p>

      {onRetry && <Button onClick={onRetry}>Retry</Button>}
    </div>
  );
}
