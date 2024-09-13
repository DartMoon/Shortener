import React from 'react';
import Link from 'next/link';
import { paths } from '@/routes/paths';

const Footer = () => {
  return (
    <footer className="general_padding mt-auto">
      <div className="mb-6 flex justify-between sm:mb-0">
        <p>Copyright © 2024</p>
        <p>
          <Link href={paths.privacyPolicy}>Privacy/Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
