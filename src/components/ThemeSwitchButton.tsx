'use client';

import { useState, useEffect } from 'react';

import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

import { useTheme } from 'next-themes';

import { motion } from 'motion/react';

import Image from 'next/image';

const ThemeSwitchButton = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Image
        src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
        alt='Loading Light/Dark Toggle'
        sizes='35x35'
        width={35}
        height={35}
        priority={false}
        title='Loading Light/Dark Toggle'
      />
    );

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      type='button'
      aria-label={
        resolvedTheme === 'dark' ? 'Activate light mode' : 'Activate dark mode'
      }
      className='px-2 py-2 cursor-pointer transition-shadow hover:shadow-sm rounded-xl text-neutral-900 dark:text-neutral-100'
      onClick={
        resolvedTheme === 'light'
          ? () => setTheme('dark')
          : () => setTheme('light')
      }
    >
      {resolvedTheme === 'light' ? (
        <Moon strokeWidth={2} size={27} />
      ) : (
        <Sun strokeWidth={2} size={27} />
      )}
    </motion.button>
  );
};

export default ThemeSwitchButton;
