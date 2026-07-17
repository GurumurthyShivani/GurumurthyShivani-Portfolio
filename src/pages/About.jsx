// import Section from '../components/Section'
// import profileImg from '../assets/profile-placeholder.svg.jpeg'

// export default function About() {
//   return (
//     <Section id="about">
//       <p className="font-mono text-sm tracking-[0.2em] uppercase text-[color:var(--color-steel)]">
//         Get to know me
//       </p>
//       <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[color:var(--color-text)]">
//         About
//       </h2>
//       <div className="rule-gold w-24 mt-6 mb-12" />

//       <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-12 items-start">
//         <img
//           src={profileImg}
//           alt="Shivani Gurumurthy"
//           className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border border-[color:var(--color-border)] mx-auto md:mx-0"
//         />
//         <div className="flex flex-col gap-4 text-[color:var(--color-text-muted)] leading-relaxed">
//           <p>
//             I'm a Java Full Stack Developer with an Information Technology
//             background and over a year of professional experience at
//             Cognizant, alongside a strong foundation in software engineering
//             principles, full-stack development, and problem-solving.
//           </p>
//           <p>
//             I'm proficient in <span className="text-[color:var(--color-text)]">Java, Spring Boot, React.js,
//             JDBC, Servlets, SQL, HTML, CSS, JavaScript,</span> and RESTful
//             APIs — with hands-on experience building responsive, scalable web
//             applications, integrating databases, handling APIs, and crafting
//             clean front-end interfaces.
//           </p>
//           <div className="mt-2 flex flex-wrap gap-3">
//             <InfoPill label="Location" value="Hyderabad, Telangana" />
//             <InfoPill label="Email" value="shivanigurumurthy10@gmail.com" />
//             <InfoPill label="Phone" value="+91 939-054-9536" />
//           </div>
//         </div>
//       </div>
//     </Section>
//   )
// }

// function InfoPill({ label, value }) {
//   return (
//     <div className="px-4 py-2 rounded-sm bg-[color:var(--color-surface)] border border-[color:var(--color-border)]">
//       <p className="font-mono text-[10px] uppercase tracking-wide text-[color:var(--color-steel)]">{label}</p>
//       <p className="text-sm text-[color:var(--color-text)] mt-0.5">{value}</p>
//     </div>
//   )
// }


// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import {
//   FaCode,
//   FaJava,
//   FaLaptopCode,
//   FaLightbulb,
// } from "react-icons/fa";

// export default function About() {
//   const cards = [
//     {
//       icon: <FaJava size={30} />,
//       title: "Java Developer",
//       desc: "Passionate about building scalable backend applications using Java, JDBC, Servlets, SQL and modern development practices.",
//     },
//     {
//       icon: <FaLaptopCode size={30} />,
//       title: "Full Stack",
//       desc: "Building responsive and interactive web applications using React.js, JavaScript, HTML, CSS and REST APIs.",
//     },
//     {
//       icon: <FaCode size={30} />,
//       title: "Problem Solver",
//       desc: "Enjoy solving real-world problems with clean architecture, reusable code and user-focused solutions.",
//     },
//     {
//       icon: <FaLightbulb size={30} />,
//       title: "Always Learning",
//       desc: "Continuously learning Spring Boot, Microservices, Cloud and modern software engineering best practices.",
//     },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative min-h-screen bg-[color:var(--color-ink)] overflow-hidden py-24"
//     >
//       {/* Background Glow */}

//       <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[140px]" />

//       <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: .8 }}
//           className="text-center"
//         >

//           <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
//             Get To Know Me
//           </p>

//           <h2 className="mt-4 text-5xl font-extrabold">

//             <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent">

//               About Me

//             </span>

//           </h2>

//           <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500" />

//           <div className="mt-6 text-xl font-semibold text-cyan-400 h-8">

//             <TypeAnimation
//               sequence={[
//                 "Java Full Stack Developer",
//                 1800,
//                 "Software Engineer",
//                 1800,
//                 "React Developer",
//                 1800,
//               ]}
//               speed={45}
//               repeat={Infinity}
//             />

//           </div>

//         </motion.div>

//         {/* Main Content */}

//         <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">

//           {/* Left */}

//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: .8 }}
//             viewport={{ once: true }}
//           >

//             <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

//               <h3 className="text-3xl font-bold text-[color:var(--color-text)] mb-6">

//                 Hello! 👋

//               </h3>

//               <p className="text-[color:var(--color-text-muted)] leading-8 mb-5">

//                 I'm <span className="font-semibold text-cyan-400">Shivani Gurumurthy</span>,
//                 an enthusiastic Java Full Stack Developer with an Information
//                 Technology background and professional experience at Cognizant.

