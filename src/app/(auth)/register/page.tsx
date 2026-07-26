import { redirect } from 'next/navigation';

import { getSession } from '@/lib/session';

import { RegisterForm } from '@/components/forms/register-form';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export default async function RegisterPage() {
  const session = await getSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Create Account</h1>

        <p className="text-muted-foreground text-sm">Create your DevTrace AI account.</p>
      </CardHeader>

      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  );
}
