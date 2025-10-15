import { Mail, MapPin } from 'lucide-react';
import { Icon } from '@iconify/react';

import AnimatedListItem from '@/components/AnimatedListItem';

const Contact = () => {
  return (
    <section className='md:my-8 my-12'>
      <div className='container md:max-w-[768px] mx-auto md:px-16 px-4 py-4 z-10 flex flex-col items-center'>
        <h2 className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center sm:text-5xl text-4xl font-semibold inline-block opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.175s]'>
          Get In Touch
        </h2>
        <p className='mt-4 text-base text-center leading-7 text-neutral-700 dark:text-neutral-300 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.225s]'>
          If you&apos;d like to connect or collaborate, feel free to reach out.
        </p>
        <div className='w-full custom-box-shadow-1 rounded-2xl border-1 border-neutral-200 dark:border-neutral-700 transition-shadow duration-300 mt-10 sm:p-6 p-4 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.3s]'>
          <div>
            <ul className='flex flex-col gap-3'>
              <li className='flex sm:gap-4 gap-2 items-center  opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.350s]'>
                <span>
                  <Mail
                    size={24}
                    className='text-gray-500 dark:text-neutral-300'
                  />
                </span>
                <p className='text-neutral-700 dark:text-neutral-300 sm:text-lg text-base'>
                  emrahisovic20@gmail.com
                </p>
              </li>
              <li className='flex sm:gap-4 gap-2 items-center  opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.450s]'>
                <span>
                  <MapPin
                    size={24}
                    className='text-gray-500 dark:text-neutral-300'
                  />
                </span>
                <p className='text-neutral-700 dark:text-neutral-300 sm:text-lg text-base'>
                  Sarajevo, B&H
                </p>
              </li>
            </ul>
          </div>
          <div className='sm:mt-10 mt-7 flex sm:justify-between sm:flex-row sm:items-center flex-col items-start md:gap-4 gap-5'>
            <div>
              <a
                href='mailto:emrahisovic20@gmail.com'
                aria-label='Send me an email'
                className='bg-neutral-800 flex px-2 py-1.5 rounded-lg gap-4 hover:scale-105 shadow-2xs transition-transform duration-150  opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.550s]'
              >
                <Mail size={24} className='text-neutral-50' />
                <p className='text-white'>Send Email</p>
              </a>
            </div>
            <ul className='flex sm:gap-5 gap-3.5 gap-y-2 items-center flex-wrap'>
              <AnimatedListItem delay={0.7}>
                <a
                  href='https://github.com/EmrahIso'
                  rel='noopener noreferrer'
                  aria-label='GitHub profile'
                  target='_blank'
                  className='flex items-center text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors duration-150 md:text-lg text-base sm:gap-2 gap-1.5 underline underline-offset-4'
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
                  className='flex items-center text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors duration-150 md:text-lg text-base sm:gap-2 gap-1.5 underline underline-offset-4'
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
                  href='https://discord.com/users/1123513541626966136'
                  aria-label='Discord Profile'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors duration-150 md:text-lg text-base sm:gap-2 gap-1.5 underline underline-offset-4'
                >
                  <Icon
                    icon='simple-icons:discord'
                    height={18}
                    className='text-neutral-700 dark:text-neutral-400'
                  />
                  <span>Discord</span>
                </a>
              </AnimatedListItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
