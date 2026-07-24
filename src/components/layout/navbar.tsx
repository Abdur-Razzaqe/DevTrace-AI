import { NavActions } from './nav-actions';
import { NavLogo } from './nav-logo';
import { NavSearch } from './nav-search';

export function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <NavLogo />

        <NavSearch />

        <NavActions />
      </div>
    </header>
  );
}
