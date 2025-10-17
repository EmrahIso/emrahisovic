import Navigation from './Navigation';
import ThemeButton from './ThemeSwitchButton';
import HeaderHomeLink from './HeaderHomeLink';

const Header = () => {
  return (
    <header className='bg-white dark:bg-neutral-900 dark:border-neutral-800 h-[80px] basis-[80px] border-b-1 relative z-99 border-neutral-200'>
      <div className='container h-full 2xl:max-w-[1480px] mx-auto px-4 flex md:justify-between  items-center'>
        <h1 className='font-medium relative text-black dark:text-white sm:text-2xl text-xl flex-grow md:flex-none '>
          <HeaderHomeLink />
        </h1>
        <nav>
          <Navigation />
        </nav>
        <aside>
          <ThemeButton />
        </aside>
      </div>
    </header>
  );
};

export default Header;
