import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/contexts/providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import CookieBanner from '@/components/CookieBanner';

import Head from 'next/head';

export const metadata: Metadata = {
  metadataBase: new URL('https://emrahisovic.pages.dev'),
  title: {
    default: 'Emrah Isović | Front-End Developer',
    template: '%s | Emrah Isović',
  },
  description:
    "I'm Emrah Isović, a front-end developer focused on building clear, accessible and maintainable web interfaces using React and TypeScript.",
  keywords: [
    'Emrah Isović',
    'Emrah Isovic',
    'Frontend Developer',
    'React Developer',
    'TypeScript Developer',
    'Web Developer Portfolio',
    'Portfolio',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  authors: [{ name: 'Emrah Isović', url: 'https://emrahisovic.pages.dev' }],
  openGraph: {
    title: 'Emrah Isović | Front-End Developer',
    description:
      'Front-end developer focused on building clear, accessible and maintainable web interfaces using React and TypeScript.',
    url: 'https://emrahisovic.pages.dev',
    siteName: 'Emrah Isović Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emrah Isović | Front-End Developer',
    description:
      'Front-end developer focused on building clear, accessible and maintainable web interfaces using React and TypeScript.',
    creator: '',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google:
      'google-site-verification=XAqbgSYmHzD11dmleOnCJImGX2X0dqUTMxf3WG09XNI',
  },
};

const interFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bokor',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      data-scroll-behavior='smooth'
      className={interFont.variable}
    >
      <head>
        <Head>
          <meta name='apple-mobile-web-app-title' content='Emrah Isović' />
          <link rel='manifest' href='/site.webmanifest' />
        </Head>
      </head>
      <body
        suppressHydrationWarning
        className='font-main min-h-screen flex flex-col'
      >
        <Providers>
          <Header />
          <main className='bg-[var(--bg-main-light)] dark:bg-[var(--bg-main-dark)] flex-grow flex flex-col justify-center'>
            <Analytics />
            <CookieBanner />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
