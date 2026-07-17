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
//   return (
//     <section
//     id="home"
//     className="relative min-h-screen bg-[#050816] scroll-mt-24"
//   >
//       {/* Background Glow */}

//       <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-violet-700/20 blur-[140px]" />

//       <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[160px]" />

//       {/* Main Container */}

//       <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8 pt-20">

//         {/* LEFT */}

//         <motion.div
//           initial={{ opacity: 0, x: -70 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-2xl"
//         >

//           {/* Greeting */}

//           <p className="mb-3 text-xl text-slate-300">
//             Hi, I'm 👋
//           </p>

//           {/* Name */}

//           <h1 className="mb-5 text-6xl font-extrabold leading-tight">

//             <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent">

//               Shivani Gurumurthy

//             </span>

//           </h1>

//           {/* Typewriter */}

//           <h2 className="mb-8 text-3xl font-semibold text-white">

//             A{" "}

//             <TypeAnimation
//               sequence={[
//                 "Java Developer",
//                 1800,
//                 "Software Developer",
//                 1800,
//                 "Full-Stack Engineer",
//                 1800,
//               ]}
//               wrapper="span"
//               speed={45}
//               repeat={Infinity}
//               className="text-cyan-400"
//             />

//           </h2>

//           {/* Description */}

//           <p className="mb-10 text-lg leading-8 text-slate-400">

//             Passionate Java Full Stack Developer with one year of professional
//             experience at Cognizant. I enjoy building scalable backend systems
//             and responsive web applications using Java, React.js, SQL and
//             modern web technologies. Currently looking for Software Engineer
//             and Java Full Stack Developer opportunities.

//           </p>

//           {/* Socials */}

//           <div className="mb-10 flex items-center gap-6">

//             <a
//               href="https://linkedin.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="group"
//             >
//               <FaLinkedin
//                 size={28}
//                 className="text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-cyan-400"
//               />
//             </a>

//             <a
//               href="https://github.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="group"
//             >
//               <FaGithub
//                 size={28}
//                 className="text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-violet-400"
//               />
//             </a>

//             <a
//               href="https://twitter.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="group"
//             >
//               <FaXTwitter
//                 size={28}
//                 className="text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-white"
//               />
//             </a>

//             <a
//               href="mailto:yourmail@gmail.com"
//               className="group"
//             >
//               <MdEmail
//                 size={31}
//                 className="text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-pink-400"
//               />
//             </a>

//             {/* Resume */}

//             <a
//               href="/resume.pdf"
//               download
//               className="
//               ml-6
//               flex
//               items-center
//               gap-3
//               rounded-full
//               border
//               border-violet-500
//               bg-gradient-to-r
//               from-violet-600
//               via-cyan-500
//               to-pink-500
//               px-6
//               py-3
//               font-semibold
//               text-white
//               transition-all
//               duration-300
//               hover:shadow-[0_0_25px_#8b5cf6]
//               hover:scale-105
//               "
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
//           className="relative"
//         >

//           {/* Glow */}

//           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-cyan-400 to-pink-500 blur-3xl opacity-30" />

//           {/* Floating Image */}

//           <motion.img
//             src={profile}
//             alt="Profile"
//             animate={{
//               y: [0, -18, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 3,
//               ease: "easeInOut",
//             }}
//             className="
//               relative
//               h-[420px]
//               w-[420px]
//               rounded-full
//               border-4
//               border-cyan-400
//               object-cover
//               shadow-[0_0_50px_rgba(6,182,212,0.3)]
//             "
//           />

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
//         isDark ? "bg-[#050816]" : "bg-gradient-to-b from-[#FBF9F5] to-[#F3EEE6]"
//       }`}
//     >
//       {/* Background Glow */}

//       <div
//         className={`absolute left-20 top-32 h-72 w-72 rounded-full blur-[140px] ${
//           isDark ? "bg-violet-700/20" : "bg-amber-300/30"
//         }`}
//       />

//       <div
//         className={`absolute right-20 bottom-20 h-80 w-80 rounded-full blur-[160px] ${
//           isDark ? "bg-cyan-500/20" : "bg-indigo-300/30"
//         }`}
//       />

//       {/* Main Container */}

//       <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8 pt-20">

//         {/* LEFT */}

//         <motion.div
//           initial={{ opacity: 0, x: -70 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-2xl"
//         >

//           {/* Greeting */}

//           <p className={`mb-3 text-xl ${isDark ? "text-slate-300" : "text-slate-500"}`}>
//             Hi, I'm 👋
//           </p>

//           {/* Name */}

//           <h1 className="mb-5 text-6xl font-extrabold leading-tight">

//             <span
//               className={`bg-gradient-to-r bg-clip-text text-transparent ${
//                 isDark
//                   ? "from-violet-500 via-cyan-400 to-pink-500"
//                   : "from-indigo-700 via-fuchsia-600 to-amber-500"
//               }`}
//             >

//               Shivani Gurumurthy

//             </span>

//           </h1>

//           {/* Typewriter */}

//           <h2
//             className={`mb-8 inline-block bg-gradient-to-r bg-clip-text text-3xl font-semibold text-transparent ${
//               isDark
//                 ? "from-cyan-300 via-violet-400 to-pink-400"
//                 : "from-indigo-600 via-fuchsia-600 to-amber-500"
//             }`}
//           >

//             A{" "}

//             <TypeAnimation
//               sequence={[
//                 "Java Developer",
//                 1800,
//                 "Software Developer",
//                 1800,
//                 "Full-Stack Engineer",
//                 1800,
//               ]}
//               wrapper="span"
//               speed={45}
//               repeat={Infinity}
//             />

//           </h2>

//           {/* Description */}

