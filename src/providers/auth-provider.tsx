'use client';

import { useSession } from '@/lib/auth-client';

export function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useSession();

  return <>{children}</>;
}
