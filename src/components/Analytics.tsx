'use client';

import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

const Analytics = () => {
  const cookiesAccepted =
    typeof window !== 'undefined' &&
    localStorage.getItem('cookies_accepted') === 'true';

  if (!cookiesAccepted) return null;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id='ga-init' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
};

export default Analytics;
