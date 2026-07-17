import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold tracking-tight">
      <span className="text-primary">Dev</span>
      <span>Trace</span>
      <span className="text-primary"> AI</span>
    </Link>
  );
}
