'use client';

import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

import { motion } from 'motion/react';

type NavigationButtonProps = {
  isNavigationOpen: boolean;
  toggleNavigation: () => void;
};

const NavigationButton = ({
  isNavigationOpen,
  toggleNavigation,
}: NavigationButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      type='button'
      id='navigation-open-button'
      aria-label={
        isNavigationOpen ? 'Close main navigation' : 'Open main navigation'
      }
      className={
        (isNavigationOpen ? 'relative z-20 ' : '') +
        'text-neutral-900 dark:text-neutral-100 cursor-pointer p-2 rounded-2xl'
      }
      onClick={toggleNavigation}
    >
      {isNavigationOpen ? (
        <X size={27} strokeWidth={2.5} />
      ) : (
        <Menu size={27} />
      )}
    </motion.button>
  );
};

export default NavigationButton;
