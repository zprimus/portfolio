const locations = [
    {
        id: 'us-florida-lakeland',
        marker: {
            name: "Lakeland, FL",
            nameOffsetX: 28,
            nameOffsetY: 0,
            coordinates: [-81.9498, 28.0395]
        },
        info: {
            name: "Lakeland, FL, USA",
            general: [
                "Time Spent: 17+ years",
                "Age: 2-18, 25+",
            ],
            imgs: [
                {
                    pos: 0,
                    pic: '/locations/lakeland/pic_0.jpg',
                    alt: "Pic of Lakeland"
                },
                {
                    pos: 1,
                    pic: '/locations/lakeland/pic_1.jpg',
                    alt: "Pic of Graduation"
                },
                {
                    pos: 2,
                    pic: '/locations/lakeland/pic_2.jpg',
                    alt: "Pic of Athletics"
                },
                {
                    pos: 3,
                    pic: '/locations/lakeland/pic_3.jpg',
                    alt: "Pic of Siblings"
                }
            ],
            desc: [
                "I lived in Lakeland for the majority of my life and I call it home. " +
                "After 2 years of living here, my little sister, Jasmine, was born. " +
                "My family was large and we moved multiple times. The city was growing and " + 
                "we were able to live in just about every area of the city throughout my life here.",

                "I went to Lakeland Senior High School, where I participated in many different sports, " + 
                "including wrestling, football, cross country, track, and AAU basketball. " + 
                "I also excelled academically, taking over 10 college level courses while maintaining a 4.3 gpa.",
                
                "I had many firsts in this city. I had my first job at McDonald's and eventually " + 
                "became a Crew Trainer. I was able to buy my first car, a Chrysler Sebring 2003. " + 
                "When I graduated from high school, I was able to rack in enough scholarships " + 
                "to go to school for free if I went to USF, The University of South Florida. " + 
                "My next stop in life was Tampa, FL.",
            ],
            resources: [
                {
                    text: "Wrestling District Champs",
                    link: "https://www.theledger.com/story/news/2014/02/01/lakeland-upsets-jenkins-for-district/8164981007/"
                }
            ]
        }
    },
    {
        id: 'us-florida-tampa',
        marker: {
            name: "Tampa, FL",
            nameOffsetX: -18,
            nameOffsetY: 5,
            coordinates: [-82.4572, 27.9506]
        },
        info: {
            name: "Tampa, FL, USA",
            general: [
                "Time Spent: 3 years",
                "Age: 18-21",
            ],
            imgs: [
                {
                    pos: 0,
                    pic: '/locations/tampa/pic_0.jpg',
                    alt: "City of Tampa"
                },
                {
                    pos: 1,
                    pic: '/locations/tampa/pic_1.jpg',
                    alt: "USF Campus"
                },
                {
                    pos: 2,
                    pic: '/locations/tampa/pic_2.jpg',
                    alt: "Graduation"
                }
            ],
            desc: [
                "I started my higher education at the University of South Florida in Fall 2015. " + 
                "I met many people with diverse backgrounds, since USF was one of the universities " + 
                "that gave the most scholarships to international students. Most of my closest friends " + 
                "were made here. I discovered myself as well and the type of person that I am.",
                
                "I was involved with many clubs, such as MECH (Mechanical Electrical Computer Hub) " + 
                "where I built many projects and eventually became Vice President. I was part a leader " + 
                "of InterVarsity, a club for learning more about Christianity and fellowship. " + 
                "I was also involved with SHPE (Society of Hispanic Professional Engineers) where I " + 
                "networked with many companies, was able to travel to Seattle and Kansas City for conferences, " + 
                "and obtain a summer internship in Electrical Engineering. I also participated in many " + 
                "Hackathons hosted by Major League Hacking, where I created apps/projects with a handful " + 
                "of other people. I graduated Spring 2018 with a BSEE degree as Magna Cum Laude.",
            ],
            resources: [
                {text: "University of South Florida", link: "https://www.usf.edu/"},
                {text: "Mechanical Electrical Computer Hub", link: "https://mechusf.weebly.com/"},
                {text: "Intervarsity Christian Fellowship", link: "https://intervarsity.org/"},
                {text: "Society of Hispanic Professional Engineers", link: "https://www.shpe.org/"},
                {text: "Major League Hacking", link: "https://mlh.io/"},
            ]
        }
    },
    {
        id: 'us-newjersey-newbrunswick',
        marker: {
            name: "New Brunswick, NJ",
            nameOffsetX: 35,
            nameOffsetY: 7,
            coordinates: [-74.4518, 40.4862]
        },
        info: {
            name: "New Brunswick, NJ, USA",
            general: [
                "Time Spent: 3 years",
                "Age: 21-24",
            ],
            imgs: [
                {
                    pos: 0,
                    pic: '/locations/newbrunswick/pic_0.jpg',
                    alt: "City of New Brunswick"
                }
            ],
            desc: [],
            resources: []
        }
    },
    {
        id: 'us-ohio-columbus',
        marker: {
            name: "Columbus, OH",
            nameOffsetX: -28,
            nameOffsetY: 0,
            coordinates: [-82.9988, 39.9612]
        },
        info: {
            name: "Columbus, OH, USA",
            general: [
                "Time Spent: 2 years",
                "Age: 0-2",
            ],
            imgs: [
                {
                    pos: 0,
                    pic: '/locations/columbus/pic_0.jpg',
                    alt: "City of Columbus"
                },
                {
                    pos: 1,
                    pic: '/locations/columbus/pic_1.jpg',
                    alt: "St. Ann's Hospital"
                }
            ],
            desc: [
                "My father and mother (Reginald and Becky Primus) met in Columbus, Ohio, " + 
                "and soon after, had me on March 3rd, 1997. I was born at St. Ann's Hospital " + 
                "and went back home to two older brothers, Marcus and Jonathan. A year later, " + 
                "my little brother, Bradley, was born.",
                
                "Two years after my birth, my father transferred job locations, leading us to move to Lakeland, FL.",
            ],
            resources: []
        }
    },
    {
        id: 'england-london',
        marker: {
            name: "London, England",
            nameOffsetX: 0,
            nameOffsetY: -5,
            coordinates: [-0.1278, 51.5074]
        },
        info: {
            name: "London, England",
            general: [
                "Time Spent: 4 weeks",
                "Age: 21, 22",
            ],
            imgs: [
                {
                    pos: 0,
                    pic: '/locations/london/pic_0.jpg',
                    alt: "City of London"
                },
                {
                    pos: 1,
                    pic: '/locations/london/pic_1.jpg',
                    alt: "Job Site"
                }
            ],
            desc: [

            ],
            resources: []
        }
    },
    {
        id: 'france-lyon',
        marker: {
            name: "Lyon, France",
            nameOffsetX: 15,
            nameOffsetY: -5,
            coordinates: [4.8357, 45.7640]
        },
        info: {
            name: "Lyon, France",
            general: [
                "Time Spent: 1 week",
                "Age: 22",
            ],
            imgs: [
                {
                    pos: 0,
                    pic: '/locations/lyon/pic_0.jpg',
                    alt: "City of Lyon"
                },
                {
                    pos: 1,
                    pic: '/locations/lyon/pic_1.jpg',
                    alt: "Job Site"
                },
                {
                    pos: 2,
                    pic: '/locations/lyon/pic_2.jpg',
                    alt: "Chamber"
                }
            ],
            desc: [

            ],
            resources: []
        }
    },
    {
        id: 'canada-ontario-hillsdale',
        marker: {
            name: "Hillsdale, ON",
            nameOffsetX: 0,
            nameOffsetY: -5,
            coordinates: [-79.7622, 44.5812]
        },
        info: {
            name: "Hillsdale, Ontario, Canada",
            general: [
                "Time Spent: 6 weeks",
                "Age: 22, 23",
            ],
            imgs: [
                {
                    pos: 0,
                    pic: '/locations/hillsdale/pic_0.jpg',
                    alt: "City of Hillsdale"
                },
            ],
            desc: [
                
            ],
            resources: []
        }
    },
  ];

  export default locations;