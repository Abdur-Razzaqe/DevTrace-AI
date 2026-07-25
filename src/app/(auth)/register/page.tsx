import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="text-muted-foreground mt-2 text-sm">Create your DevTrace AI account.</p>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-sm">Registration form will be added next.</p>
      </CardContent>
    </Card>
  );
}
