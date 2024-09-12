'use client';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

export function useCustomRouter() {
  const router = useRouter();

  const routerMemo = useMemo(
    () => ({
      push: (href: string) => router.push(href),
      goBack: () => router.back(),
    }),
    [router],
  );

  return routerMemo;
}
