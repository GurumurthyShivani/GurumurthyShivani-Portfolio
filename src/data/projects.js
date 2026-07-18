import smartTechImg from "../assets/projects/smarttech.png";
import globeTrekkerImg from "../assets/projects/globetrekker.png";
import portfolioImg from "../assets/projects/portfolio.png";
import chatbotImg from "../assets/projects/chatbot.webp";
import netflixImg from "../assets/projects/netflixlandpage.png"


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
    demo: "http://localhost:8086/oep/",    
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
      "Integrated contact section, project showcase, and downloadable resume."
    ],
    stack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons",
      "Vite"
    ],
    github: "https://github.com/GurumurthyShivani/GurumurthyShivani-Portfolio",
    demo: "https://gurumurthy-shivani-portfolio.vercel.app/",
    image: portfolioImg,
  },
  {
  id: "p5",
  title: "Netflix Landing Page",
  features: [
    "Developed a fully responsive Netflix-inspired landing page with a modern, pixel-perfect user interface.",
    "Implemented reusable React components, smooth animations, and interactive sections for an engaging user experience.",
    "Built a responsive hero section, feature highlights, FAQ accordion, and call-to-action optimized for desktop, tablet, and mobile devices."
  ],
  stack: [
    "HTML",
    "CSS",
    "React.js",
    "JavaScript",
    "Bootstrap",
    "Vite"
  ],
  github: "https://github.com/GurumurthyShivani/Netflix-landingpage",
  demo: "https://streaming-ui-clone-olive.vercel.app/",
  image: netflixImg,
}
];

export default PROJECTS;