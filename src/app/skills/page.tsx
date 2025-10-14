import { Icon } from '@iconify/react';
import SkillCard from '@/components/SkillCard';
import skillsArray, { SkillCategory, Skill } from '@/lib/skillsData';

const Skills = () => {
  return (
    <section className='md:my-8 my-12'>
      <div className='container md:max-w-[768px] mx-auto md:px-16 px-4 py-4 z-10'>
        <div className='flex flex-col items-center'>
          <h2 className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center sm:text-5xl text-4xl font-semibold inline-block'>
            Skills
          </h2>
          <p className='mt-4 text-base text-center leading-7 text-neutral-700 dark:text-neutral-300'>
            The toolbox behind my web development journey.
          </p>
        </div>
        {skillsArray.map((skillCategory: SkillCategory) => (
          <div
            className='flex flex-col items-center sm:mt-10 mt-16'
            key={skillCategory.title}
          >
            <h3 className='text-neutral-700 dark:text-neutral-200 sm:text-xl text-base font-semibold'>
              {skillCategory.title}
            </h3>
            <div className='flex flex-wrap justify-center sm:gap-5 gap-3.5 mt-4'>
              {skillCategory.items.map((skill: Skill) => (
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
