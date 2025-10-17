'use client';

import { useState, useEffect } from 'react';

import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

import { useTheme } from 'next-themes';

import { motion } from 'motion/react';

import { event } from '@/lib/gtag';

const ThemeSwitchButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ariaLabel: string = mounted
    ? resolvedTheme === 'dark'
      ? 'Activate light mode'
      : 'Activate dark mode'
    : 'Toggle theme';

  const toggleTheme = () => {
    const newTheme: 'light' | 'dark' =
      resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);

    event('theme_toggle', { theme: newTheme });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      type='button'
      aria-label={ariaLabel}
      className='px-2 py-2 cursor-pointer transition-shadow hover:shadow-sm rounded-xl text-neutral-900 dark:text-neutral-100'
      onClick={toggleTheme}
    >
      {!mounted ? (
        <div className='w-[27px] h-[27px]' />
      ) : resolvedTheme === 'light' ? (
        <Moon strokeWidth={2} size={27} />
      ) : (
        <Sun strokeWidth={2} size={27} />
      )}
    </motion.button>
  );
};

export default ThemeSwitchButton;
