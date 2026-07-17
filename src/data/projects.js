// import smarttech from '../assets/projects/smarttech.svg.png'
// import globetrekker from '../assets/projects/globetrekker.svg.png'
// import aichatbot from '../assets/projects/aichatbot.svg.png'

// // Swap the `image` import above for a real screenshot any time —
// // e.g. import smarttech from '../assets/projects/smarttech.png'

// export const projects = [
//   {
//     name: 'SmartTech',
//     subtitle: 'E-Commerce Application',
//     image: smarttech,
//     features:[
//     "Responsive Design",
//     "Destination Search",
//     "Interactive UI",
//     "Mobile Friendly"
//   ],
//     description:
//       'A full-stack e-commerce application with customer registration, authentication, cart, wishlist, and order management. Includes an admin dashboard with CRUD operations, an Oracle SQL database integrated via JDBC, and MVC architecture throughout.',
//     tech: ['Java', 'JDBC', 'JSP', 'Servlets', 'HTML', 'CSS', 'Bootstrap', 'Oracle SQL', 'Apache Tomcat'],
//     github: 'https://github.com/GurumurthyShivani',
//     live: '#',
//   },
//   {
//     name: 'GlobeTrekker',
//     subtitle: 'Travel Agency — Responsive Website',
//     image: globetrekker,
//     features:[
//     "Responsive Design",
//     "Destination Search",
//     "Interactive UI",
//     "Mobile Friendly"
//   ],
//     description:
//       'A responsive travel agency web app built with reusable React components and a modern Tailwind CSS design, ensuring a seamless experience across mobile and desktop. Deployed on Vercel.',
//     tech: ['React.js', 'Tailwind CSS'],
//     github: 'https://github.com/GurumurthyShivani',
//     live: '#',
//   },
//   {
//     name: 'AI ChatBot',
//     subtitle: 'Real-time Conversational Assistant',
//     image: aichatbot,
//     features:[
//     "Responsive Design",
//     "Destination Search",
//     "Interactive UI",
//     "Mobile Friendly"
//   ],
//     description:
//       'An AI chatbot web app generating real-time responses via Gemini API integration, with a responsive UI and dynamic API handling — no persistent storage required. Frontend hosted on Vercel, backend on Render.',
//     tech: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Gemini API'],
//     github: 'https://github.com/GurumurthyShivani',
//     live: '#',
//   },
  
// ]


import smartTechImg from "../assets/projects/smarttech.png";
import globeTrekkerImg from "../assets/projects/globetrekker.png";
import portfolioImg from "../assets/projects/portfolio.png";
import chatbotImg from "../assets/projects/chatbot.webp";


const PROJECTS = [
    {
    id: "p1",
    title: "SmartTech",
    features: [
      "Developed a full-stack e-commerce platform with Admin and Customer modules",
      "Implemented product catalog, cart, wishlist, and order management functionality",
      "Integrated Oracle SQL database using JDBC for secure and persistent data storage"
    ],
    stack: ["Java", "JSP", "Servlets", "JDBC", "Oracle SQL", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/GurumurthyShivani/SmartTech-E-Commerce-Application-",
    demo: "", // Leave empty if not deployed
    image: smartTechImg
  },
  {
    id: "p2",
    title: "GlobeTrekker",
    features: [
      "Modern travel platform with destination discovery and curated travel experiences",
      "Responsive interface featuring smooth animations and intuitive navigation",
      "Component-based architecture using React.js and Tailwind CSS",
      "Performance-optimized and fully responsive across all screen sizes"
    ],
    stack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Vite"
    ],
    github: "https://github.com/GurumurthyShivani/GlobeTrekker-TravelAgency-Project",
    demo: "https://globe-trekker-travel-agency-project.vercel.app/",
    image: globeTrekkerImg,
  },
  {
    id: "p3",
    title: "Gemini AI ChatBot",
    features: [
      "AI-powered chatbot integrated with Google's Gemini API for intelligent conversations",
      "Real-time prompt and response interface with a clean, responsive UI",
      "RESTful backend built with Node.js and Express for secure API communication",
      "Responsive design with seamless user experience across devices"
    ],
    stack: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Google Gemini API",
      "Tailwind CSS",
      "Vite"
    ],
    github: "https://github.com/GurumurthyShivani/Gemini-AI-ChatBot",
    demo: "https://gemini-ai-chat-bot-jade.vercel.app/",
    image: chatbotImg,
  },
  
  {
    id: "p4",
    title: "Portfolio",
    features: [
      "Designed and developed a modern, responsive portfolio to showcase my skills, projects, and experience",
      "Interactive UI with smooth animations, reusable React components, and dark/light mode support",
      "Integrated contact section, project showcase, and downloadable resume for recruiters"
    ],
    stack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons",
      "Vite"
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.vercel.app",
    image: portfolioImg,
  }
];

export default PROJECTS;