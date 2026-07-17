// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";

// import {
//   FaGithub,
//   FaLinkedin,
//   FaXTwitter
// } from "react-icons/fa6";

// import { MdEmail } from "react-icons/md";
// import { HiArrowDownTray } from "react-icons/hi2";

// import profile from "../assets/profile-placeholder.svg.jpeg";

// export default function Home() {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     const root = document.documentElement;

//     // Pick up whatever the Navbar already set
//     setTheme(root.getAttribute("data-theme") || localStorage.getItem("theme") || "dark");

//     // Stay in sync whenever the Navbar toggles the theme
//     const observer = new MutationObserver(() => {
//       setTheme(root.getAttribute("data-theme") || "dark");
//     });

//     observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

//     return () => observer.disconnect();
//   }, []);

//   const isDark = theme === "dark";

//   return (
//     <section
//       id="home"
//       className={`relative min-h-screen scroll-mt-24 transition-colors duration-500 ${
//         isDark ? "bg-[#050816]" : "bg-white"
//       }`}
//     >
//       {/* Background Glow */}

//       <div
//         className={`absolute left-4 top-24 h-40 w-40 rounded-full blur-[90px] sm:left-20 sm:top-32 sm:h-72 sm:w-72 sm:blur-[140px] ${
//           isDark ? "bg-violet-700/20" : "bg-amber-300/30"
//         }`}
//       />

//       <div
//         className={`absolute right-4 bottom-10 h-48 w-48 rounded-full blur-[100px] sm:right-20 sm:bottom-20 sm:h-80 sm:w-80 sm:blur-[160px] ${
//           isDark ? "bg-cyan-500/20" : "bg-indigo-300/30"
//         }`}
//       />

//       {/* Main Container */}

//       <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-14 px-6 pt-28 pb-16 sm:flex-row sm:justify-between sm:gap-8 sm:px-8 sm:pt-20 sm:pb-0">

//         {/* LEFT */}

//         <motion.div
//           initial={{ opacity: 0, x: -70 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-2xl text-center sm:text-left"
//         >

//           {/* Greeting */}

//           <p className={`mb-3 lg:text-left text-lg sm:text-center sm:text-xl  ${isDark ? "text-slate-300" : "text-slate-500"}`}>
//             HI, I'M 👋
//           </p>

//           {/* Name */}

//           <h1 className="mb-4 lg:text-left font-extrabold leading-tight sm:text-5xl sm:text-center lg:text-6xl">

//             <span
//               className={`bg-gradient-to-r bg-clip-text text-transparent ${
//                 isDark
//                   ? "from-violet-500 via-cyan-400 to-pink-500"
//                   : "from-indigo-700 via-teal-800 to-blue-500"
//               }`}
//             >

//               SHIVANI GURUMURTHY

//             </span>

//           </h1>

//           {/* Typewriter */}

//           <h3
//             className={`mb-8 bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent lg:text-left sm:text-center sm:text-2xl lg:text-3xl ${
//               isDark
//                 ? "from-cyan-300 via-violet-400 to-pink-400"
//                 : "from-indigo-600 via-fuchsia-600 to-amber-500"
//             }`}
//           >

//             A{" "}

//             <TypeAnimation
//               sequence={[
//                 "JAVA DEVELOPER",
//                 1800,
//                 "SOFTWARE DEVELOPER",
//                 1800,
//                 "FULL-STACK ENGINEER",
//                 1800,
//               ]}
//               wrapper="span"
//               speed={45}
//               repeat={Infinity}
//             />

//           </h3> 

          

//           {/* Description */}

//           <p className={`mb-10 lg:text-left text-base leading-7 sm:text-center sm:text-lg sm:leading-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>

//             Fascinated by the invisible logic that powers everything around us, I channel that curiosity into building systems that don't just function — they transform ideas into experiences people remember.Every project is a chance to turn that fascination into something real, something people actually feel.


//           </p>

//           {/* Socials */}

