'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavigationButton from './NavigationOpenButton';

import { motion } from 'motion/react';

const Navigation = () => {
  const [navigationMode, setNavigationMode] = useState<'mobile' | 'desktop'>(
    'desktop'
  );

  useEffect(() => {
    setNavigationMode(window.innerWidth >= 768 ? 'desktop' : 'mobile');

    const handleResize = () => {
      setNavigationMode(window.innerWidth >= 768 ? 'desktop' : 'mobile');
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      {navigationMode === 'desktop' ? (
        <DesktopNavigation />
      ) : (
        <MobileNavigation />
      )}
    </nav>
  );
};

const DesktopNavigation = () => {
  return (
    <ul className='flex gap-12 tracking-wide font-medium'>
      <li>
        <Link
          href='/about'
          className='text-base text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-50 font-medium hover:text-neutral-950 dark:after:bg-neutral-50 after:bg-neutral-950 animated-link'
        >
          About
        </Link>
      </li>
      <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Link
          href='/skills'
          className='text-base text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-50 font-medium hover:text-neutral-950 dark:after:bg-neutral-50 after:bg-neutral-950 animated-link'
        >
          Skills
        </Link>
      </motion.li>
      <li>
        <Link
          href='/projects'
          className='text-base text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-50 font-medium hover:text-neutral-950 dark:after:bg-neutral-50 after:bg-neutral-950 animated-link'
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          href='/contact'
          className='text-base text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-50 font-medium hover:text-neutral-950 animated-link dark:after:bg-neutral-50 after:bg-neutral-950'
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

const MobileNavigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isNavigationOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = '';
    }
  }, [isNavigationOpen]);

  const toggleNavigation = (): void => {
    setIsNavigationOpen((prevState: boolean) => !prevState);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {isNavigationOpen ? (
        <div className='flex items-center justify-between'>
          <ul className='flex justify-center items-center flex-col gap-6 fixed top-0 left-0 h-screen w-screen z-9 bg-white dark:bg-neutral-900 tracking-wide font-medium'>
            <li>
              <Link
                href='/about'
                className='text-xl text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-50 font-medium hover:text-neutral-950 dark:after:bg-neutral-50 after:bg-neutral-950 animated-link'
                onClick={() => setIsNavigationOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/skills'
                className='text-xl text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-50 font-medium hover:text-neutral-950 dark:after:bg-neutral-50 after:bg-neutral-950 animated-link'
                onClick={() => setIsNavigationOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href='/projects'
                className='text-xl text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-50 font-medium hover:text-neutral-950 dark:after:bg-neutral-50 after:bg-neutral-950 animated-link'
                onClick={() => setIsNavigationOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='text-xl text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-50 font-medium hover:text-neutral-950 animated-link dark:after:bg-neutral-50 after:bg-neutral-950'
                onClick={() => setIsNavigationOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <NavigationButton
              isNavigationOpen={isNavigationOpen}
              toggleNavigation={toggleNavigation}
            />
          </div>
        </div>
      ) : (
        <div>
          <NavigationButton
            isNavigationOpen={isNavigationOpen}
            toggleNavigation={toggleNavigation}
          />
        </div>
      )}
    </div>
  );
};

export default Navigation;
