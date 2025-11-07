import { FiBriefcase, FiCloud, FiCode, FiCpu, FiFacebook, FiGithub } from 'react-icons/fi';
import avatarImage from '../assets/image/IMG_20250925_193508.png';
import verticalAvatar from '../assets/image/abc.png';
import myCVimage from '../assets/image/img-cv.png';

export const AppConfig = {
  name: "Duc Huy Nguyen",
  username: "hyulevo653", // should be GitHub username
  title: "Front-end Develop",
  avatar: avatarImage,
  verticalAvatar: verticalAvatar,
  imageCV: myCVimage,
  email: "duchuy653201@gmail.com",
  phone: "0916498603",
  dob: "06/05/2001",
  github: "https://github.com/hyulevo653",
  introduction: `2+ years experience in software development.\n` +
    `Working in scalable and high-performance technology systems.\n` +
    `Web Development, Mobile Development, DevOps & more.`,
  summary:
    "I have 2 years of experience working on web projects, mainly focusing on frontend development, with occasional involvement in backend tasks when needed.",
    
  experiences: [
    {
      company: "CNTT JSC",
      position: "Frontend Developer",
      duration: "05/2023 - 03/2024",
      projects: [
        {
          name: "HomeSphere",
          description:
            "A web-based platform designed to manage residential complexes efficiently. The system allows administrators to manage buildings, floors, rooms, parking cards, residents, and announcements in one centralized dashboard.",
          techStack: ["Angular", "SCSS", "RESTful API", "Bootstrap", "CSS Module", "MySQL"],
          responsibilities: [
            "Building, developing and deploying web applications using Angular framework",
            "Implementing optimized user interface (UI/UX) designs to provide the best user experience",
            "Contributed to continuous improvement of software through teamwork with development team",
          ],
        },
      ],
    },
    {
      company: "VSII",
      position: "Frontend Developer",
      duration: "08/2024 - 11/2025",
      projects: [
        {
          name: "Authgateone",
          description: "A platform for Single Sign-On (SSO) management and online payment processing.",
          techStack: [
            "ReactJS",
            "NextJS",
            "AngularJS",
            "NodeJS",
            "Loopback",
            "Material UI",
            "NGPrime",
            "MySQL",
            "RabbitMQ",
            "Docker",
            "Kubernetes",
          ],
          responsibilities: [
            "Developed and maintained the user interface for SSO and online payment management platform using Angular",
            "Built a responsive landing page for Authgateone using React",
            "Implemented CRUD functionalities for core modules (App, SettingApp, Client, Order, Contact Us)",
            "Contributed to feature logic and workflow design during product development",
          ],
        },
      ],
    },
  ],

  education: [
    {
      school: "Electric Power University",
      degree: "Information Technology",
      duration: "09/2019 - 06/2024",
    },
  ],

  skills: {
    languages: ["JavaScript (ES5, ES6+)", "TypeScript", "HTML", "CSS"],
    frameworks: ["ReactJS", "Angular", "NextJS"],
    styling: ["Bootstrap", "Tailwind", "SCSS", "CSS Module"],
    backend: ["NodeJS", "Loopback", "MySQL"],
    other: ["Docker", "English: Good (Writing & Reading)"],
  },
  subscriptions: [{
    name: "Hire Me",
    price: "At any price",
    preferred: true,
  }, {
    name: "Freelance",
    price: "From $100"
  }],
  socialLinks: [{
    name: 'GitHub',
    url: 'https://github.com/hyulevo653',
    icon: FiGithub
  }, {
    name: 'Facebook',
    url: 'https://facebook.com/hyu.levo.666',
    icon: FiFacebook
  }],
   expertises: [
    {
      name: "Frontend Development",
      icon: FiCode,
      description:
        "Angular, React, NextJS with modern UI/UX design principles. Building scalable and high-performance web applications.",
    },
    {
      name: "Full Stack",
      icon: FiBriefcase,
      description: "NodeJS, Loopback backend. Experience with MySQL, Docker, and Kubernetes deployment.",
    },
  ],
  giscusEnabled: true,
}
