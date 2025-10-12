import projectsArray, { Project } from '@/lib/projectsData';
import { CodeXml, Link } from 'lucide-react';

const Projects = () => {
  return (
    <section className='my-8'>
      <div className='container md:max-w-[768px] mx-auto px-16 py-4 z-10 flex flex-col items-center'>
        <h2 className='text-neutral-900 dark:text-neutral-100 text-5xl font-semibold tracking-tight'>
          Projects
        </h2>
        <p className='mt-4 text-base leading-7 text-neutral-700 dark:text-neutral-300'>
          If you'd like to connect or collaborate, feel free to reach out.
        </p>
        <ul className='mt-12'>
          {projectsArray.map((project: Project) => (
            <li
              className='pt-5 pb-6 border-b-1 border-neutral-200 dark:border-neutral-700'
              key={project.title}
            >
              <div className='mb-4 flex items-center justify-between'>
                <h3 className='tracking-wide text-neutral-900 dark:text-neutral-100 text-lg font-medium'>
                  {project.title}
                </h3>
                <ul className='flex items-center gap-4'>
                  <li>
                    <a
                      href={project.source}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='flex items-center text-sm text-neutral-700 gap-2 px-1 py-0.5 rounded-sm dark:from-neutral-800 dark:to-neutral-800 from-neutral-200 to-neutral-200 transition-colors duration-250 bg-gradient-to-r hover:text-neutral-100 hover:from-purple-600 hover:to-blue-500 font-medium'
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
                      className='flex items-center text-sm text-neutral-700 gap-2 px-1 py-0.5 rounded-sm dark:from-neutral-800 dark:to-neutral-800 from-neutral-200 to-neutral-200 transition-colors duration-250 bg-gradient-to-r hover:text-neutral-100 hover:from-purple-600 hover:to-blue-500 font-medium'
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
