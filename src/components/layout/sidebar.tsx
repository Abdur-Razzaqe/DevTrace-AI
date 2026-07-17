'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarNavItems } from '@/config/navigation';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-background hidden w-64 border-r lg:block">
      <nav className="space-y-2 p-4">
        {sidebarNavItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                active ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