//           <p className={`mb-10 text-lg leading-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>

//             Passionate Java Full Stack Developer with one year of professional
//             experience at Cognizant. I enjoy building scalable backend systems
//             and responsive web applications using Java, React.js, SQL and
//             modern web technologies. Currently looking for Software Engineer
//             and Java Full Stack Developer opportunities.

//           </p>

//           {/* Socials */}

//           <div className="mb-10 flex items-center gap-6">

//             <a
//               href="https://linkedin.com/"
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
//               href="https://github.com/"
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
//               href="https://twitter.com/"
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
//               href="mailto:yourmail@gmail.com"
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
//               href="/resume.pdf"
//               download
//               className={`
//               ml-6
//               flex
//               items-center
//               gap-3
//               rounded-full
//               border
//               px-6
//               py-3
//               font-semibold
//               transition-all
//               duration-300
//               hover:scale-105
//               bg-gradient-to-r
//               bg-[length:200%_100%]
//               bg-left
//               hover:bg-right
//               ${
//                 isDark
//                   ? "border-amber-300/50 from-amber-200 via-yellow-400 to-amber-500 text-slate-900 hover:shadow-[0_0_25px_rgba(245,158,11,0.45)]"
//                   : "border-indigo-900/20 from-slate-800 via-indigo-700 to-slate-900 text-amber-200 hover:shadow-[0_0_25px_rgba(49,46,129,0.35)]"
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
//           className="relative"
//         >

//           {/* Glow */}

//           <div
//             className={`absolute inset-0 rounded-full blur-3xl opacity-30 bg-gradient-to-r ${
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
//               p-[5px]
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
//               className={`h-[420px] w-[420px] rounded-full object-cover ${
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
        className={`absolute left-4 top-24 h-40 w-40 rounded-full blur-[90px] sm:left-20 sm:top-32 sm:h-72 sm:w-72 sm:blur-[140px] ${
          isDark ? "bg-violet-700/20" : "bg-amber-300/30"
        }`}
      />

      <div
        className={`absolute right-4 bottom-10 h-48 w-48 rounded-full blur-[100px] sm:right-20 sm:bottom-20 sm:h-80 sm:w-80 sm:blur-[160px] ${
          isDark ? "bg-cyan-500/20" : "bg-indigo-300/30"
        }`}
      />

      {/* Main Container */}

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-14 px-6 pt-28 pb-16 sm:flex-row sm:justify-between sm:gap-8 sm:px-8 sm:pt-20 sm:pb-0">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center sm:text-left"
        >

          {/* Greeting */}

          <p className={`mb-3 lg:text-left text-lg sm:text-center sm:text-xl  ${isDark ? "text-slate-300" : "text-slate-500"}`}>
            HI, I'M 👋
          </p>

          {/* Name */}

          <h1 className="mb-4 lg:text-left font-extrabold leading-tight sm:text-5xl sm:text-center lg:text-6xl">

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
            className={`mb-8 bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent lg:text-left sm:text-center sm:text-2xl lg:text-3xl ${
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

          <p className={`mb-10 lg:text-left text-base leading-7 sm:text-center sm:text-lg sm:leading-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>

            Fascinated by the invisible logic that powers everything around us, I channel that curiosity into building systems that don't just function — they transform ideas into experiences people remember.Every project is a chance to turn that fascination into something real, something people actually feel.


          </p>

          {/* Socials */}

          <div className="mt-4 mb-10 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-6">

            <a
              href="https://www.linkedin.com/in/shivanigurumurthy/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <FaLinkedin
                size={28}
                className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-cyan-400 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              />
            </a>

            <a
              href="https://github.com/GurumurthyShivani"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <FaGithub
                size={28}
                className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-violet-400 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              />
            </a>

            <a
              href="https://x.com/Neethu_2910"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <FaXTwitter
                size={28}
                className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 ${
                  isDark
                    ? "text-slate-300 group-hover:text-white"
                    : "text-slate-500 group-hover:text-slate-900"
                }`}
              />
            </a>

            <a
              href="mailto:shivanigurumurthy10@gmail.com"
              className="group"
            >
              <MdEmail
                size={31}
                className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-pink-400 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              />
            </a>

            {/* Resume */}

            <a
            href="https://drive.google.com/uc?export=download&id=16JJMIQ82lnFPBYhBXl61vy-CglvKfMfo"
               download="Shivani_Gurumurthy_Resume.pdf"
              className={`
              flex
              items-center
              gap-3
              rounded-2xl
              border
              px-4
              py-2.5
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              bg-gradient-to-r
              bg-[length:200%_100%]
              bg-left
              hover:bg-right
              sm:ml-2
              sm:px-6
              sm:py-3
              sm:text-base
              ${
                isDark
                  ? //"border-amber-300/50 from-amber-200 via-yellow-400 to-amber-500 text-slate-900 hover:shadow-[0_0_25px_rgba(245,158,11,0.45)]"
                  "border-indigo-900/20 from-slate-800 via-indigo-700 to-slate-900 text-white hover:shadow-[0_0_25px_rgba(49,46,129,0.35)]"
                  : "border-cyan-900/30 from-cyan-950 via-teal-600 to-cyan-950 text-white shadow-cyan-500/20 hover:shadow-cyan-500/40"
              }
              `}
            >
              Resume

              <HiArrowDownTray size={20} />

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
            className={`absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-r sm:blur-3xl ${
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
              p-[4px]
              sm:p-[5px]
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
              className={`h-[200px] w-[200px] rounded-full object-cover sm:h-[280px] sm:w-[280px] lg:h-[420px] lg:w-[420px] ${
                isDark ? "bg-[#050816]" : "bg-[#FBF9F5]"
              }`}
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}