//           <div className="mt-4 mb-10 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-6">

//             <a
//               href="https://www.linkedin.com/in/shivanigurumurthy/"
//               target="_blank"
//               rel="noreferrer"
//               className="group"
//             >
//               <FaLinkedin
//                 size={28}
//                 className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-cyan-400 ${
//                   isDark ? "text-slate-300" : "text-slate-500"
//                 }`}
//               />
//             </a>

//             <a
//               href="https://github.com/GurumurthyShivani"
//               target="_blank"
//               rel="noreferrer"
//               className="group"
//             >
//               <FaGithub
//                 size={28}
//                 className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-violet-400 ${
//                   isDark ? "text-slate-300" : "text-slate-500"
//                 }`}
//               />
//             </a>

//             <a
//               href="https://x.com/Neethu_2910"
//               target="_blank"
//               rel="noreferrer"
//               className="group"
//             >
//               <FaXTwitter
//                 size={28}
//                 className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 ${
//                   isDark
//                     ? "text-slate-300 group-hover:text-white"
//                     : "text-slate-500 group-hover:text-slate-900"
//                 }`}
//               />
//             </a>

//             <a
//               href="mailto:shivanigurumurthy10@gmail.com"
//               className="group"
//             >
//               <MdEmail
//                 size={31}
//                 className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-pink-400 ${
//                   isDark ? "text-slate-300" : "text-slate-500"
//                 }`}
//               />
//             </a>

//             {/* Resume */}

//             <a
//             href="https://drive.google.com/uc?export=download&id=16JJMIQ82lnFPBYhBXl61vy-CglvKfMfo"
//                download="Shivani_Gurumurthy_Resume.pdf"
//               className={`
//               flex
//               items-center
//               gap-3
//               rounded-2xl
//               border
//               px-4
//               py-2.5
//               text-sm
//               font-semibold
//               transition-all
//               duration-300
//               hover:scale-105
//               bg-gradient-to-r
//               bg-[length:200%_100%]
//               bg-left
//               hover:bg-right
//               sm:ml-2
//               sm:px-6
//               sm:py-3
//               sm:text-base
//               ${
//                 isDark
//                   ? //"border-amber-300/50 from-amber-200 via-yellow-400 to-amber-500 text-slate-900 hover:shadow-[0_0_25px_rgba(245,158,11,0.45)]"
//                   "border-indigo-900/20 from-slate-800 via-indigo-700 to-slate-900 text-white hover:shadow-[0_0_25px_rgba(49,46,129,0.35)]"
//                   : "border-cyan-900/30 from-cyan-950 via-teal-600 to-cyan-950 text-white shadow-cyan-500/20 hover:shadow-cyan-500/40"
//               }
//               `}
//             >
//               Resume

//               <HiArrowDownTray size={20} />

//             </a>

//           </div>

//         </motion.div>

//         {/* RIGHT */}

//         <motion.div
//           initial={{ opacity: 0, x: 70 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="relative shrink-0"
//         >

//           {/* Glow */}

//           <div
//             className={`absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-r sm:blur-3xl ${
//               isDark
//                 ? "from-violet-600 via-cyan-400 to-pink-500"
//                 : "from-indigo-600 via-fuchsia-500 to-amber-400"
//             }`}
//           />

//           {/* Floating Image */}

//           <motion.div
//             animate={{
//               y: [0, -18, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 3,
//               ease: "easeInOut",
//             }}
//             className={`
//               relative
//               rounded-full
//               bg-gradient-to-r
//               p-[4px]
//               sm:p-[5px]
//               ${
//                 isDark
//                   ? "from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_50px_rgba(168,85,247,0.3)]"
//                   : "from-teal-400 via-cyan-500 to-indigo-500 shadow-[0_0_50px_rgba(79,70,229,0.25)]"
//               }
//             `}
//           >
//             <img
//               src={profile}
//               alt="Profile"
//               className={`h-[200px] w-[200px] rounded-full object-cover sm:h-[280px] sm:w-[280px] lg:h-[420px] lg:w-[420px] ${
//                 isDark ? "bg-[#050816]" : "bg-[#FBF9F5]"
//               }`}
//             />
//           </motion.div>

