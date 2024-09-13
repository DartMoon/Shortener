'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/context/theme';
import { NextUIProvider } from '@nextui-org/react';

import { ShortenerProvider } from './feature/form/store';

type Props = { children: ReactNode };

export function Providers({ children }: Readonly<Props>) {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <ShortenerProvider>{children}</ShortenerProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
