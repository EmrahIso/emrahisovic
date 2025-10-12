import { Icon } from '@iconify/react';

const About = () => {
  return (
    <section className='my-8'>
      <div className='container md:max-w-[768px] mx-auto px-16 py-4 z-10'>
        <div>
          <div className='flex justify-between items-center'>
            <h2 className='text-neutral-900 dark:text-neutral-50 text-4xl font-semibold'>
              Hey, I'm Emrah.
            </h2>
            <ul className='flex gap-5 items-center'>
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
          <p className='mt-6 text-lg leading-7 text-neutral-700 dark:text-neutral-300'>
            I'm a self-taught front-end developer focused on building clear,
            functional and accessible web interfaces. I mostly work with{' '}
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
          <p className='mt-4 text-lg leading-7 text-neutral-700 dark:text-neutral-300'>
            I'm 17 years old and currently a high school student. While I'm
            still early in my journey, I'm open to learning opportunities,
            collaborations, and gaining real-world experience through open
            source and personal projects.
          </p>
          <p className='mt-4 text-lg leading-7 text-neutral-700 dark:text-neutral-300'>
            I like keeping things simple — both in code and design — and aim to
            write maintainable, understandable solutions that scale well.
          </p>
          <p className='mt-4 text-lg leading-7 text-neutral-700 dark:text-neutral-300'>
            If you'd like to connect or collaborate, feel free to reach out.
          </p>
        </div>

        <ul className='flex gap-8 mt-8'>
          <li>
            <a
              href='https://github.com/EmrahIso'
              rel='noopener noreferrer'
              aria-label='GitHub profile'
              target='_blank'
              className='flex items-center text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors duration-150 text-lg gap-2 underline underline-offset-4'
            >
              <Icon
                icon='simple-icons:github'
                height={18}
                className='text-neutral-700 dark:text-neutral-400'
              />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/emrah-isovic-380127353/'
              rel='noopener noreferrer'
              aria-label='Linkedin profile'
              target='_blank'
              className='flex items-center text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors duration-150 text-lg gap-3 underline underline-offset-4'
            >
              <Icon
                icon='simple-icons:linkedin'
                height={18}
                className='text-neutral-700 dark:text-neutral-400'
              />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href='mailto:emrahisovic20@gmail.com'
              aria-label='Send me an email'
              className='flex items-center text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors duration-150 text-lg gap-3 underline underline-offset-4'
            >
              <Icon
                icon='simple-icons:gmail'
                height={18}
                className='text-neutral-700 dark:text-neutral-400'
              />
              <span>Gmail</span>
            </a>
          </li>
          <li>
            <a
              href='https://discord.com/users/1123513541626966136'
              aria-label='Discord Profile'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors duration-150 text-lg gap-3 underline underline-offset-4'
            >
              <Icon
                icon='simple-icons:discord'
                height={24}
                className='text-neutral-700 dark:text-neutral-400'
              />
              <span>Discord</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
