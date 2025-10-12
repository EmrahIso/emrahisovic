export type Skill = string;

export interface SkillCategory {
  title: string;
  items: Skill[];
}

const skillsArray: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'SASS', 'TailwindCSS', 'Vitest', 'Jest'],
  },
  {
    title: 'Tools',
    items: [
      'Git',
      'GitHub',
      'NPM',
      'Webpack',
      'Vite',
      'ESLint',
      'Prettier',
      'Cloudflare',
    ],
  },
];

export default skillsArray;
