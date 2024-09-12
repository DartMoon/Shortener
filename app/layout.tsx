import '@/styles/global.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { METADATA } from '@/constants/metadata';

import RootPage from './(rootPage)';
import { Providers } from './providers';

type Props = { children: ReactNode };

export const metadata: Metadata = {
  ...METADATA.root,
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <RootPage>{children}</RootPage>
        </Providers>
      </body>
    </html>
  );
}