//         </motion.div>

//       </div>
//     </section>
//   );
// }

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";

// import {
//   FaGithub,
//   FaLinkedin,
//   FaXTwitter
// } from "react-icons/fa6";

// import { MdEmail } from "react-icons/md";
// import { HiArrowDownTray } from "react-icons/hi2";

// import profile from "../assets/profile-placeholder.svg.jpeg";

// export default function Home() {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     const root = document.documentElement;

//     // Pick up whatever the Navbar already set
//     setTheme(root.getAttribute("data-theme") || localStorage.getItem("theme") || "dark");

//     // Stay in sync whenever the Navbar toggles the theme
//     const observer = new MutationObserver(() => {
//       setTheme(root.getAttribute("data-theme") || "dark");
//     });

//     observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

//     return () => observer.disconnect();
//   }, []);

//   const isDark = theme === "dark";

//   return (
//     <section
//       id="home"
//       className={`relative min-h-screen scroll-mt-24 transition-colors duration-500 ${
//         isDark ? "bg-[#050816]" : "bg-white"
//       }`}
//     >
//       {/* Background Glow */}

//       <div
//         className={`absolute left-4 top-24 h-32 w-32 rounded-full blur-[80px] sm:left-12 sm:top-28 sm:h-56 sm:w-56 sm:blur-[110px] lg:left-20 lg:top-32 lg:h-72 lg:w-72 lg:blur-[140px] ${
//           isDark ? "bg-violet-700/20" : "bg-amber-300/30"
//         }`}
//       />

//       <div
//         className={`absolute right-4 bottom-10 h-40 w-40 rounded-full blur-[90px] sm:right-12 sm:bottom-16 sm:h-64 sm:w-64 sm:blur-[130px] lg:right-20 lg:bottom-20 lg:h-80 lg:w-80 lg:blur-[160px] ${
//           isDark ? "bg-cyan-500/20" : "bg-indigo-300/30"
//         }`}
//       />

//       {/* Main Container */}

//       <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-10 px-5 pt-24 pb-14 sm:gap-14 sm:px-6 sm:pt-28 sm:pb-16 md:flex-row md:justify-between md:gap-8 md:px-8 md:pt-20 md:pb-0">

//         {/* LEFT */}

//         <motion.div
//           initial={{ opacity: 0, x: -70 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-2xl text-center md:text-left"
//         >

//           {/* Greeting */}

//           <p className={`mb-3 text-base sm:text-lg md:text-xl lg:text-left md:text-left sm-text-center  ${isDark ? "text-slate-300" : "text-slate-500"}`}>
//             HI, I'M 👋
//           </p>

//           {/* Name */}

//           <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl lg:text-left md:text-left sm-text-center">

//             <span
//               className={`bg-gradient-to-r bg-clip-text text-transparent ${
//                 isDark
//                   ? "from-violet-500 via-cyan-400 to-pink-500"
//                   : "from-indigo-700 via-teal-800 to-blue-500"
//               }`}
//             >

//               SHIVANI GURUMURTHY

//             </span>

//           </h1>

//           {/* Typewriter */}

//           <h3
//             className={`mb-8 bg-gradient-to-r bg-clip-text text-lg font-semibold text-transparent sm:text-xl md:text-2xl lg:text-3xl lg:text-left md:text-left sm-text-center ${
//               isDark
//                 ? "from-cyan-300 via-violet-400 to-pink-400"
//                 : "from-indigo-600 via-fuchsia-600 to-amber-500"
//             }`}
//           >

//             A{" "}

