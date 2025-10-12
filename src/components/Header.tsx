import Link from 'next/link';

import ThemeButton from './ThemeSwitchButton';

const Header = () => {
  return (
    <header className='bg-white dark:bg-neutral-900 dark:border-neutral-800 h-[80px] basis-[80px] border-b-1 relative z-99 border-neutral-200'>
      <div className='container h-full 2xl:max-w-[1480px] mx-auto px-4 flex justify-between items-center'>
        <h1 className='font-medium text-black dark:text-white text-2xl'>
          <Link
            href='/'
            className='animated-link dark:after:bg-neutral-50 after:bg-neutral-950'
          >
            Emrah Isović.
          </Link>
        </h1>
        <nav>
          <ul className='flex gap-12 tracking-wide font-medium'>
            <li>
              <Link
                href='/about'
                className='text-base text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-50 font-medium hover:text-neutral-950 dark:after:bg-neutral-50 after:bg-neutral-950 animated-link'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/skills'
                className='text-base text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-50 font-medium hover:text-neutral-950 dark:after:bg-neutral-50 after:bg-neutral-950 animated-link'
              >
                Skills
              </Link>
            </li>
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
        </nav>
        <aside>
          <ThemeButton />
        </aside>
      </div>
    </header>
  );
};

export default Header;
