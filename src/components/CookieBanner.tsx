'use client';

import { useEffect, useState } from 'react';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('cookies_accepted') !== 'true') {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setVisible(false);
    window.gtag &&
      window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  };

  const handleDecline = () => {
    localStorage.setItem('cookies_accepted', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className='fixed bottom-4 left-4 right-4 bg-neutral-50 dark:bg-neutral-900 border-1 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-sm p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-lg z-50 opacity-0 animate-[cookiesIn_0.6s_ease-out_forwards_0.175s]'>
      <p className='text-sm text-center md:text-left'>
        This website uses cookies to collect analytical data and improve user
        experience. Do you accept the use of analytics cookies?
      </p>
      <div className='flex gap-2'>
        <button
          onClick={handleDecline}
          className='px-4 py-1.5 rounded-md text-sm hover:bg-slate-600 dark:from-neutral-800 dark:to-neutral-800 from-neutral-200 to-neutral-200 transition-transform duration-250 bg-gradient-to-r font-medium hover:scale-[1.05] cursor-pointer'
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className='px-4 py-1.5 rounded-md text-sm bg-neutral-800 dark:bg-neutral-300 flex gap-4 hover:scale-105 shadow-2xs transition-transform duration-150 cursor-pointer text-white dark:text-neutral-800 font-medium'
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
