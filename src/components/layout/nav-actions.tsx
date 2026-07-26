'use client';

import { Bell, LayoutDashboard, LogOut, Settings, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { ThemeToggle } from '@/components/common/theme-toggle';
import { signOut, useSession } from '@/lib/auth-client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function NavActions() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const initial = session?.user?.name?.charAt(0).toUpperCase() ?? 'U';

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
          <User className="h-5 w-5 animate-pulse" />
        </Button>
      ) : session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="icon" className="rounded-full p-0">
              <Avatar className="h-9 w-9">
                <AvatarImage src={session.user.image ?? ''} alt={session.user.name ?? 'User'} />
                <AvatarFallback>{initial}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="font-medium">{session.user.name ?? 'User'}</span>

                <span className="text-muted-foreground text-xs">{session.user.email}</span>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => router.push('/dashboard')}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => router.push('/settings')}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button onClick={() => router.push('/login')}>Login</Button>
      )}
    </div>
  );
}
