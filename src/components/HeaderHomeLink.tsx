'use client';

import Link from 'next/link';
import { event } from '@/lib/gtag';

const HeaderHomeLink = () => {
  return (
    <Link
      href='/'
      className='animated-link dark:after:bg-neutral-50 after:bg-neutral-950'
      onClick={() => event('nav_click', { page: 'Home' })}
    >
      Emrah Isović.
    </Link>
  );
};

export default HeaderHomeLink;
