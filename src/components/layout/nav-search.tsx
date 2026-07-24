import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function NavSearch() {
  return (
    <Button variant="outline" className="text-muted-foreground hidden w-72 justify-between lg:flex">
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4" />
        <span>Search repositories...</span>
      </div>

      <kbd className="bg-muted rounded px-2 py-0.5 text-xs">⌘K</kbd>
    </Button>
  );
}
