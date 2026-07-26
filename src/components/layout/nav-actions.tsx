import { Bell, User } from 'lucide-react';

import { ThemeToggle } from '@/components/common/theme-toggle';
import { Button } from '@/components/ui/button';

export function NavActions() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>

      <ThemeToggle />

      <Button variant="ghost" size="icon">
        <User className="h-5 w-5" />
      </Button>
    </div>
  );
}
