'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, NavLink } from '@/lib/navLinks';
import NavigationButton from './NavigationOpenButton';

import { AnimatePresence, motion } from 'motion/react';

import { event } from '@/lib/gtag';

const Navigation = () => {
  const [navigationMode, setNavigationMode] = useState<'mobile' | 'desktop'>(
    'desktop'
  );
  const [mounted, setMounted] = useState<boolean>(false);

  const pathname: string | null = usePathname();

  useEffect(() => {
    setNavigationMode(window.innerWidth >= 768 ? 'desktop' : 'mobile');
    setMounted(true);

    const handleResize = () => {
      setNavigationMode(window.innerWidth >= 768 ? 'desktop' : 'mobile');
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <nav>
      {navigationMode === 'desktop' ? (
        <DesktopNavigation pathname={pathname} />
      ) : (
        <MobileNavigation pathname={pathname} />
      )}
    </nav>
  );
};

const DesktopNavigation = ({ pathname }: { pathname: string | null }) => {
  return (
    <ul className='flex gap-12 tracking-wide font-medium'>
      {navLinks.map((link: NavLink) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={
              ' relative inline-block  font-medium  dark:after:bg-neutral-50 after:bg-neutral-950 py-[5px] ' +
              (pathname === link.href
                ? 'text-base text-neutral-950 dark:text-neutral-50'
                : 'text-base animated-link text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100')
            }
            onClick={() => event('nav_click', { page: link.name })}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MobileNavigation = ({ pathname }: { pathname: string | null }) => {
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
    <>
      {' '}
      <AnimatePresence initial={false}>
        {isNavigationOpen && (
          <motion.div
            key='mobile-menu'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='flex items-center justify-between'
          >
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className='flex justify-center items-center flex-col gap-6 fixed top-0 left-0 h-screen w-screen z-10 bg-white dark:bg-neutral-900 tracking-wide font-medium'
            >
              {navLinks.map((link: NavLink) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={
                      ' relative inline-block  font-medium  dark:after:bg-neutral-50 after:bg-neutral-950 py-[5px] ' +
                      (pathname === link.href
                        ? 'text-base text-neutral-950 dark:text-neutral-50'
                        : 'text-base animated-link text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100')
                    }
                    onClick={() => {
                      setIsNavigationOpen(false);
                      event('nav_click', { page: link.name });
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        <NavigationButton
          isNavigationOpen={isNavigationOpen}
          toggleNavigation={toggleNavigation}
        />
      </div>
    </>
  );
};

export default Navigation;
