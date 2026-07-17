// import Section from '../components/Section'
// import { experience } from '../data/experience'
// import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa'

// export default function Experience() {
//   return (
//     <Section id="experience">
//        <div className="text-center mt-10">
//   <p
//     className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${
//       isDark ? "text-white" : "text-black"
//     }`}
//   >
//     Get To Know
//   </p>

//  <h1 className="mb-4 font-extrabold leading-tight sm:text-5xl sm:text-center lg:text-5xl">

//             <span
//               className={`bg-gradient-to-r bg-clip-text text-transparent lg:text-6xl ${
//                 isDark
//                   ? "from-green-500 via-teal-400 to-purple-500"
//                   : "from-indigo-700 via-fuchsia-600 to-amber-500"
//               }`}
//             >

//               ABOUT ME

//             </span>

//           </h1>

//   <div className="w-28 h-[3px] bg-gradient-to-r from-transparent via-[#133aba]  to-transparent mx-auto mt-6 rounded-full" />
// </div>

//       <div className="max-h-[65vh] overflow-y-auto pr-2 flex flex-col gap-10">
//           <div className="flex flex-col gap-6">
//             {experience.map((job) => (
//               <div key={job.role + job.company} className="relative pl-6 border-l border-[color:var(--color-border)]">
//                 <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[color:var(--color-gold)]" />
//                 <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
//                   <h4 className="font-[family-name:var(--font-display)] text-xl text-[color:var(--color-text)]">
//                     {job.role} · {job.company}
//                   </h4>
//                   <span className="font-mono text-xs text-[color:var(--color-text-muted)]">{job.period}</span>
//                 </div>
//                 <p className="font-mono text-xs text-[color:var(--color-steel)] mt-1">{job.location}</p>
//                 <ul className="mt-3 space-y-2">
//                   {job.points.map((pt, i) => (
//                     <li key={i} className="text-sm text-[color:var(--color-text-muted)] leading-relaxed pl-4 relative">
//                       <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-[color:var(--color-gold)]" />
//                       {pt}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* <div>
//           <h3 className="flex items-center gap-2 font-mono text-sm text-[color:var(--color-gold-soft)] mb-5">
//             <FaGraduationCap /> Education
//           </h3>
//           <div className="flex flex-col gap-4">
//             {education.map((ed) => (
//               <div key={ed.degree} className="relative pl-6 border-l border-[color:var(--color-border)]">
//                 <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[color:var(--color-steel)]" />
//                 <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
//                   <h4 className="font-[family-name:var(--font-display)] text-xl text-[color:var(--color-text)]">{ed.degree}</h4>
//                   <span className="font-mono text-xs text-[color:var(--color-text-muted)]">{ed.period}</span>
//                 </div>
//                 <p className="font-mono text-xs text-[color:var(--color-steel)] mt-1">{ed.school} — {ed.location}</p>
//                 <p className="text-sm text-[color:var(--color-text-muted)] mt-1">{ed.detail}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h3 className="flex items-center gap-2 font-mono text-sm text-[color:var(--color-gold-soft)] mb-4">
//             <FaAward /> Achievements
//           </h3>
//           <ul className="flex flex-col gap-2">
//             {achievements.map((a) => (
//               <li key={a.title} className="text-sm text-[color:var(--color-text-muted)]">
//                 {a.title} — <span className="text-[color:var(--color-text)]">{a.issuer}</span>{' '}
//                 <a href={a.link} target="_blank" rel="noreferrer" className="text-[color:var(--color-gold)] hover:text-[color:var(--color-gold-soft)] font-mono text-xs">
//                   (View Certificate)
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div> */}
//     </Section>
//   )
// }


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "../Components/Section";
import ExperienceCard from "../Components/ExperienceCard";
import { HiOutlineBriefcase } from "react-icons/hi";
import { experience } from "../data/experience";

export default function Experience() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;

    setTheme(
      root.getAttribute("data-theme") ||
        localStorage.getItem("theme") ||
        "dark"
    );

    const observer = new MutationObserver(() => {
      setTheme(root.getAttribute("data-theme") || "dark");
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  return (
    <Section id="experience"
     className={`${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      {/* Heading */}

      <div className="text-center mt-10">
  <p
    className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${
      isDark ? "white" : "black"
    }`}
  >
    Professional Journey
  </p>

 <h1 className="mb-4 flex items-center justify-center gap-4 font-extrabold leading-tight">
             <HiOutlineBriefcase
             className={`h-10 w-10 sm:h-12 sm:w-12 lg:h-10 lg:w-10 ${
               isDark ? "white" : "black"
             }`}
           />
 
             <span
               className={`bg-gradient-to-r bg-clip-text text-4xl text-transparent font-bold sm:text-5xl lg:text-5xl ${
                 isDark
                   ? "from-green-500 via-teal-400 to-purple-500"
                   : "from-purple-800 via-cyan-500 to-blue-800"
               }`}
             >
               EXPERINECE
             </span>
         </h1>

  <div className="w-28 h-[3px] bg-gradient-to-r from-transparent via-[#133aba]  to-transparent mx-auto mt-6 rounded-full" />
</div>

      {/* Timeline */}

<div className="relative mx-auto max-w-4xl lg:max-w-5xl">
        {/* Animated Vertical Line */}

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.5 }}
          style={{ originY: 0 }}
          className={`absolute left-4 top-0 bottom-0 w-[3px] rounded-full ${
            isDark
              ? "bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500"
              : "bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500"
          }`}
        />

        {/* Cards */}

<div className="mt-5 space-y-8 sm:space-y-10">
            {experience.map((job, index) => (
            <ExperienceCard
              key={job.role + job.company}
              job={job}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}