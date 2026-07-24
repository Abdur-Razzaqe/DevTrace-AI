import Link from 'next/link';

export function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-primary text-primary-foreground flex h-9 w-9 items-center justify-center rounded-xl text-lg font-bold">
        D
      </div>

      <div className="hidden sm:block">
        <h2 className="text-lg font-bold">DevTrace AI</h2>
        <p className="text-muted-foreground text-xs">Developer Productivity</p>
      </div>
    </Link>
  );
}
