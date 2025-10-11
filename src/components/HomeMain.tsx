import Image from 'next/image';
import { Icon } from '@iconify/react';
import ParticlesBackground from './ParticlesBackground';

const HomeMain = () => {
  return (
    <section>
      <div className='absolute inset-0 z-1 h-full w-full'>
        <ParticlesBackground />
      </div>
      <div className='container relative h-full xl:max-w-[1280px] mx-auto px-4 py-4 z-10'>
        <div className='flex gap-10 my-40'>
          <Image
            src='/personal-photo.png'
            alt='Picture of Emrah Isović'
            priority={true}
            width={1024}
            height={1024}
            className='h-[250px] w-[250px]'
          />
          <div className='flex flex-col justify-center gap-6'>
            <div className='flex gap-3.5 -mt-2'>
              <a
                href='https://github.com/EmrahIso'
                rel='noopener noreferrer'
                aria-label='GitHub profile'
                target='_blank'
                className='inline-block h-[18px]'
              >
                <Icon
                  icon='simple-icons:github'
                  height={18}
                  className='text-neutral-900 dark:text-neutral-300'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/emrah-isovic-380127353/'
                rel='noopener noreferrer'
                aria-label='Linkedin profile'
                target='_blank'
                className='inline-block h-[18px]'
              >
                <Icon
                  icon='simple-icons:linkedin'
                  height={18}
                  className='text-neutral-900 dark:text-neutral-300'
                />
              </a>
              <a
                href='mailto:emrahisovic20@gmail.com'
                aria-label='Send me an email'
                className='inline-block h-[18px]'
              >
                <Icon
                  icon='simple-icons:gmail'
                  height={18}
                  className='text-neutral-900 dark:text-neutral-300'
                />
              </a>
            </div>
            <h2 className='text-neutral-800 dark:text-neutral-100 text-5xl font-semibold'>
              Hi I'm{' '}
              <span className='bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent'>
                Emrah.
              </span>
            </h2>
            <p className='text-neutral-500 dark:text-neutral-300'>
              Front end developer | Exploring the Web
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
