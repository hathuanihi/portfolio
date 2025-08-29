import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  git,
  figma,
  metro, 
  monnes,
  karafun,
  zentra,
  spring,
  java,
  vite,
  next
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "education", 
        title: "Education",
    },
    {
        id: "experience",
        title: "Experience", 
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Development",
        icon: web,
    },
    {
        title: "Mobile Development",
        icon: mobile,
    },
    {
        title: "Backend Development",
        icon: backend,
    },
    {
        title: "UI/UX Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Vite",
        icon: vite,
    },
    {
        name: "Next.js",
        icon: next,
    },
    {
        name: "Spring Boot",
        icon: spring,
    },
    {
        name: "Github",
        icon: git,
    },
    {
        name: "Figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Monnes - Savings Book Management Web Application",
        company_name: "Course Project",
        icon: monnes,
        iconBg: "#383E56",
        date: "April 2025 - June 2025",
        github_link: "https://github.com/hathuanihi/MonNes_Web",
        tags: [
            { name: "Next.js", color: "blue-text-gradient" },
            { name: "TypeScript", color: "green-text-gradient" },
            { name: "Spring Boot", color: "pink-text-gradient" },
            { name: "MySQL", color: "orange-text-gradient" },
        ],
        points: [
            "Led a 3-member team to develop a fullstack savings book management web application using Next.js (TypeScript) and Spring Boot.",
            "Designed the database schema and system architecture, ensuring scalability and data consistency with MySQL.",
            "Implemented secure RESTful APIs for core features such as deposits, withdrawals with interest calculation, and transaction history.",
            "Built both admin and client modules with responsive UI in Next.js, including interactive charts for transaction analytics.",
            "Developed backend services and integrated frontend with APIs to deliver seamless user experience.",
            "Collaborated in team planning, task distribution, and code reviews to maintain high-quality project delivery.",
        ],
    },
    {
        title: "Metro Ticket Booking Mobile Application",
        company_name: "Course Project",
        icon: metro,
        iconBg: "#E6DEDD",
        date: "April 2025 - June 2025",
        github_link: "https://github.com/SangHq005/SE114_METRO_APP",
        tags: [
            { name: "Java", color: "blue-text-gradient" },
            { name: "XML", color: "green-text-gradient" },
            { name: "Firebase", color: "pink-text-gradient" },
        ],
        points: [
            "Led a 4-member team to develop a metro ticket booking mobile application using Java and XML for Android.",
            "Designed and implemented role-based access (admin & client) with Firebase services for authentication, data storage, and notifications.",
            "Built core features including ticket booking, transaction statistics, interactive forum (client-client & client-admin), and metro news updates.",
            "Integrated QR code validation for boarding and VNPay payment gateway for secure transactions.",
        ],
    },
    {
        title: "AI-powered Expense Tracker Mobile Application",
        company_name: "Course Project",
        icon: zentra,
        iconBg: "#383E56",
        date: "June 2025 - July 2025",
        github_link: "https://github.com/savings-app-uit",
        tags: [
            { name: "React Native", color: "blue-text-gradient" },
            { name: "Node.js", color: "green-text-gradient" },
            { name: "Python", color: "pink-text-gradient" },
            { name: "Firebase", color: "orange-text-gradient" },
        ],
        points: [
            "Led a 4-member team to develop a cross-platform expense tracking mobile application using React Native.",
            "Implemented core features including income/expense management, transaction details, and monthly statistics visualization.",
            "Integrated Google Gemini API for monthly 'Wrapped' insights and built a lightweight Python model to process invoice images for automatic categorization.",
            "Utilized Cloudinary for image storage, Node.js for backend services, and Firebase for secure data persistence.",
        ],
    },
    {
        title: "KaraFun - Cross-platform Karaoke Application with AI Scoring",
        company_name: "Course Project",
        icon: karafun,
        iconBg: "#E6DEDD",
        date: "April 2025 - June 2025",
        github_link: "https://github.com/manoke-uit",
        tags: [
            { name: "Vite", color: "blue-text-gradient" },
            { name: "React Native", color: "green-text-gradient" },
            { name: "TypeScript", color: "pink-text-gradient" },
            { name: "PostgreSQL", color: "orange-text-gradient" },
        ],
        points: [
            "Collaborated in a 4-member team, taking the role of UI/UX designer and main frontend developer.",
            "Developed karaoke core features with AI-powered scoring and interactive functionalities between clients and admins.",
            "Implemented a forum for users to share and showcase recorded performances, with role-based access for admin and client.",
            "Built the admin web platform using Vite + Node.js (TypeScript) with PostgreSQL, while the client mobile app was developed in React Native.",
        ],
    },
    {
        title: "Personal Portfolio Website",
        company_name: "Individual Project",
        icon: web,
        iconBg: "#383E56",
        date: "August 2025",
        github_link: "https://github.com/hathuanihi/portfolio",
        tags: [
            { name: "React", color: "blue-text-gradient" },
            { name: "TypeScript", color: "green-text-gradient" },
            { name: "Vite", color: "pink-text-gradient" },
            { name: "Tailwind", color: "orange-text-gradient" },
        ],
        points: [
            "Designed and developed a personal portfolio website as a solo project using Vite, React, TypeScript, and Tailwind CSS.",
            "Implemented 3D interactive models with Three.js to enhance user experience and showcase creativity.",
            "Built a responsive and modern UI to highlight projects, skills, and professional experience.",
        ],
    }
];

const education = [
    {
        id: 1,
        year: "2020",
        phase: "Tran Quoc Tuan High School",
        title: "",
        isPhaseStart: true
    },
    {
        id: 2,
        year: "2021",
        phase: "",
        title: "3rd Prize - Provincial IT Contest",
        isPhaseStart: false
    },
    {
        id: 3,
        year: "2022",
        phase: "",
        title: "Ranked first in GPA in my cohort (2020–2022)",
        isPhaseStart: false
    },
    {
        id: 4,
        year: "",
        phase: "",
        title: "IELTS 6.0",
        isPhaseStart: false
    },
    {
        id: 5,
        year: "2023",
        phase: "University of Information Technology - VNU-HCM",
        title: "Software Engineering",
        isPhaseStart: true
    },
    {
        id: 6,
        year: "2024",
        phase: "",
        title: "Creative Startup Ideas 2024 - Finalist",
        isPhaseStart: false
    },
    {
        id: 7,
        year: "2025",
        phase: "",
        title: "Top 24 Student Leader",
        isPhaseStart: false
    },
    {
        id: 8,
        year: "Present",
        phase: "",
        title: "GPA 3.41/4.0",
        isPhaseStart: false
    },
    {
        id: 9,
        year: "",
        phase: "",
        title: "Vice President of Lossless Art Club",
        isPhaseStart: false
    }
];

export { services, technologies, experiences, education };