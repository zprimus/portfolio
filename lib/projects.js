// pics

const projects = [
  {
    id: 'portfolio',
    name: 'Portfolio',
    overview: 'An overview of my projects and experiences.',
    desc: [
      "This project was created solely by me for me.",
      
      "I created templates for projects and locations so that future " + 
      "additions can be auto-populated from filling out a few strings.",
    ],
    skills: [
      'Backend',
      'Bootstrap',
      'Frontend',
      'CSS',
      'Git',
      'HTML / HTML5',
      'JSON',
      'JavaScript / JSX',
      'NextJS',
      'React',
      'REST',
      'UI / UX Architecture',
    ],
    link: 'https://zprimus.com',
    pics: [
      {
        pic: '/projects/portfolio/pic_0.PNG',
        alt: "Homepage"
      },
      {
        pic: '/projects/portfolio/pic_1.PNG',
        alt: "Menu"
      },
      {
        pic: '/projects/portfolio/pic_2.PNG',
        alt: "Explore page"
      }
    ],
    resources: [
      {
        text: "Source code can be found : ",
        link: "https://github.com/zprimus/portfolio",
      },
      {
        text: "Inspired by Rafael Caferati : ",
        link: "https://caferati.me/",
      },
    ]
  },
  {
    id: 'p41-ephenry',
    name: 'Industrial CO2 Curing Paver System',
    overview: "Large-scale industrial system for curing concrete pavers that consume CO2.",
    desc: [
      "This project was developed on the Electrical team for Solidia Technologies. " +
      "It was installed at one of our customers' facilities, EP Henry. " +
      'The long-term goal was the production of "green" concrete pavers that consume CO2 from the environment.',
    
      "I was a lead on this project for the Electrical team. " +
      "I designed the electrical drawings (power distribution, network topology, control architecture, etc.) using AutoCAD. " +
      "After the design process, we installed the fabricated panels and wired the entire project of 100+ devices. " +
      "Using ladder logic, we programmed the controls for the various closed-loop systems. " +
      "I also configured the database and designed the HMI (Human Machine Interface) for the operator to easily monitor and control the systems. " +
      "Once the project was done, we spent weeks monitoring and making adjustments for the different runs. " +
      "The project was then handed over to the customer."
    ]
    ,
    skills: [
      'AutoCAD',
      'Backend',
      'Frontend',
      'MSSQL',
      'MySQL',
      'Network Architecture',
      'PLC',
      'Python / Python3',
      'RSLogix',
      'SCADA',
      'Twilio',
      'UI / UX Architecture',
    ],
    link: '',
    pics: [
      {
        pic: '/projects/p41-ephenry/pic_0.PNG',
        alt: "Chamber Doors"
      },
      {
        pic: '/projects/p41-ephenry/pic_1.PNG',
        alt: "HMI Home screen"
      },
      {
        pic: '/projects/p41-ephenry/pic_2.JPG',
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
];

export default projects;