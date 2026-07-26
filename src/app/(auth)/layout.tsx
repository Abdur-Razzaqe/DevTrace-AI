import { redirect } from 'next/navigation';

import { getSession } from '@/lib/session';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className="bg-muted/30 flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md">{children}</div>
    </main>
  );
}
