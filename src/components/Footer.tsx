const Footer = () => {
  return (
    <footer className='bg-white dark:bg-neutral-900 basis-[80px] h-[80px] border-t-1 relative z-20  border-neutral-200 dark:border-neutral-800'>
      <div className='container h-full 2xl:max-w-[1480px] mx-auto px-4 flex justify-between items-center'>
        <p className='text-sm text-neutral-600 dark:text-neutral-300'>
          All rights reserved © Emrah Isović 2025
        </p>

        <p className='text-sm text-neutral-600 dark:text-neutral-300'>
          Made with ❤️ in Sarajevo, BiH
        </p>
      </div>
    </footer>
  );
};

export default Footer;
