'use client';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

import { paths } from '../paths';

export function useCustomRouter() {
  const router = useRouter();

  const routerMemo = useMemo(
    () => ({
      push: (href: string) => router.push(href),
      goBack: () => router.back(),
      goHome: () => router.push(paths.root),
    }),
    [router],
  );

  return routerMemo;
}
