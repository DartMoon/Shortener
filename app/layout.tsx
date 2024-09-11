import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { METADATA } from '@/constants/metadata';
import '@/styles/global.css';

import { Providers } from './providers';

type Props = { children: ReactNode };

export const metadata: Metadata = METADATA.root;

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground dark">
        <Providers>
          <div className="flex h-screen flex-col">
            <Header />
            <main className="general_padding flex h-full flex-col justify-center">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
