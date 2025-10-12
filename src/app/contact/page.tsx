import { Mail, MapPin } from 'lucide-react';
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <section className='my-8'>
      <div className='container md:max-w-[768px] mx-auto px-16 py-4 z-10 flex flex-col items-center'>
        <h2 className='text-neutral-900 dark:text-neutral-100 text-5xl font-semibold tracking-tight'>
          Get In Touch
        </h2>
        <p className='mt-4 text-base leading-7 text-neutral-700 dark:text-neutral-300'>
          If you'd like to connect or collaborate, feel free to reach out.
        </p>
        <div className='w-full custom-box-shadow-1 rounded-2xl border-1 border-neutral-200 dark:border-neutral-700 transition-shadow duration-300 mt-10 p-6'>
          <div>
            <ul className='flex flex-col gap-3'>
              <li className='flex gap-4 items-center'>
                <span>
                  <Mail
                    size={24}
                    className='text-gray-500 dark:text-neutral-300'
                  />
                </span>
                <p className='text-neutral-700 dark:text-neutral-300 text-lg'>
                  emrahisovic20@gmail.com
                </p>
              </li>
              <li className='flex gap-4 items-center'>
                <span>
                  <MapPin
                    size={24}
                    className='text-gray-500 dark:text-neutral-300'
                  />
                </span>
                <p className='text-neutral-700 dark:text-neutral-300 text-lg'>
                  Sarajevo, Bosnia and Herzegovina
                </p>
              </li>
            </ul>
          </div>
          <div className='mt-10 flex justify-between'>
            <div>
              <a
                href='mailto:emrahisovic20@gmail.com'
                aria-label='Send me an email'
                className='bg-neutral-800 flex px-2 py-1.5 rounded-lg gap-4 hover:scale-105 shadow-2xs transition-transform duration-150'
              >
                <Mail size={24} className='text-neutral-50' />
                <p className='text-white'>Send Email</p>
              </a>
            </div>
            <ul className='flex gap-5 items-center'>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
