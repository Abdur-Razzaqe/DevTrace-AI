import Link from 'next/link';

import { ThemeToggle } from '@/components/common/theme-toggle';
import { Button } from '@/components/ui/button';

export function NavActions() {
  return (
    <div className="flex items-center gap-3">
      <ThemeToggle />

      <Link href="https://github.com/Abdur-Razzaqe/DevTrace-AI" target="_blank">
        <Button variant="outline">GitHub</Button>
      </Link>

      <Button>Sign In</Button>
    </div>
  );
}
