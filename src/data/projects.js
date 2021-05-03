// pics
import portfolio_0 from '../assets/projects/portfolio/pic_0.PNG';

import ephenry_0 from '../assets/projects/p41-ephenry/pic_0.jpg';
import ephenry_1 from '../assets/projects/p41-ephenry/pic_1.png';
import ephenry_2 from '../assets/projects/p41-ephenry/pic_2.png';

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
    link: '',
    pics: [
      {
        pos: 0,
        pic: portfolio_0,
        alt: "Pic of Portfolio app"
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
        alt: "P4.1-EPHenry Doors"
      },
      {
        pos: 1,
        pic: ephenry_1,
        alt: "P4.1-EPHenry HMI Home screen"
      },
      {
        pos: 2,
        pic: ephenry_2,
        alt: "P4.1-EPHenry HMI P&ID screen"
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
        pic: ephenry_0,
        alt: "Pic of Brampton"
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