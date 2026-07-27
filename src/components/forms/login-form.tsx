'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { signIn } from '@/lib/auth-client';
import { loginSchema, type LoginInput } from '@/schemas/auth.schema';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      const { error } = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (error) {
        toast.error(error.message ?? 'Invalid email or password');
        return;
      }

      toast.success('Welcome back!');

      router.replace('/dashboard');
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await signIn.social({
        provider: 'github',
        callbackURL: '/dashboard',
      });
    } catch (error) {
      console.error(error);
      toast.error('GitHub sign in failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>

        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="john@example.com"
          {...register('email')}
        />

        {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>

        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="********"
          {...register('password')}
        />

        {errors.password && <p className="text-destructive text-sm">{errors.password.message}</p>}
      </div>

      {/* Email Login */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Signing in...' : 'Sign In'}
      </Button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background text-muted-foreground px-2">Or continue with</span>
        </div>
      </div>

      {/* GitHub Login */}
      <Button type="button" variant="outline" className="w-full" onClick={handleGithubSignIn}>
        Continue with GitHub
      </Button>
    </form>
  );
}
