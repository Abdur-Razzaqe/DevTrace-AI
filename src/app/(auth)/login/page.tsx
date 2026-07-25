import { LoginForm } from '@/components/forms/login-form';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Welcome Back</h1>

        <p className="text-muted-foreground text-sm">Sign in to continue.</p>
      </CardHeader>

      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
