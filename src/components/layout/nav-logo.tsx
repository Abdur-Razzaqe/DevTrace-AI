import Link from 'next/link';

export function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-lg font-bold text-white">
        D
      </div>

      <span className="text-xl font-bold">DevTrace AI</span>
    </Link>
  );
}