//             <TypeAnimation
//               sequence={[
//                 "JAVA DEVELOPER",
//                 1800,
//                 "SOFTWARE DEVELOPER",
//                 1800,
//                 "FULL-STACK ENGINEER",
//                 1800,
//               ]}
//               wrapper="span"
//               speed={45}
//               repeat={Infinity}
//             />

//           </h3> 

          

//           {/* Description */}

//           <p className={`mb-10 text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:text-left md:text-left sm-text-center ${isDark ? "text-slate-400" : "text-slate-600"}`}>

//             Fascinated by the invisible logic that powers everything around us, I channel that curiosity into building systems that don't just function — they transform ideas into experiences people remember. Every project is a chance to turn that fascination into something real, something people actually feel.

//           </p>

//           {/* Socials */}

//           <div className="mt-4 mb-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:justify-start">

//             <a
//               href="https://www.linkedin.com/in/shivanigurumurthy/"
//               target="_blank"
//               rel="noreferrer"
//               className="group"
//             >
//               <FaLinkedin
//                 size={26}
//                 className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-cyan-400 sm:h-7 sm:w-7 ${
//                   isDark ? "text-slate-300" : "text-slate-500"
//                 }`}
//               />
//             </a>

//             <a
//               href="https://github.com/GurumurthyShivani"
//               target="_blank"
//               rel="noreferrer"
//               className="group"
//             >
//               <FaGithub
//                 size={26}
//                 className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-violet-400 sm:h-7 sm:w-7 ${
//                   isDark ? "text-slate-300" : "text-slate-500"
//                 }`}
//               />
//             </a>

//             <a
//               href="https://x.com/Neethu_2910"
//               target="_blank"
//               rel="noreferrer"
//               className="group"
//             >
//               <FaXTwitter
//                 size={26}
//                 className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 sm:h-7 sm:w-7 ${
//                   isDark
//                     ? "text-slate-300 group-hover:text-white"
//                     : "text-slate-500 group-hover:text-slate-900"
//                 }`}
//               />
//             </a>

//             <a
//               href="mailto:shivanigurumurthy10@gmail.com"
//               className="group"
//             >
//               <MdEmail
//                 size={29}
//                 className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-pink-400 sm:h-8 sm:w-8 ${
//                   isDark ? "text-slate-300" : "text-slate-500"
//                 }`}
//               />
//             </a>

//             {/* Resume */}

//             <a
//             href="https://drive.google.com/uc?export=download&id=16JJMIQ82lnFPBYhBXl61vy-CglvKfMfo"
//                download="Shivani_Gurumurthy_Resume.pdf"
//               className={`
//               flex
//               items-center
//               gap-2
//               rounded-2xl
//               border
//               px-4
//               py-2
//               text-xs
//               font-semibold
//               transition-all
//               duration-300
//               hover:scale-105
//               bg-gradient-to-r
//               bg-[length:200%_100%]
//               bg-left
//               hover:bg-right
//               sm:gap-3
//               sm:px-5
//               sm:py-2.5
//               sm:text-sm
//               md:ml-2
//               md:px-6
//               md:py-3
//               md:text-base
//               ${
//                 isDark
//                   ? "border-indigo-900/20 from-slate-800 via-indigo-700 to-slate-900 text-white hover:shadow-[0_0_25px_rgba(49,46,129,0.35)]"
//                   : "border-cyan-900/30 from-cyan-950 via-teal-600 to-cyan-950 text-white shadow-cyan-500/20 hover:shadow-cyan-500/40"
//               }
//               `}
//             >
//               Resume

//               <HiArrowDownTray size={18} />

//             </a>

//           </div>

//         </motion.div>

//         {/* RIGHT */}

//         <motion.div
//           initial={{ opacity: 0, x: 70 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="relative shrink-0"
//         >

//           {/* Glow */}

//           <div
//             className={`absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-r sm:blur-3xl ${
//               isDark
//                 ? "from-violet-600 via-cyan-400 to-pink-500"
//                 : "from-indigo-600 via-fuchsia-500 to-amber-400"
//             }`}
//           />

