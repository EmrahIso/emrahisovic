import { Icon } from '@iconify/react';
import type { Metadata } from 'next';

import AnimatedListItem from '@/components/AnimatedListItem';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Emrah Isović, a self-taught Front-End Developer, his skills and experience.',
};

const About = () => {
  return (
    <section className='md:my-8 my-12'>
      <div className='container md:max-w-[768px] mx-auto md:px-16 px-4 py-4 z-10'>
        <div>
          <div className='flex flex-col sm:flex-row sm:gap-0 gap-2 justify-between items-start sm:items-center '>
            <h2 className='text-neutral-900 dark:text-neutral-50 md:text-4xl text-2xl font-semibold opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.2s]'>
              Hey, I&apos;m Emrah.
            </h2>
            <ul className='flex gap-5 items-center opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.2s]'>
              <li>
                <span className='text-sm font-medium text-neutral-600 dark:text-neutral-400'>
                  2025
                </span>
              </li>
              <li>
                <span className='text-sm font-medium text-neutral-600 dark:text-neutral-400'>
                  2024
                </span>
              </li>
            </ul>
          </div>
          <p className='sm:mt-6 mt-12 md:text-lg text-base leading-7 text-neutral-700 dark:text-neutral-300 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.3s]'>
            I&apos;m a self-taught front-end developer focused on building
            clear, functional and accessible web interfaces. I mostly work with{' '}
            <a
              href='https://react.dev/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-1 py-0.75 rounded-xs dark:from-neutral-800 dark:to-neutral-800 from-neutral-200 to-neutral-200 transition-colors duration-250 bg-gradient-to-r hover:text-neutral-100 hover:from-purple-600 hover:to-blue-500 font-medium'
            >
              React
            </a>
            ,{' '}
            <a
              href='https://www.typescriptlang.org/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-1 py-0.75 rounded-xs dark:from-neutral-800 dark:to-neutral-800 from-neutral-200 to-neutral-200 transition-colors duration-250 bg-gradient-to-r hover:text-neutral-100 hover:from-purple-600 hover:to-blue-500 font-medium'
            >
              Typescript
            </a>
            ,{' '}
            <a
              href='https://nextjs.org/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-1 py-0.75 rounded-xs dark:from-neutral-800 dark:to-neutral-800 from-neutral-200 to-neutral-200 transition-colors duration-250 bg-gradient-to-r hover:text-neutral-100 hover:from-purple-600 hover:to-blue-500 font-medium'
            >
              Next.js
            </a>{' '}
            and modern{' '}
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
              target='_blank'
              rel='noopener noreferrer'
              className='px-1 py-0.75 rounded-xs dark:from-neutral-800 dark:to-neutral-800 from-neutral-200 to-neutral-200 transition-colors duration-250 bg-gradient-to-r hover:text-neutral-100 hover:from-purple-600 hover:to-blue-500 font-medium'
            >
              JavaScript
            </a>{' '}
            tooling.
          </p>
          <p className='mt-4 md:text-lg text-base leading-7 text-neutral-700 dark:text-neutral-300 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.4s]'>
            I&apos;m 17 years old and currently a high school student. While
            I&apos;m still early in my journey, I&apos;m open to learning
            opportunities, collaborations, and gaining real-world experience
            through open source and personal projects.
          </p>
          <p className='mt-4 md:text-lg text-base leading-7 text-neutral-700 dark:text-neutral-300 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.5s]'>
            I like keeping things simple — both in code and design — and aim to
            write maintainable, understandable solutions that scale well.
          </p>
          <p className='mt-4 md:text-lg text-base leading-7 text-neutral-700 dark:text-neutral-300 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.6s]'>
            If you&apos;d like to connect or collaborate, feel free to reach
            out.
          </p>
        </div>

        <ul className='flex flex-wrap gap-8 gap-y-4 sm:mt-8 mt-16'>
          <AnimatedListItem delay={0.7}>
            <a
              href='https://github.com/EmrahIso'
              rel='noopener noreferrer'
              aria-label='GitHub profile'
              target='_blank'
              className='flex items-center text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors duration-150 md:text-lg text-base gap-2 underline underline-offset-4'
            >
              <Icon
                icon='simple-icons:github'
                height={18}
                className='text-neutral-700 dark:text-neutral-400'
              />
              <span>GitHub</span>
            </a>
          </AnimatedListItem>
          <AnimatedListItem delay={0.8}>
            <a
              href='https://www.linkedin.com/in/emrah-isovic-380127353/'
              rel='noopener noreferrer'
              aria-label='Linkedin profile'
              target='_blank'
              className='flex items-center text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors duration-150 md:text-lg text-base gap-3 underline underline-offset-4'
            >
              <Icon
                icon='simple-icons:linkedin'
                height={18}
                className='text-neutral-700 dark:text-neutral-400'
              />
              <span>LinkedIn</span>
            </a>
          </AnimatedListItem>
          <AnimatedListItem delay={0.9}>
            <a
              href='mailto:emrahisovic20@gmail.com'
              aria-label='Send me an email'
              className='flex items-center text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors duration-150 md:text-lg text-base gap-3 underline underline-offset-4'
            >
              <Icon
                icon='simple-icons:gmail'
                height={18}
                className='text-neutral-700 dark:text-neutral-400'
              />
              <span>Gmail</span>
            </a>
          </AnimatedListItem>
          <AnimatedListItem delay={1}>
            <a
              href='https://discord.com/users/1123513541626966136'
              aria-label='Discord Profile'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors duration-150 md:text-lg text-base gap-3 underline underline-offset-4'
            >
              <Icon
                icon='simple-icons:discord'
                height={24}
                className='text-neutral-700 dark:text-neutral-400'
              />
              <span>Discord</span>
            </a>
          </AnimatedListItem>
        </ul>
      </div>
    </section>
  );
};

export default About;
