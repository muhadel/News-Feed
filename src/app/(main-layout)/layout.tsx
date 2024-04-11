'use client';

import { useIsMounted } from '@/hooks/use-is-mounted';
import MainLayout from '@/layouts/main-layout/main-layout';

type LayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: LayoutProps) {
  return <LayoutProvider>{children}</LayoutProvider>;
}

function LayoutProvider({ children }: LayoutProps) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }
  return <MainLayout>{children}</MainLayout>;
}
