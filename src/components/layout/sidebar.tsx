import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="hidden h-[calc(100vh-64px)] w-64 border-r lg:block">
      <nav className="space-y-2 p-4">
        <Link href="/">Dashboard</Link>

        <br />

        <Link href="/">Repositories</Link>

        <br />

        <Link href="/">AI Resume</Link>

        <br />

        <Link href="/">AI Interview</Link>

        <br />

        <Link href="/">Settings</Link>
      </nav>
    </aside>
  );
}
