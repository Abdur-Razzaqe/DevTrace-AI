'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { signIn, signUp } from '@/lib/auth-client';
import { registerSchema, type RegisterInput } from '@/schemas/auth.schema';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: RegisterInput) => {
    try {
      const { error } = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (error) {
        toast.error(error.message ?? 'Registration failed');
        return;
      }

      toast.success('Account created successfully');

      router.push('/dashboard');
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  const handleGithubSignUp = async () => {
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
      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Full Name
        </label>

        <Input id="name" placeholder="John Doe" autoComplete="name" {...register('name')} />

        {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>

        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          autoComplete="email"
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
          placeholder="********"
          autoComplete="new-password"
          {...register('password')}
        />

        {errors.password && <p className="text-destructive text-sm">{errors.password.message}</p>}
      </div>

      {/* Email Register */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Creating account...' : 'Create Account'}
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

      {/* GitHub */}
      <Button type="button" variant="outline" className="w-full" onClick={handleGithubSignUp}>
        Continue with GitHub
      </Button>
    </form>
  );
}
