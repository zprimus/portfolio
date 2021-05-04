// assets
import columbus_0 from '../assets/locations/columbus/pic_0.jpg';
import columbus_1 from '../assets/locations/columbus/pic_1.jpg';

import hillsdale_0 from '../assets/locations/hillsdale/pic_0.jpg';

import lakeland_0 from '../assets/locations/lakeland/pic_0.jpg';
import lakeland_1 from '../assets/locations/lakeland/pic_1.jpg';
import lakeland_2 from '../assets/locations/lakeland/pic_2.jpg';
import lakeland_3 from '../assets/locations/lakeland/pic_3.jpg';

import london_0 from '../assets/locations/london/pic_0.jpg';
import london_1 from '../assets/locations/london/pic_1.jpg';

import lyon_0 from '../assets/locations/lyon/pic_0.jpg';
import lyon_1 from '../assets/locations/lyon/pic_1.jpg';
import lyon_2 from '../assets/locations/lyon/pic_2.jpg';

import newbrunswick_0  from '../assets/locations/newbrunswick/pic_0.jpg';

import tampa_0 from '../assets/locations/tampa/pic_0.jpg';
import tampa_1 from '../assets/locations/tampa/pic_1.jpg';
import tampa_2 from '../assets/locations/tampa/pic_2.jpg';

const locations = [
    {
        id: 'lakeland',
        name: "Lakeland, FL",
        marker: {
            nameOffsetX: 28,
            nameOffsetY: 0,
            coordinates: [-81.9498, 28.0395]
        },
        info: {
            duration: "16 years",
            imgs: [
                {
                    pos: 0,
                    pic: lakeland_0,
                    alt: "Pic of Lakeland"
                },
                {
                    pos: 1,
                    pic: lakeland_1,
                    alt: "Pic of Graduation"
                },
                {
                    pos: 2,
                    pic: lakeland_2,
                    alt: "Pic of Athletics"
                },
                {
                    pos: 3,
                    pic: lakeland_3,
                    alt: "Pic of Siblings"
                }
            ],
            desc1: "I lived in Lakeland for the majority of my life and I call it home. After 2 years of living here, my parents gave me a little sister, Jasmine. My family was large and we moved multiple times. The city was growing and we were able to live in just about every area of the city throughout my life here",
            desc2: "I had many firsts in this city. I had my first job at McDonald's and eventually became a Crew Trainer. I bought my first car, a Chrysler Sebring 2003. When I graduated from high school, I was able to rack in enough scholarships to go to school for free if I went to USF, The University of South Florida. My next stop in life was Tampa, FL.",
        }
    },
    {
        id: 'tampa',
        name: "Tampa, FL",
        marker: {
            nameOffsetX: -18,
            nameOffsetY: 5,
            coordinates: [-82.4572, 27.9506]
        },
        info: {
            duration: "3 years",
            imgs: [
                {
                    pos: 0,
                    pic: tampa_0,
                    alt: "City of Tampa"
                },
                {
                    pos: 1,
                    pic: tampa_1,
                    alt: "USF Campus"
                },
                {
                    pos: 2,
                    pic: tampa_2,
                    alt: "Graduation"
                }
            ],
            desc1: "I started my higher education at the University of South Florida in Fall 2015. I met many people with diverse backgrounds, since USF was one of the universities that gave the most scholarships to international students. Most of my closest friends were made here. I discovered myself as well and the type of person that I am.",
            desc2: "I was involved with many clubs, such as MECH (Mechanical Electrical Computer Hub) where I built many projects and eventually became Vice President. I was part a leader of InterVarsity, a club for learning more about Christianity and fellowship. I was also involved with SHPE (Society of Hispanic Professional Engineers) where I networked with many companies, was able to travel to Seattle and Kansas City for conferences, and obtain a summer internship in Electrical Engineering. I also participated in many Hackathons hosted by Major League Hacking, where I created apps/projects with a handful of other people. I graduated Spring 2018 with a BSEE degree as Magna Cum Laude.",
            resources: [
                {text: "University of South Florida:", link: "https://www.usf.edu/"},
                {text: "Mechanical Electrical Computer Hub", link: "https://mechusf.weebly.com/"},
                {text: "Intervarsity Christian Fellowship:", link: "https://intervarsity.org/"},
                {text: "Society of Hispanic Professional Engineers:", link: "https://www.shpe.org/"},
                {text: "Major League Hacking:", link: "https://mlh.io/"},
            ]
        }
    },
    {
        id: 'newbrunswick',
        name: "New Brunswick, NJ",
        marker: {
            nameOffsetX: 35,
            nameOffsetY: 7,
            coordinates: [-74.4518, 40.4862]
        },
        info: {
            duration: "3 years",
            imgs: [
                {
                    pos: 0,
                    pic: newbrunswick_0,
                    alt: "City of New Brunswick"
                }
            ],
            desc1: "",
            desc2: "",
        }
    },
    {
        id: 'columbus',
        name: "Columbus, OH",
        marker: {
            nameOffsetX: -28,
            nameOffsetY: 0,
            coordinates: [-82.9988, 39.9612]
        },
        info: {
            duration: "2 years",
            imgs: [
                {
                    pos: 0,
                    pic: columbus_0,
                    alt: "City of Columbus"
                },
                {
                    pos: 1,
                    pic: columbus_1,
                    alt: "St. Ann's Hospital"
                }
            ],
            desc1: "My father and mother (Reginald and Becky Primus) met in Columbus, Ohio, and soon after, had me on March 3rd, 1997. I was born at St. Ann's Hospital and went back home to two older brothers, Marcus and Jonathan. A year later, my little brother, Bradley, was born.",
            desc2: "Two years after my birth, my father transferred job locations, leading us to move to Lakeland, FL.",
        }
    },
    {
        id: 'london',
        name: "London, England",
        marker: {
            nameOffsetX: 0,
            nameOffsetY: -5,
            coordinates: [-0.1278, 51.5074]
        },
        info: {
            duration: "",
            imgs: [
                {
                    pos: 0,
                    pic: london_0,
                    alt: "City of London"
                },
                {
                    pos: 1,
                    pic: london_1,
                    alt: "Job Site"
                }
            ],
            desc1: "",
            desc2: "",
        }
    },
    {
        id: 'lyon',
        name: "Lyon, France",
        marker: {
            nameOffsetX: 15,
            nameOffsetY: -5,
            coordinates: [4.8357, 45.7640]
        },
        info: {
            duration: "",
            imgs: [
                {
                    pos: 0,
                    pic: lyon_0,
                    alt: "City of Lyon"
                },
                {
                    pos: 1,
                    pic: lyon_1,
                    alt: "Job Site"
                },
                {
                    pos: 2,
                    pic: lyon_2,
                    alt: "Chamber"
                }
            ],
            desc1: "",
            desc2: "",
        }
    },
    {
        id: 'hillsdale',
        name: "Hillsdale, ON",
        marker: {
            nameOffsetX: 0,
            nameOffsetY: -5,
            coordinates: [-79.7622, 44.5812]
        },
        info: {
            duration: "",
            imgs: [
                {
                    pos: 0,
                    pic: hillsdale_0,
                    alt: "City of Lyon"
                },
            ],
            desc1: "",
            desc2: "",
        }
    },
  ];

  export default locations;