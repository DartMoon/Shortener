'use client';
import React from 'react';
import Button from '@/components/button';
import { useCustomRouter } from '@/routes/hooks/useCustomRouter';

const PrivacyPolicyPage = () => {
  const { goHome } = useCustomRouter();

  return (
    <section className="flex flex-col items-center">
      <p className="mb-8 text-center">Coming soon...</p>
      <Button text="Go back" className="w-24" onClick={goHome} />
    </section>
  );
};

export default PrivacyPolicyPage;
