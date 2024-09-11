import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { Providers } from './providers';
import './global.css';

type Props = { children: ReactNode };

export const metadata: Metadata = {
  title: 'Shortener: Shortening your way',
  description:
    'Carry big links in your pocket with Shortener, the URL minimizer. This app transforms cumbersome URLs into compact versions ideal for sharing and saving space. Navigate the web smoothly with Shortener',
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col bg-background text-foreground dark">
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
