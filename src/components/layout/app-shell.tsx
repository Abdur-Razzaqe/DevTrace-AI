import { ReactNode } from 'react';

import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
