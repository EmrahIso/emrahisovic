import Link from 'next/link';

import ThemeButton from './ThemeSwitchButton';

const Header = () => {
  return (
    <header className='bg-white h-[80px] border-b-1 border-neutral-200'>
      <div className='container h-full 2xl:max-w-[1480px] mx-auto px-4 flex justify-between items-center'>
        <h1 className='font-medium text-black text-2xl'>
          <Link href='/' className='animated-link after:bg-neutral-950'>
            Emrah Isović.
          </Link>
        </h1>
        <nav>
          <ul className='flex gap-12 tracking-wide font-medium'>
            <li>
              <Link
                href='/about'
                className='text-base text-neutral-600 font-medium hover:text-neutral-950 after:bg-neutral-950 animated-link'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/skills'
                className='text-base text-neutral-600 font-medium hover:text-neutral-950 after:bg-neutral-950 animated-link'
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href='/projects'
                className='text-base text-neutral-600 font-medium hover:text-neutral-950 after:bg-neutral-950 animated-link'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='text-base text-neutral-600 font-medium hover:text-neutral-950 animated-link after:bg-neutral-950'
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
