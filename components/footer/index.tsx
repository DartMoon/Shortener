import React from 'react';
import Link from 'next/link';
import { paths } from '@/routes/path';

const Footer = () => {
  return (
    <footer className="general_padding mt-auto">
      <div className="mb-6 sm:mb-0 sm:flex sm:justify-between">
        <p>Copyright © 2024</p>
        <p>
          <Link href={paths.privacyPolicy}>Privacy/Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
