// import Section from '../components/Section'
// import { skillGroups } from '../data/skills'
// import SkillBadge from '../components/SkillBadge'

// export default function Skills() {
//   return (
//     <Section id="skills">
//       <p className="font-mono text-sm tracking-[0.2em] uppercase text-[color:var(--color-steel)]">
//         What I work with
//       </p>
//       <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[color:var(--color-text)]">
//         Skills
//       </h2>
//       <div className="rule-gold w-24 mt-6 mb-10" />

//       <div className="flex flex-col gap-8 max-h-[60vh] overflow-y-auto pr-2">
//         {skillGroups.map((group) => (
//           <div key={group.category}>
//             <h3 className="font-mono text-sm tracking-wide text-[color:var(--color-gold-soft)] mb-4">
//               {group.category}
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {group.skills.map((skill) => (
//                 <SkillBadge key={skill.name + group.category} {...skill} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   )
// }


// import { useState } from "react";
// import Section from "../components/Section";
// import SkillBadge from "../components/SkillBadge";
// import { skills } from "../data/skills";

// const filters = [
//   "All",
//   "Languages",
//   "Frontend",
//   "Backend",
//   "Database",
//   "Tools",
//   "Others",
// ];

// export default function Skills() {
//   const [active, setActive] = useState("All");
  

//   const filteredSkills =
//     active === "All"
//       ? skills
//       : skills.filter((skill) => skill.category === active);

//   return (
//     <Section id="skills">
//       <div className="text-center mb-14">
//    <p
//     className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${
//       isDark ? "text-white" : "text-black"
//     }`}
//   >
//     TECK STACK
//   </p>

//   <h1 className="mb-4 flex items-center justify-center gap-4 font-extrabold leading-tight">
  
//               <span
//                 className={`bg-gradient-to-r bg-clip-text text-4xl text-transparent sm:text-5xl lg:text-6xl ${
//                   isDark
//                     ? "from-green-500 via-teal-400 to-purple-500"
//                     : "from-indigo-700 via-fuchsia-600 to-amber-500"
//                 }`}
//               >
//                 SKILLS AND TECHNOLOGIES
//               </span>
//           </h1>
//           <div className="w-28 h-[3px] bg-gradient-to-r from-transparent via-[#133aba]  to-transparent mx-auto mt-2 rounded-full" />
          
          
// </div>


//       {/* Filter Buttons */}

//     <div className="flex flex-wrap justify-center gap-4 mb-12">
//   {filters.map((filter) => (
//     <button
//   key={filter}
//   onClick={() => setActive(filter)}
//   className={`px-8 py-3 rounded-full
//   border transition-all duration-300
//   backdrop-blur-md font-medium tracking-wide

//   ${
//     active === filter
//       ? `
//       border-[#d4af37]
//       text-[#f3d27a]
//       bg-gradient-to-r
//       from-[#d4af37]/20
//       via-[#f3d27a]/10
//       to-[#b8860b]/20
//       shadow-[0_0_25px_rgba(212,175,55,0.35)]
//       scale-105
//       `
//       : `
//       border-[#3d4658]
//       text-gray-300
//       bg-gradient-to-r
//       from-[#d4af37]/5
//       via-transparent
//       to-[#b8860b]/5
//       hover:border-[#d4af37]
//       hover:text-[#f3d27a]
//       hover:bg-gradient-to-r
//       hover:from-[#d4af37]/15
//       hover:via-[#f3d27a]/8
//       hover:to-[#b8860b]/15
//       hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]
//       hover:-translate-y-1
//       `
//   }`}
// >
//   {filter}
// </button>
//   ))}
// </div>

//       {/* Skills */}

//       <div className="flex flex-wrap justify-center gap-4">
//         {filteredSkills.map((skill) => (
//           <SkillBadge key={skill.name} {...skill} />
//         ))}
//       </div>
//     </Section>
//   );
// }


import { useEffect, useState } from "react";
import { HiOutlineCode } from "react-icons/hi";
import Section from "../components/Section";
import SkillBadge from "../components/SkillBadge";
import { skills } from "../data/skills";

const filters = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  // "Others",
];

export default function Skills() {
  const [active, setActive] = useState("All");
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

  const filteredSkills =
    active === "All"
      ? skills
      : skills.filter((skill) => skill.category === active);

  return (
    <Section id="skills"
    className={` 
      ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      {/* Heading */}

      <div className="mb-10 sm:mb-12 lg:mb-14 text-center">
  <p
    className={`mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] ${
      isDark ? "white" : "black"
    }`}
  >
    TECH STACK
  </p>

  <h1 className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
    <HiOutlineCode
      className={`h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 ${
        isDark ? "white" : "black"
      }`}
    />

    <span
      className={`bg-gradient-to-r bg-clip-text text-transparent font-bold leading-tight
      text-2xl
      sm:text-4xl
      md:text-5xl
      lg:text-5xl
      ${
        isDark
          ? "from-green-500 via-teal-400 to-purple-500"
          : "from-purple-800 via-cyan-500 to-blue-800"
      }`}
    >
      SKILLS & EXPERTISE
    </span>
  </h1>

  <div
    className={`mx-auto mt-3 h-[3px] w-24 sm:w-28 lg:w-32 rounded-full bg-gradient-to-r ${
      isDark
        ? "from-transparent via-cyan-400 to-transparent"
        : "from-transparent via-indigo-600 to-transparent"
    }`}
  />
</div>

      {/* Filter Buttons */}

      <div className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-4">
  {filters.map((filter) => (
    <button
      key={filter}
      onClick={() => setActive(filter)}
      className={`!rounded-2xl border
      px-4 py-2
      text-sm
      sm:px-6 sm:py-3 sm:text-base
      lg:px-8
      transition-all duration-300
      backdrop-blur-md
      font-medium
      ${
        active === filter
          ? isDark
            ? `
              border-cyan-400
              text-cyan-300
              bg-cyan-400/10
              shadow-[0_0_18px_rgba(34,211,238,0.35)]
              scale-105
            `
            : `
              border-indigo-600
              text-slate-700
              bg-green-100
              shadow-md
              scale-105
            `
          : isDark
          ? `
              border-white/10
              text-slate-300
              bg-white/[0.03]
              hover:border-cyan-400
              hover:text-cyan-300
              hover:bg-cyan-400/10
              hover:-translate-y-1
            `
          : `
              border-slate-300
              text-slate-700
              bg-white
              hover:border-indigo-600
              hover:text-indigo-700
              hover:bg-indigo-50
              hover:-translate-y-1
            `
      }`}
    >
      {filter}
    </button>
    
  ))}
</div>

      {/* Skills */}

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
  {filteredSkills.map((skill) => (
    <SkillBadge key={skill.name} {...skill} />
  ))}
</div>
    </Section>
  );
}


