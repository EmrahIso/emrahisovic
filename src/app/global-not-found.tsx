import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import Link from 'next/link';

import { Providers } from '@/contexts/providers';

import ParticlesBackground from '@/components/ParticlesBackground';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Emrah Isović Portfolio',
  description:
    'The page you are looking for does not exist. Return to the homepage of Emrah Isović Portfolio.',
  authors: [{ name: 'Emrah Isović', url: 'https://emrahisovic.vercel.app' }],
};

const interFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bokor',
});

const GlobalNotFound: React.FC = () => {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      data-scroll-behavior='smooth'
      className={interFont.variable}
    >
      <body
        suppressHydrationWarning
        className='font-main min-h-screen flex flex-col'
      >
        <Providers>
          <div className='fixed inset-0 z-11 h-screen w-screen'>
            <ParticlesBackground />
          </div>
          <div className='container sm:max-w-[640px] min-h-screen flex flex-col justify-center items-baseline mx-auto px-4 z-12 py-8 bg-transparent'>
            <h1 className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent sm:text-8xl text-6xl font-semibold inline-block'>
              Not Found
            </h1>
            <p className='text-neutral-700 dark:text-neutral-50 mt-12 sm:text-4xl text-2xl font-regular sm:leading-13 leading-9'>
              Sorry, there is nothing at <br /> this URL.
            </p>
            <Link
              href='/'
              className='bg-neutral-800 inline-block px-4 py-3 sm:mt-18 mt-10 rounded-lg gap-7 hover:scale-105 shadow-2xs transition-transform duration-150 text-xl text-neutral-200'
            >
              Go back home
            </Link>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default GlobalNotFound;