//               </p>

//               <p className="text-[color:var(--color-text-muted)] leading-8 mb-5">

//                 I enjoy creating scalable backend systems, responsive user
//                 interfaces and clean software architectures that solve
//                 real-world problems.

//               </p>

//               <p className="text-[color:var(--color-text-muted)] leading-8">

//                 Currently I'm looking for opportunities as a Java Developer,
//                 Software Engineer or Full Stack Developer where I can learn,
//                 contribute and grow while building impactful applications.

//               </p>

//             </div>

//           </motion.div>

//           {/* Right */}

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

//             {cards.map((card, index) => (

//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: .6,
//                   delay: index * .15,
//                 }}
//                 viewport={{ once: true }}
//                 whileHover={{
//                   y: -10,
//                   scale: 1.03,
//                 }}
//                 className="
//                 rounded-3xl
//                 border
//                 border-white/10
//                 bg-white/5
//                 backdrop-blur-xl
//                 p-6
//                 transition-all
//                 duration-500
//                 hover:border-cyan-400/50
//                 hover:shadow-[0_0_35px_rgba(34,211,238,.15)]
//                 "
//               >

//                 <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 p-4 text-white">

//                   {card.icon}

//                 </div>

//                 <h4 className="text-xl font-bold text-[color:var(--color-text)]">

//                   {card.title}

//                 </h4>

//                 <p className="mt-4 leading-7 text-[color:var(--color-text-muted)]">

//                   {card.desc}

//                 </p>

//               </motion.div>

//             ))}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineAcademicCap, HiOutlineLightBulb } from "react-icons/hi";

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Technologies", value: "10+" },
  { label: "Projects Built", value: "8+" },
  { label: "Coffee Cups", value: "∞" },
];

const badges = [
  { icon: HiOutlineCode, text: "Java Full Stack" },
  { icon: HiOutlineLightBulb, text: "Problem Solving" },
  { icon: HiOutlineAcademicCap, text: "Always Learning" },
];

