import Link from 'next/link';

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/docs',
    label: 'Docs',
  },
  {
    href: '/pricing',
    label: 'Pricing',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
];

export function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
