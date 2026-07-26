import { redirect } from 'next/navigation';

import { getSession } from '@/lib/session';

import { RegisterForm } from '@/components/forms/register-form';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const session = await getSession();

if (session) {
  redirect('/dashboard');
}

export default function RegisterPage() {
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
