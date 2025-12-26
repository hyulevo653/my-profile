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
  dob: "06/05",
  github: "https://github.com/hyulevo653",
  introduction: `2+ years experience in software development.\n` +
    `Implementing optimized user interface (UI/UX) designs to provide the best user experience.\n` +
    `Building scalable and high-performance web applications.\n` +
    `Web Development, Mobile Development & more.`,
  summary:
    "I have more than 2 years of experience working on web projects, mainly focusing on frontend development, with occasional involvement in backend tasks when needed.",
  experiences: [
    {
      company: "FPT Software",
      position: "Backend Developer (Intern)",
      duration: "02/2023 - 05/2024",
      projects: [
        {
          name: "Requirement Validation System",
          description:
            "An internal system developed for a Japanese client to validate and process business requirements provided in Excel files. The system automatically checks data consistency, business rules, and format correctness before importing requirements into the main system, helping reduce manual errors and improve efficiency.",
          techStack: ["Node.js", "JavaScript", "MySQL", "ExcelJS", "RESTful API"],
          responsibilities: [
            "Developed backend services using Node.js and JavaScript to process and validate requirement data from Excel files",
            "Implemented multiple validation functions to check business rules, data types, mandatory fields, and cross-sheet consistency",
            "Parsed and transformed Excel data into structured JSON format for further processing",
            "Handled edge cases such as missing columns, invalid formats, duplicated records, and incorrect references between sheets",
            "Worked closely with Japanese stakeholders to clarify requirements and adjust validation logic based on Excel specifications",
            "Optimized validation logic to handle large Excel files efficiently",
            "Wrote reusable utility functions to improve maintainability and reduce duplicated logic"
          ],
        }
      ],
    },
    {
      company: "CNTT JSC",
      position: "Frontend Developer",
      duration: "05/2023 - 03/2024",
      projects: [
        {
          name: "Ibuilding Management System",
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
      position: "Fullstack Developer",
      duration: "08/2024 - 11/2025",
      projects: [
        {
          name: "Authgateone",
          description: "A platform for Single Sign-On (SSO) management and online payment processing.",
          techStack: [
            "Angular",
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
        {
          name: "TraxemQR",
          description: "A QR code-based attendance management system for employees.",
          techStack: [
            "ReactJS",
            "NodeJS",
            "Loopback",
            "MySQL",
            "Docker",
            "Kubernetes",
          ],
          responsibilities: [
            "Developed and maintained the QR code generation web application using ReactJS",
            "Implemented free QR code creation features including URL, text, and custom data",
            "Built user-friendly interfaces for creating, previewing, and downloading QR codes",
            "Integrated backend APIs for QR generation, storage, and management using NodeJS & Loopback",
            "Optimized performance and ensured cross-browser compatibility",
          ]
        },
      ],
    },
    {
      company: "Viettel AI",
      position: "Frontend Developer",
      duration: "11/2024 - now",
      projects: [
        {
          name: "Smart Bot",
          description: "A platform for Single Sign-On (SSO) management and online payment processing.",
          techStack: [
            "Angular",
            "AI / LLM Integration",
            "Java Spring Boot",
            "NG-Zorro",
            "WebSocket",
            "RabbitMQ",
            "Docker",
          ],
          responsibilities: [
            "Developed a bot management dashboard to configure and control multiple bot accounts across platforms",
            "Implemented features to create, edit, and manage bot configurations and execution schedules",
            "Integrated APIs for connecting and managing bot accounts on Facebook, TikTok, Reddit, and other platforms",
            "Built monitoring tools to track bot status, logs, and execution results in real-time",
            "Collaborated in designing workflows and system logic for scalable bot operations",
          ],
        },
      ],
    },
  ],

  education: [
    {
      school: "Electric Power University",
      degree: "Information Technology Engineer",
      duration: "09/2019 - 06/2024",
      link: "https://epu.edu.vn/trang/gioi-thieu-2126.html",
    },
  ],

  skills: {
    languages: ["JavaScript (ES5, ES6+)", "TypeScript", "HTML", "CSS", "Java"],

    frontend: ["Angular", "React", "Next.js"],

    backend: ["Node.js", "Spring Boot", "LoopBack", "REST API"],

    styling: ["Bootstrap", "Tailwind CSS", "SCSS", "CSS Modules"],

    database: ["MySQL", "PostgreSQL"],

    devops: ["Docker"],

    other: ["English: Good (Reading & Writing)"],
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
      description: "NodeJS, Loopback,Java backend. Experience with MySQL, Docker, and Kubernetes deployment.",
    },
  ],
  giscusEnabled: true,
}