//           {/* Floating Image */}

//           <motion.div
//             animate={{
//               y: [0, -18, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 3,
//               ease: "easeInOut",
//             }}
//             className={`
//               relative
//               rounded-full
//               bg-gradient-to-r
//               p-[3px]
//               sm:p-[4px]
//               md:p-[5px]
//               ${
//                 isDark
//                   ? "from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_50px_rgba(168,85,247,0.3)]"
//                   : "from-teal-400 via-cyan-500 to-indigo-500 shadow-[0_0_50px_rgba(79,70,229,0.25)]"
//               }
//             `}
//           >
//             <img
//               src={profile}
//               alt="Profile"
//               className={`h-[160px] w-[160px] rounded-full object-cover sm:h-[220px] sm:w-[220px] md:h-[280px] md:w-[280px] lg:h-[420px] lg:w-[420px] ${
//                 isDark ? "bg-[#050816]" : "bg-[#FBF9F5]"
//               }`}
//             />
//           </motion.div>

//         </motion.div>

//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { HiArrowDownTray } from "react-icons/hi2";

import profile from "../assets/profile-placeholder.svg.jpeg";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;

    // Pick up whatever the Navbar already set
    setTheme(root.getAttribute("data-theme") || localStorage.getItem("theme") || "dark");

    // Stay in sync whenever the Navbar toggles the theme
    const observer = new MutationObserver(() => {
      setTheme(root.getAttribute("data-theme") || "dark");
    });

    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className={`relative min-h-screen scroll-mt-24 transition-colors duration-500 ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      {/* Background Glow */}

      <div
        className={`pointer-events-none absolute left-4 top-24 h-32 w-32 rounded-full blur-[80px] sm:left-12 sm:top-28 sm:h-56 sm:w-56 sm:blur-[110px] lg:left-20 lg:top-32 lg:h-72 lg:w-72 lg:blur-[140px] ${
          isDark ? "bg-violet-700/20" : "bg-amber-300/30"
        }`}
      />

      <div
        className={`pointer-events-none absolute right-4 bottom-10 h-40 w-40 rounded-full blur-[90px] sm:right-12 sm:bottom-16 sm:h-64 sm:w-64 sm:blur-[130px] lg:right-20 lg:bottom-20 lg:h-80 lg:w-80 lg:blur-[160px] ${
          isDark ? "bg-cyan-500/20" : "bg-indigo-300/30"
        }`}
      />

      {/* Main Container */}

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-10 px-5 pt-24 pb-14 sm:gap-14 sm:px-6 sm:pt-28 sm:pb-16 md:flex-row md:justify-between md:gap-8 md:px-8 md:pt-20 md:pb-0">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center md:text-left"
        >

          {/* Greeting */}

          <p className={`mb-3 text-base sm:text-lg md:text-xl lg:text-left md:text-left sm-text-center ${isDark ? "text-slate-300" : "text-slate-500"}`}>
            HI, I'M 👋
          </p>

          {/* Name */}

          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-2xl md:text-5xl lg:text-6xl lg:text-left md:text-left sm-text-center">

            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? "from-violet-500 via-cyan-400 to-pink-500"
                  : "from-indigo-700 via-teal-800 to-blue-500"
              }`}
            >

              SHIVANI GURUMURTHY

            </span>

          </h1>

          {/* Typewriter */}

          <h3
            className={`mb-8 bg-gradient-to-r bg-clip-text text-lg font-semibold text-transparent sm:text-xl md:text-2xl lg:text-3xl lg:text-left md:text-left sm-text-center ${
              isDark
                ? "from-cyan-300 via-violet-400 to-pink-400"
                : "from-indigo-600 via-fuchsia-600 to-amber-500"
            }`}
          >

            A{" "}

            <TypeAnimation
              sequence={[
                "JAVA DEVELOPER",
                1800,
                "SOFTWARE DEVELOPER",
                1800,
                "FULL-STACK ENGINEER",
                1800,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />

          </h3> 

          

          {/* Description */}

          <p className={`mb-10 text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:text-left md:text-left sm-text-center ${isDark ? "text-slate-400" : "text-slate-600"}`}>

            Fascinated by the invisible logic that powers everything around us, I channel that curiosity into building systems that don't just function — they transform ideas into experiences people remember. Every project is a chance to turn that fascination into something real, something people actually feel.

          </p>

          {/* Socials */}

          <div className="mt-4 mb-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:justify-start">

            <a
              href="https://www.linkedin.com/in/shivanigurumurthy/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group relative z-10 -m-2 p-2"
            >
              <FaLinkedin
                className={`h-6 w-6 transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-cyan-400 sm:h-7 sm:w-7 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              />
            </a>

            <a
              href="https://github.com/GurumurthyShivani"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group relative z-10 -m-2 p-2"
            >
              <FaGithub
                className={`h-6 w-6 transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-violet-400 sm:h-7 sm:w-7 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              />
            </a>

            <a
              href="https://x.com/Neethu_2910"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="group relative z-10 -m-2 p-2"
            >
              <FaXTwitter
                className={`h-6 w-6 transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 sm:h-7 sm:w-7 ${
                  isDark
                    ? "text-slate-300 group-hover:text-white"
                    : "text-slate-500 group-hover:text-slate-900"
                }`}
              />
            </a>

            <a
              href="mailto:shivanigurumurthy10@gmail.com"
              aria-label="Email"
              className="group relative z-10 -m-2 p-2"
            >
              <MdEmail
                className={`h-7 w-7 transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-pink-400 sm:h-8 sm:w-8 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              />
            </a>

            {/* Resume */}

            <a
            href="https://drive.google.com/uc?export=download&id=16JJMIQ82lnFPBYhBXl61vy-CglvKfMfo"
               target="_blank"
               rel="noreferrer"
               download="Shivani_Gurumurthy_Resume.pdf"
              className={`
              relative
              z-10
              flex
              items-center
              gap-2
              rounded-2xl
              border
              px-4
              py-2
              text-xs
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              bg-gradient-to-r
              bg-[length:200%_100%]
              bg-left
              hover:bg-right
              sm:gap-3
              sm:px-5
              sm:py-2.5
              sm:text-sm
              md:ml-2
              md:px-6
              md:py-3
              md:text-base
              ${
                isDark
                  ? "border-indigo-900/20 from-slate-800 via-indigo-700 to-slate-900 text-white hover:shadow-[0_0_25px_rgba(49,46,129,0.35)]"
                  : "border-cyan-900/30 from-cyan-950 via-teal-600 to-cyan-950 text-white shadow-cyan-500/20 hover:shadow-cyan-500/40"
              }
              `}
            >
              Resume

              <HiArrowDownTray size={18} />

            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative shrink-0"
        >

          {/* Glow */}

          <div
            className={`pointer-events-none absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-r sm:blur-3xl ${
              isDark
                ? "from-violet-600 via-cyan-400 to-pink-500"
                : "from-indigo-600 via-fuchsia-500 to-amber-400"
            }`}
          />

          {/* Floating Image */}

          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className={`
              relative
              rounded-full
              bg-gradient-to-r
              p-[3px]
              sm:p-[4px]
              md:p-[5px]
              ${
                isDark
                  ? "from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_50px_rgba(168,85,247,0.3)]"
                  : "from-teal-400 via-cyan-500 to-indigo-500 shadow-[0_0_50px_rgba(79,70,229,0.25)]"
              }
            `}
          >
            <img
              src={profile}
              alt="Profile"
              className={`h-[160px] w-[160px] rounded-full object-cover sm:h-[220px] sm:w-[220px] md:h-[280px] md:w-[280px] lg:h-[420px] lg:w-[420px] ${
                isDark ? "bg-[#050816]" : "bg-[#FBF9F5]"
              }`}
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}