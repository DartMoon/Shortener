import { Metadata } from 'next';
import { ReactNode } from 'react';
import { METADATA } from '@/constants/metadata';

type Props = { children: ReactNode };

export const metadata: Metadata = {
  ...METADATA.privacy,
};

const PrivacyPolicyLayout = ({ children }: Readonly<Props>) => {
  return <>{children}</>;
};

export default PrivacyPolicyLayout;
