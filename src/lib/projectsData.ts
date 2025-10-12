export interface Project {
  title: string;
  live: string;
  source: string;
  description: string;
  stack: string;
}

const projectsArray: Project[] = [
  {
    title: 'CottonBuy',
    live: 'https://cottonbuy.pages.dev/',
    source: 'https://github.com/EmrahIso/CottonBuy.git',
    description:
      'A CottonBuy is a responsive shopping cart application for a Fake Store. Fetches products dynamically using the Fake Store API, and features cart management and a simple checkout flow.',
    stack: ' React, JavaScript, TypeScript, Tailwind CSS, Vite and Vitest',
  },
  {
    title: 'GeoMemory',
    live: 'https://geomemory.pages.dev/',
    source: 'https://github.com/EmrahIso/GeoMemory.git',
    description:
      'Geo Memory is a fun and challenging React app where your goal is to click as many unique cards as possible without repeating any.',
    stack: ' React, JavaScript, TypeScript, Tailwind CSS and Vite',
  },
  {
    title: 'Portfolio',
    live: 'https://emrahisovic.pages.dev/',
    source: 'https://github.com/EmrahIso/portfolio.git',
    description:
      'My personal portfolio — built to showcase my projects and journey as a front-end developer.',
    stack: 'React, JavaScript, TypeScript, Tailwind CSS and Next.js',
  },
  {
    title: 'CVision',
    live: 'https://cvision.pages.dev/',
    source: 'https://github.com/EmrahIso/CVision.git',
    description:
      'CVision is a simple web app for creating clean CVs without the usual hassle.',
    stack: 'React, JavaScript, Tailwind CSS and Vite',
  },
  {
    title: 'BattleShip',
    live: 'https://emrahiso.github.io/Battleship/',
    source: 'https://github.com/EmrahIso/Battleship.git',
    description:
      'An interactive implementation of the classic "Battleship" game in Vanilla JavaScript, where two players can play against each other or challenge an AI opponent.',
    stack: 'JavaScript, CSS, SCSS and Webpack',
  },
];

export default projectsArray;
