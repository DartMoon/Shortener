'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/context/theme';
import { NextUIProvider } from '@nextui-org/react';

type Props = { children: ReactNode };

export function Providers({ children }: Readonly<Props>) {
  return (
    <NextUIProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </NextUIProvider>
  );
}
