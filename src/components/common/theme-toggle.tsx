'use client';

import dynamic from 'next/dynamic';

const ThemeToggleContent = dynamic(() => import('./theme-toggle-content'), {
  ssr: false,
});

export function ThemeToggle() {
  return <ThemeToggleContent />;
}
