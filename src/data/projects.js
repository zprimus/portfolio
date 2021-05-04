// pics
import portfolio_0 from '../assets/projects/portfolio/pic_0.PNG';
import portfolio_1 from '../assets/projects/portfolio/pic_1.PNG';

import ephenry_0 from '../assets/projects/p41-ephenry/pic_0.jpg';
import ephenry_1 from '../assets/projects/p41-ephenry/pic_1.png';
import ephenry_2 from '../assets/projects/p41-ephenry/pic_2.png';

import brampton_0 from '../assets/projects/p321-brampton/pic_0.jpg';
import brampton_1 from '../assets/projects/p321-brampton/pic_1.jpg';
import brampton_2 from '../assets/projects/p321-brampton/pic_2.jpg';

// desc1 = made for who, what was involved
// desc2 = what i did, challenges

const projects = [
  {
    id: 'portfolio',
    name: 'Portfolio',
    overview: '',
    desc1: 'desc',
    desc2: 'desc',
    skills: [
      'CSS',
      'JavaScript',
      'NodeJS',
      'React',
    ],
    link: 'https://zprimus.github.io/portfolio',
    pics: [
      {
        pos: 0,
        pic: portfolio_0,
        alt: "Homepage"
      },
      {
        pos: 1,
        pic: portfolio_1,
        alt: "Homepage"
      }
    ],
    resources: [
    ]
  },
  {
    id: 'p41-ephenry',
    name: 'P4.1 EP Henry',
    overview: "Large-scale industrial system for curing concrete pavers that consume CO2.",
    desc1: "Project developed on the Electrical team for Solidia Technologies. It was installed at our customer's facility, EP Henry.",
    desc2: "desc",
    skills: [
      'AutoCAD',
      'Ignition',
      'MySQL',
      'Network Architecture',
      'Python',
      'RSLogix 5000',
      'SCADA'
    ],
    link: '',
    pics: [
      {
        pos: 0,
        pic: ephenry_0,
        alt: "Chamber Doors"
      },
      {
        pos: 1,
        pic: ephenry_1,
        alt: "HMI Home screen"
      },
      {
        pos: 2,
        pic: ephenry_2,
        alt: "HMI P&ID screen"
      }
    ],
    resources: [
      {
        text: "Visit the company site at",
        link: "https://www.solidiatech.com/",
      }
    ]
  },
  {
    id: 'p321-bramptonbrick',
    name: 'P3.2.1 Brampton Brick',
    overview: 'Industrial prototype for curing concrete pavers that consume CO2 for testing purposes.',
    desc1: 'desc',
    desc2: 'desc',
    skills: [
      'FactoryTalk ME',
      'Ignition',
      'MySQL',
      'Network Architecture',
      'Python',
      'RSLogix 5000',
      'SCADA',
      'Visio'
    ],
    link: '',
    pics: [
      {
        pos: 0,
        pic: brampton_0,
        alt: "Loading Station"
      },
      {
        pos: 1,
        pic: brampton_1,
        alt: "Chambers"
      },
      {
        pos: 2,
        pic: brampton_2,
        alt: "Equipment"
      },
    ],
    resources: [
      {
        text: "Visit the company site at",
        link: "https://www.solidiatech.com/",
      }
    ],
  },
];

export default projects;