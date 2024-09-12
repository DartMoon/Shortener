'use client';
import React, { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useTheme } from '@/context/theme';

type Props = { children: ReactNode };

const RootPage = ({ children }: Readonly<Props>) => {
  const { themeMode } = useTheme();

  return (
    <div className={`flex h-screen flex-col bg-background text-foreground ${themeMode}`}>
      <Header />
      <main className="general_padding flex h-full flex-col justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default RootPage;
