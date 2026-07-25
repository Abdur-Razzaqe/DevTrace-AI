import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-muted-foreground mt-2 text-sm">Sign in to your DevTrace AI account.</p>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-sm">Login form will be added next.</p>
      </CardContent>
    </Card>
  );
}
