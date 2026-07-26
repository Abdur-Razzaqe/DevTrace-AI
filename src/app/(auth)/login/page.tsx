import { redirect } from 'next/navigation';

import { getSession } from '@/lib/session';

import { LoginForm } from '@/components/forms/login-form';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export default async function LoginPage() {
  const session = await getSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Welcome Back</h1>

        <p className="text-muted-foreground text-sm">Sign in to your DevTrace AI account.</p>
      </CardHeader>

      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
