import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  uoft,
  windermere,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  java,
  cpp,
  postgres,
  django,
  grantors,
  imageCompressor,
  planner,
  game,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Dean's List Scholar",
    icon: web,
    info: 'Working diligently with motivation and determination is the foundation of my academic success'
  },
  {
    title: "Agile Developer",
    icon: mobile,
    info: 'Developed, tested, and deployed high fidelity prototypes, mobile apps, and web apps, under Scrum framework'
  },
  {
    title: "Full Stack Developer",
    icon: backend,
    info: 'Engineered React-based clients to connect with Express and Django servers with MongoDB and SQL databases'
  },
  {
    title: "Data Analyst",
    icon: creator,
    info: 'Utilized R & Python for data exploration, visualization, and machine learning from statistical coursework'
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: " Java",
    icon: java,
  },
  {
    name: " C++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "Django",
  //   icon: django,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const educations = [
  {
    title: "Honours Bachelor of Science",
    school: "Univeristy of Toronto",
    icon: uoft,
    gpa: "3.78/4.0",
    iconBg: "#383E56",
    date: "Sep 2021 - Present",
    specialist: "Computer Science",
    focus: "Software Engineering",
    minor: "Statistics",
    awards: [
      "Dean's List Scholar (2022, 2023)",
      "University of Toronto Entrance Scholarship (2021)",
    ]
  },
  {
    title: "British Columbia Dogwood Diploma",
    school: "Windermere Secondary School",
    icon: windermere,
    gpa: "4.0/4.0",
    iconBg: "#E6DEDD",
    date: "Sep 2016 - Jun 2021",
    awards: [
      "Honour Roll (2017 - 2021)",
      "The Bennie Ma Scholarship (2021)",
      "CEMC Certificate of Distinction (2019)"
    ]
  },
];


const projects = [
  {
    name: "Grantors",
    description:
      "An accessible MERN web application for grant providers to post grants and review applications, users to apply for grants, and system admins to monitor activity and view statistics",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: grantors,
    source_code_link: "https://github.com/",
  },
  {
    name: "Course Manager & Planner",
    description:
      "An Andriod mobile app for students to manage courses and plan future semesters using a course timeline generating algorithm, and admins to perform CRUD operations for courses",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: planner,
    source_code_link: "https://github.com/",
  },
  {
    name: "Image Compressor & Restorer",
    description:
      "A tool to process images with options to compress file size using K-means clustering on pixel RGBs and restore corrupted pixels using radial basis regression written in Python",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
    ],
    image: imageCompressor,
    source_code_link: "https://github.com/",
  },
  {
    name: "Breaking Bad Game",
    description:
      "A retro-vibe platform game based off of Emmy-winning show Breaking Bad, featuring the one and only Heisenberg, written completely in Assembly under the MIPS 32-bit architecture",
    tags: [
      {
        name: "assembly",
        color: "blue-text-gradient",
      },
      {
        name: "MIPS",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      }
    ],
    image: game,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, educations, projects };