import { Icon } from '@iconify/react';
import SkillCard from '@/components/SkillCard';
import skillsArray, { SkillCategory, Skill } from '@/lib/skillsData';
import type { Metadata } from 'next';

import AnimatedListItem from '@/components/AnimatedListItem';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Explore the skills of Emrah Isović, including React, TypeScript, Next.js, and modern JavaScript tooling.',
};

const Skills = () => {
  return (
    <section className='md:my-8 my-12'>
      <div className='container md:max-w-[768px] mx-auto md:px-16 px-4 py-4 z-10'>
        <div className='flex flex-col items-center opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] animate-delay-[0.2s]'>
          <h2 className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center sm:text-5xl text-4xl font-semibold inline-block'>
            Skills
          </h2>
          <p className='mt-4 text-base text-center leading-7 text-neutral-700 dark:text-neutral-300'>
            The toolbox behind my web development journey.
          </p>
        </div>
        {skillsArray.map((skillCategory: SkillCategory, index: number) => (
          <div
            className={
              'flex flex-col items-center sm:mt-10 mt-16 ' +
              (index === 0
                ? 'sm:min-h-[90px] min-h-[120px]'
                : 'sm:min-h-[160px]  min-h-[180px]')
            }
            key={skillCategory.title}
          >
            <h3 className='text-neutral-700 dark:text-neutral-200 sm:text-xl text-base font-semibold'>
              {skillCategory.title}
            </h3>
            <ul className='flex flex-wrap justify-center sm:gap-5 gap-3.5 mt-4'>
              {skillCategory.items.map((skill: Skill, index: number) => (
                <AnimatedListItem key={skill} delay={(index + 1) * 0.1}>
                  <SkillCard
                    title={skill}
                    key={skill}
                    icon={
                      <Icon
                        icon={
                          'simple-icons:' +
                          (skill === 'Next.js'
                            ? 'nextdotjs'
                            : skill.toLowerCase())
                        }
                        height={18}
                        className='text-neutral-700 dark:text-neutral-300'
                      />
                    }
                  />
                </AnimatedListItem>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
