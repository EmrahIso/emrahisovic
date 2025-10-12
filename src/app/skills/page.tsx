import { Icon } from '@iconify/react';
import SkillCard from '@/components/SkillCard';
import skillsArray, { SkillCategory, Skill } from '@/lib/skillsData';

const Skills = () => {
  return (
    <section className='my-8'>
      <div className='container md:max-w-[768px] mx-auto px-16 py-4 z-10'>
        <div className='flex flex-col items-center'>
          <h2 className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-5xl font-semibold inline-block'>
            Skills
          </h2>
          <p className='mt-4 text-base leading-7 text-neutral-700 dark:text-neutral-300'>
            The toolbox behind my web development journey.
          </p>
        </div>
        {skillsArray.map((skillCategory: SkillCategory) => (
          <div
            className='flex flex-col items-center mt-10'
            key={skillCategory.title}
          >
            <h3 className='text-neutral-700 dark:text-neutral-200 text-xl font-semibold'>
              {skillCategory.title}
            </h3>
            <div className='flex flex-wrap justify-center gap-5 mt-4'>
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
