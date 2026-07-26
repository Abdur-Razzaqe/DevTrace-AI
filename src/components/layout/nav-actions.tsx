'use client';

import { Bell, LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { ThemeToggle } from '@/components/common/theme-toggle';
import { signOut, useSession } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';

export function NavActions() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const handleSignOut = async () => {
    const { error } = await signOut();

    if (error) {
      toast.error(error.message ?? 'Failed to sign out.');
      return;
    }

    toast.success('Signed out successfully.');

    router.replace('/login');
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>

      <ThemeToggle />

      {isPending ? (
        <Button variant="ghost" size="icon" disabled>
          <User className="h-5 w-5" />
        </Button>
      ) : session?.user ? (
        <Button variant="ghost" onClick={handleSignOut} className="gap-2">
          <User className="h-4 w-4" />
          <span className="hidden md:inline">{session.user.name ?? 'User'}</span>
          <LogOut className="h-4 w-4" />
        </Button>
      ) : (
        <Button onClick={() => router.push('/login')}>Login</Button>
      )}
    </div>
  );
}
