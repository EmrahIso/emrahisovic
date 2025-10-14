'use client';

import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

type NavigationButtonProps = {
  isNavigationOpen: boolean;
  toggleNavigation: () => void;
};

const NavigationButton = ({
  isNavigationOpen,
  toggleNavigation,
}: NavigationButtonProps) => {
  return (
    <button
      type='button'
      id='navigation-open-button'
      aria-label={
        isNavigationOpen ? 'Close main navigation' : 'Open main navigation'
      }
      className={
        (isNavigationOpen ? 'fixed mt-4 mr-4 z-50 top-0 right-0' : '') +
        'text-neutral-900 dark:text-neutral-100 cursor-pointer p-2 rounded-2xl'
      }
      onClick={toggleNavigation}
    >
      {isNavigationOpen ? (
        <X size={27} strokeWidth={2.5} />
      ) : (
        <Menu size={27} />
      )}
    </button>
  );
};

export default NavigationButton;
