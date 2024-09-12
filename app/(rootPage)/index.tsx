'use client';
import React, { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useTheme } from '@/context/theme';

type Props = { children: ReactNode };

const RootPage = ({ children }: Readonly<Props>) => {
  const { themeMode } = useTheme();

  return (
    <div className={`flex min-h-screen flex-col bg-background text-foreground ${themeMode}`}>
      <Header />
      <main className="general_padding m-auto flex flex-col justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default RootPage;