export default function About() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;

    setTheme(root.getAttribute("data-theme") || localStorage.getItem("theme") || "dark");

    const observer = new MutationObserver(() => {
      setTheme(root.getAttribute("data-theme") || "dark");
    });

    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`relative min-h-screen scroll-mt-24 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      <div className="text-center mt-10">
  <p
    className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${
      isDark ? "text-white" : "text-black"
    }`}
  >
    Get To Know
  </p>

 <h1 className="mb-4 font-extrabold leading-tight sm:text-5xl sm:text-center lg:text-5xl">

            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent font-bold lg:text-6xl ${
                isDark
                  ? "from-green-500 via-teal-400 to-purple-500"
                  : "from-purple-800 via-cyan-500 to-blue-800"
              }`}
            >

              ABOUT ME

            </span>

          </h1>

  <div className="w-28 h-[3px] bg-gradient-to-r from-transparent via-[#133aba]  to-transparent mx-auto mt-6 rounded-full" />
  
  </div>

      
      {/* Background Glow */}

      <div
        className={`absolute right-4 top-24 h-40 w-40 rounded-full blur-[90px] sm:right-24 sm:top-20 sm:h-72 sm:w-72 sm:blur-[140px] ${
          isDark ? "bg-cyan-500/20" : "bg-indigo-300/30"
        }`}
      />

      <div
        className={`absolute left-4 bottom-16 h-48 w-48 rounded-full blur-[100px] sm:left-16 sm:bottom-24 sm:h-80 sm:w-80 sm:blur-[160px] ${
          isDark ? "bg-violet-700/20" : "bg-amber-300/30"
        }`}
      />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 py-24 sm:px-8 lg:flex-row lg:gap-20">


        {/* LEFT — Stat / gradient panel */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="order-2 lg:order-1 relative w-full max-w-sm lg:w-fit lg:max-w-none shrink-0"
        >
          {/* Corner accents */}

          {/* <div className={`absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 rounded-tl-2xl ${isDark ? "border-amber-300/60" : "border-indigo-400/60"}`} />
          <div className={`absolute -right-3 -bottom-3 h-10 w-10 border-r-2 border-b-2 rounded-br-2xl ${isDark ? "border-amber-300/60" : "border-indigo-400/60"}`} /> */}

          {/* Gradient ring frame */}

          <div
            className={`rounded-3xl bg-gradient-to-br p-[2px] ${
              isDark
                ? "from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_60px_rgba(139,92,246,0.25)]"
                :"from-blue-500 via-teal-400 to-indigo-500 shadow-[0_0_60px_rgba(59,130,246,0.18)]"
            }`}
          >
            <div
              className={`rounded-[calc(1.5rem-2px)] p-8 sm:p-10 ${
                isDark ? "bg-slate-950/90" : "bg-white/90"
              } backdrop-blur-xl`}
            >

              <p className={`mb-7 lg:text-center text-[11px] font-semibold uppercase tracking-[0.3em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                By the numbers
              </p>

              {/* Stats grid */}

              {/* <div className="space-y-8">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={i % 2 === 0 ? `pr-6 sm:border-r ${isDark ? "sm:border-white/10" : "sm:border-slate-200"}` : "pl-0"}
                  >
                    <p
                      className={`bg-gradient-to-r bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl ${
                        isDark
                          ? "from-cyan-300 via-violet-400 to-pink-400"
                          : "from-indigo-600 via-fuchsia-600 to-amber-500"
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p className={`mt-2 text-xs font-medium tracking-wide sm:text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
                
              </div> */}
              {/* <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
  {stats.map((stat) => (
    <div
      key={stat.label}
      className={`pb-6 lg:border-b ${
        isDark ? "lg:border-white/10" : "lg:border-slate-200"
      }`}
    >
      <p
        className={`bg-gradient-to-r bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl ${
          isDark
            ? "from-cyan-300 via-violet-400 to-pink-400"
            : "from-indigo-600 via-fuchsia-600 to-amber-500"
        }`}
      >
        {stat.value}
      </p>

      <p
        className={`mt-2 text-xs font-medium tracking-wide sm:text-sm ${
          isDark ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {stat.label}
      </p>
    </div>
  ))}
              </div> */}
              <div className="grid grid-cols-2 gap-6 justify-items-center lg:flex lg:flex-col lg:items-center lg:w-fit lg:mx-auto lg:gap-8">
  {stats.map((stat, index) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className={`w-fit text-center ${
        index !== stats.length - 1
          ? isDark
            ? "lg:border-b lg:border-white/10"
            : "lg:border-b lg:border-slate-200"
          : ""
      } lg:pb-6`}
    >
      {/* Number */}
      <p
        className={`bg-gradient-to-r bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl ${
          isDark
            ? "from-cyan-300 via-violet-400 to-pink-400"
            : "from-indigo-600 via-cyan-600 to-blue-500"
        }`}
      >
        {stat.value}
      </p>

      {/* Label */}
      <p
        className={`mt-2 whitespace-nowrap text-xs font-medium sm:text-sm ${
          isDark ? "text-slate-600" : "text-slate-500"
        }`}
      >
        {stat.label}
      </p>
    </motion.div>
  ))}
</div>

            </div>
          </div>

        </motion.div>

        {/* RIGHT — Bio */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl text-center lg:text-left"
        >
           <div className="mb-10 lg:mb-16">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            <span
              className= {`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                    ? "from-sky-300 via-blue-500 to-purple-500"
                    : "from-blue-500 via-teal-400 to-indigo-500"
              }`}
            >
              Building the future, one line of code at a time.
            </span>
           </h2>
            </div>
          

          <div className="space-y-4">

            <p className={`text-base lg:text-left leading-7 sm:text-lg sm:text-center sm:leading-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              I'm a Java Full Stack Developer with a strong foundation in Java, Spring Boot, React.js, SQL, and modern web technologies. After earning my B.Tech in Information Technology, I gained professional experience at Cognizant before transitioning into software development through intensive hands-on training and real-world projects.
            </p>

            <p className={`text-base lg:text-left leading-7 sm:text-lg sm:text-center sm:leading-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              I enjoy building scalable, maintainable applications with clean code and intuitive user experiences. From developing REST APIs with Spring Boot to creating responsive interfaces with React.js, I focus on writing software that is reliable, efficient, and easy to maintain.
            </p>

            <p className={`text-base lg:text-left leading-7 sm:text-lg sm:text-center sm:leading-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              I'm passionate about continuous learning and constantly exploring new technologies, system design, and backend architecture. Every project is an opportunity to improve my skills, solve meaningful problems, and build software that is both functional and thoughtfully crafted.            
              </p>

          </div>

          <div className={`my-10 h-px w-full ${isDark ? "bg-white/10" : "bg-slate-200"}`} />

          {/* Badges */}

          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {badges.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className={`
                  flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium tracking-wide
                  ${
                    isDark
                      ? "border-white/10 bg-white/[0.03] text-slate-300"
                      : "border-slate-200 bg-white text-slate-600"
                  }
                `}
              >
                <Icon className={isDark ? "text-amber-300" : "text-indigo-600"} size={15} />
                {text}
              </span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}