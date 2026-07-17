import { NavActions } from './nav-actions';
import { NavLinks } from './nav-links';
import { NavLogo } from './nav-logo';

export function Navbar() {
  return (
    <header className="bg-background/80 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <NavLogo />

        <NavLinks />

        <NavActions />
      </div>
    </header>
  );
}
