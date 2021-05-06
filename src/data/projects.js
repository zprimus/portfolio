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
    overview: 'An overview of my projects and experiences.',
    desc1: 'This project was created solely by me for me.',
    desc2: 'I created templates for projects and locations so that future additions can be auto-populated from filling out a few strings.',
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
    desc1: "This project was developed on the Electrical team for Solidia Technologies. " +
      "It was installed at one of our customers' facilities, EP Henry. " +
      'The long-term goal was the production of "green" concrete pavers that consume CO2 from the environment.',
    desc2: "I was a lead on this project for the Electrical team. " +
    "I designed the electrical drawings (power distribution, network topology, control architecture, etc.) using AutoCAD. " +
    "After the design process, we installed the fabricated panels and wired the entire project of 100+ devices. " +
    "Using ladder logic, we programmed the controls for the various closed-loop systems. " +
    "I also configured the database and designed the HMI (Human Machine Interface) for the operator to easily monitor and control the systems. " +
    "Once the project was done, we spent weeks monitoring and making adjustments for the different runs. " +
    "The project was then handed over to the customer."
    ,
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
    overview: 'Industrial prototype for curing "green" concrete pavers that consume CO2.',
    desc1: "This project was developed on the Electrical team for Solidia Technologies. " +
    "It was installed at one of our customers' facilities, Brampton Brick. " +
    'The goal was the testing of "green" concrete pavers that consume CO2 from the environment.',
    desc2: 'My involvment consisted of creating the electrical drawings. ' +
    'I helped with the install of electrical equipment at the facility. ' +
    'I also developed the HMI (Human Machine Interface) and the ladder logic for controls.' +
    'For the many runs that went on for approximately 2 years, I provided onsite and remote support.',
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