import { Logo } from '@/components/common/logo';
import { ThemeToggle } from '@/components/common/theme-toggle';

export function Navbar() {
  return (
    <header className="bg-background border-b">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <Logo />

        <ThemeToggle />
      </div>
    </header>
  );
}
