import projectsArray, { Project } from '@/lib/projectsData';
import { CodeXml, Link } from 'lucide-react';
import type { Metadata } from 'next';

import AnimatedListItem from '@/components/AnimatedListItem';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Check out Emrah Isović's portfolio projects showcasing his front-end development work with React, Vite and Next.js.",
};

const Projects = () => {
  return (
    <section className='md:my-8 my-12'>
      <div className='container md:max-w-[768px] mx-auto sm:px-16 px-4 py-4 z-10 flex flex-col items-center opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] animate-delay-[0.2s]'>
        <h2 className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center sm:text-5xl text-4xl font-semibold inline-block opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.175s]'>
          Projects
        </h2>
        <p className='mt-4 text-base text-center leading-7 text-neutral-700 dark:text-neutral-300  opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.225s]'>
          If you&apos;d like to connect or collaborate, feel free to reach out.
        </p>
        <ul className='mt-12'>
          {projectsArray.map((project: Project, index: number) => (
            <AnimatedListItem
              classStr='pt-5 pb-6 not-last:border-b-1 border-neutral-200 dark:border-neutral-700'
              delay={0.25 + index / 7.5}
              key={project.title}
            >
              <div className='mb-4 flex sm:flex-row flex-col gap-3 sm:items-center justify-between'>
                <h3 className='tracking-wide text-neutral-900 dark:text-neutral-100 text-lg font-medium'>
                  {project.title}
                </h3>
                <ul className='flex items-center gap-4'>
                  <li>
                    <a
                      href={project.source}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='flex items-center text-sm dark:text-neutral-300 text-neutral-700 gap-2 px-1 py-0.5 rounded-sm dark:from-neutral-800 dark:to-neutral-800 from-neutral-200 to-neutral-200 transition-colors duration-250 bg-gradient-to-r hover:text-neutral-100 hover:from-purple-600 hover:to-blue-500 font-medium'
                    >
                      <span>source</span>
                      <CodeXml size={14} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={project.live}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='flex items-center text-sm text-neutral-700 dark:text-neutral-300 gap-2 px-1 py-0.5 rounded-sm dark:from-neutral-800 dark:to-neutral-800 from-neutral-200 to-neutral-200 transition-colors duration-250 bg-gradient-to-r hover:text-neutral-100 hover:from-purple-600 hover:to-blue-500 font-medium'
                    >
                      <span>live</span>
                      <Link size={14} />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className='mt-6 text-sm leading-6 text-neutral-700 dark:text-neutral-300'>
                  {project.description}
                </p>
                <p className='mt-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300'>
                  {'Tech stack: ' + project.stack}
                </p>
              </div>
            </AnimatedListItem>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
