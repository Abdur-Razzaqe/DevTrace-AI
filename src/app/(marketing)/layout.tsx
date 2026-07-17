import { ReactNode } from 'react';

import { Navbar } from '@/components/layout/navbar';

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
}
