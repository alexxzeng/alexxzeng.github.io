import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  c,
  r,
  asm,
  reactjs,
  angular,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
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
  ibm,
  stanford,
  next,
  express,
  flask,
  bootstrap,
  pytorch,
  tensorflow,
  aws,
  mysql,
  firebase,
  android,
  cyber
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

const languages = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
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
    name: "R",
    icon: r,
  },
  {
    name: "Assembly",
    icon: asm,
  },
];

const frameworks = [
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
];

const tools = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Android Studio",
    icon: android,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Git",
    icon: git,
  },
]

const educations = [
  {
    title: "Honours Bachelor of Science",
    school: "Univeristy of Toronto",
    icon: uoft,
    gpa: "3.78/4.0",
    iconBg: "#a0a6c3",
    date: "Sep 2021 - Present",
    specialist: "Computer Science",
    focus: "Software Engineering",
    minor: "Statistics",
    awards: [
      "Dean's List Scholar (2022, 2023)",
      "University of Toronto Entrance Scholarship",
    ],
    extracurriculars: [
      "University of Toronto Artificial Intelligence"
    ]
  },
  {
    title: "British Columbia Dogwood Diploma",
    school: "Windermere Secondary School",
    icon: windermere,
    gpa: "4.0/4.0",
    iconBg: "#afb6c3",
    date: "Sep 2016 - Jun 2021",
    awards: [
      "Honour Roll (2017 - 2021)",
      "The Bennie Ma Scholarship (2021)",
      "CEMC Certificate of Distinction (2019)"
    ],
    extracurriculars: [
      "Robotics Club"
    ]
  },
];


const projects = [
  {
    name: "Cyber Nation",
    description:
      "An E-commerce platform for sellers to list products for purchase using a secure checkout system, where sales statistics are tracked and displayed for sellers to monitor performance",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: cyber,
    source_code_link: "https://github.com/",
  },
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
      "An Android mobile app for students to manage courses and plan future semesters using a course timeline generating algorithm, and admins to perform CRUD operations for courses",
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
    name: "Food Delivery App",
    description:
      "Mobile app for customers to satisfy their cravings by ordering food from local restaurants and tracking their delivery status in real-time, with an embedded payment feature",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: "tbd",
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

const coursework = [
  {
    title: "Computer and Network Security",
    points: ["Scripted Encryption schemes, Hash Extension attacks, SSL Stripping, TLS Models, and Injection, for CTFs using Python",
            "Used Wireshark for packet sniffing and followed up with JavaScript for XSS and CSRF attacks on vulnerablities"]
  },
  {
    title: "Software Tools and Systems Programming",
    points: ["Utilized C in Linux to manipulate low-level concepts such as memory, file I/O, processes and its communication",
            "Developed a file storage server that allows upload and download for clients using sockets and signals in C"]
  },
  {
    title: "Machine Learning and Data Mining",
    points: ["Acquired skills in Regression, Clustering, Classification, Principle Component Analysis, and Support Vector Machines",
            "Extended Python knowledge by using NumPy, Panadas, and Scikit-Learn to train and test machine learning models"]
  },
  
  {
    title: "Regression Analysis",
    points: ["Practiced R to train linear models, visualize distributions, run diagnostics, and migitate with remdeial measures",
            "Conducted case study on blood pressure with exploratory data analysis, model selection, and cross validation"]
  },
  {
    title: "Human-Computer Interaction",
    points: ["Applied Nielsen's 8 Golden Rules to assess the usability of popular websites and proposed improvements in reports",
            "Constructed a high fidelity mobile app prototype using Nielsen's 10 Heuristics and conducted contextual inquiries"]
  },
]

const certificates = [
  {
    name: "Machine Learning Specialization",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XGB3VVUWAK8E",
    company: "IBM",
    image: ibm,
    date: "Aug 2023",
    description: "Applied techniques in Exploratory Data Analysis, Regression, Classification, Clustering, and Deep Learning using Python",
  },
  {
    name: "Algorithms Specialization",
    link: "https://coursera.org/account/accomplishments/specialization/certificate/Z6AESKBH8ZCW",
    company: "Stanford University",
    image: stanford,
    date: "May 2023",
    description: "Dived into the algorithms of Divide and Conquer, Greedy, Dynamic Programming, and Minimum Spanning Trees, with in-depth analysis",
  },
  {
    name: "Front-End Development",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/6LZ6NDFK5AME",
    company: "Meta",
    image: meta,
    date: "Apr 2023",
    description: "Demonstrated acquired knowledge in HTML, Bootstrap with CSS, React with JavaScript, and UX/UI principles in a capstone project",
  },
  {
    name: "Back-End Development", 
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/T7KJ2DM6YXC8",
    company: "Meta",
    image: meta,
    date: "Apr 2023",
    description: "Exhibited applications in Python specializing in the Django framework from building APIs that interact with a MySQL database",
  }
];

export { services, languages, educations, projects, coursework, certificates, frameworks, tools};