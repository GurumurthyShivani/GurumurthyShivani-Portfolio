// import {
//   SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiSpringboot, SiSpring,
//   SiHibernate, SiGit, SiApachetomcat, SiApachemaven, SiRender, SiVercel,
// } from 'react-icons/si'
// import { FaJava, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa'
// import { VscVscode } from 'react-icons/vsc'

// // `icon` = a react-icons component (real brand logo)
// // `mono` = fallback short label for tech that has no official logo icon
// export const skillGroups = [
//   {
//     category: 'Programming Languages',
//     skills: [
//       { name: 'Java', icon: FaJava, color: '#f89820' },
//       { name: 'SQL', mono: 'SQL', icon: FaDatabase, color: '#4d84b0' },
//       { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
//     ],
//   },
//   {
//     category: 'Frontend Technologies',
//     skills: [
//       { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
//       { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
//       { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
//       { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
//       { name: 'React.js', icon: SiReact, color: '#61dafb' },
//     ],
//   },
//   {
//     category: 'Backend Technologies',
//     skills: [
//       { name: 'Java', icon: FaJava, color: '#f89820' },
//       { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
//       { name: 'Spring MVC', icon: SiSpring, color: '#6db33f' },
//       { name: 'RESTful APIs', mono: 'API', color: '#c9a860' },
//       { name: 'JDBC', mono: 'JDBC', color: '#c9a860' },
//       { name: 'Servlets', mono: 'SRV', color: '#c9a860' },
//       { name: 'JSP', mono: 'JSP', color: '#c9a860' },
//       { name: 'Hibernate / JPA', icon: SiHibernate, color: '#59666c' },
//     ],
//   },
//   {
//     category: 'Database Management',
//     skills: [
//       { name: 'Oracle SQL', mono: 'ORCL', icon: FaDatabase, color: '#f80000' },
//       { name: 'PL/SQL', mono: 'PL/SQL', icon: FaDatabase, color: '#f80000' },
//     ],
//   },
//   {
//     category: 'Tools & Platforms',
//     skills: [
//       { name: 'Git', icon: SiGit, color: '#f05032' },
//       { name: 'VS Code', icon: VscVscode, color: '#007acc' },
//       { name: 'Eclipse', mono: 'ECL', color: '#c9a860' },
//       { name: 'Apache Tomcat', icon: SiApachetomcat, color: '#f8dc75' },
//       { name: 'Render', icon: SiRender, color: '#46e3b7' },
//       { name: 'Vercel', icon: SiVercel, color: '#e7eaf2' },
//       { name: 'Maven', icon: SiApachemaven, color: '#c71a36' },
//     ],
//   },
// ]




import {
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiGit,
  SiApachetomcat,
  SiApachemaven,
  SiRender,
  SiVercel,
} from "react-icons/si";

import { FaJava, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const skills = [
  // Languages
  {
    name: "Java",
    category: "Languages",
    icon: FaJava,
    color: "#f89820",
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: SiJavascript,
    color: "#f7df1e",
  },
  {
    name: "SQL",
    category: "Languages",
    icon: FaDatabase,
    color: "#4d84b0",
  },

  // Frontend
  {
    name: "HTML5",
    category: "Frontend",
    icon: FaHtml5,
    color: "#e34f26",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: FaCss3Alt,
    color: "#1572b6",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: SiBootstrap,
    color: "#7952b3",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    color: "#38bdf8",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: SiReact,
    color: "#61dafb",
  },

  // Backend
  {
    name: "Spring Boot",
    category: "Backend",
    icon: SiSpringboot,
    color: "#6db33f",
  },
  {
    name: "Spring MVC",
    category: "Backend",
    icon: SiSpring,
    color: "#6db33f",
  },
  {
    name: "Hibernate / JPA",
    category: "Backend",
    icon: SiHibernate,
    color: "#59666c",
  },
  // {
  //   name: "REST APIs",
  //   category: "Backend",
  //   mono: "API",
  // },
  // {
  //   name: "JDBC",
  //   category: "Backend",
  //   mono: "JDBC",
  // },
  // {
  //   name: "Servlets",
  //   category: "Backend",
  //   mono: "SRV",
  // },
  // {
  //   name: "JSP",
  //   category: "Backend",
  //   mono: "JSP",
  // },

  // Database
  {
    name: "Oracle SQL",
    category: "Database",
    icon: FaDatabase,
    color: "#f80000",
  },
  {
    name: "PL/SQL",
    category: "Database",
    icon: FaDatabase,
    color: "#f80000",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    icon: SiGit,
    color: "#f05032",
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: VscVscode,
    color: "#007acc",
  },
  {
    name: "Apache Tomcat",
    category: "Tools",
    icon: SiApachetomcat,
    color: "#f8dc75",
  },
  {
    name: "Render",
    category: "Tools",
    icon: SiRender,
    color: "#46e3b7",
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: SiVercel,
    color: "#fff",
  },
  {
    name: "Maven",
    category: "Tools",
    icon: SiApachemaven,
    color: "#c71a36",
  },
  {
    name: "Eclipse",
    category: "Tools",
    mono: "ECL",
  },

  // Others
  // {
  //   name: "Problem Solving",
  //   category: "Others",
  //   mono: "PS",
  // },
  // {
  //   name: "OOP",
  //   category: "Others",
  //   mono: "OOP",
  // },
];