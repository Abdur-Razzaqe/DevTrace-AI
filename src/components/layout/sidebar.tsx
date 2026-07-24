'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarNavItems } from '@/config/navigation';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-background hidden h-[calc(100vh-64px)] w-64 shrink-0 border-r lg:block">
      <nav className="flex flex-col gap-2 p-4">
        {sidebarNavItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
                active
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
