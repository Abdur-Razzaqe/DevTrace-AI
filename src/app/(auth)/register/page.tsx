import { RegisterForm } from '@/components/forms/register-form';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
