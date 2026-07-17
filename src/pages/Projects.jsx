// import Section from '../components/Section'
// import { projects } from '../data/projects'
// import ProjectCard from '../components/ProjectCard'

// export default function Projects() {
//   return (
//     <Section id="projects">
//       <div className="text-center mt-10">
//   <p
//     className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${
//       isDark ? "text-white" : "text-black"
//     }`}
//   >
//     Selected Work
//   </p>

//  <h1 className="mb-4 font-extrabold leading-tight sm:text-5xl sm:text-center lg:text-5xl">

//             <span
//               className={`bg-gradient-to-r bg-clip-text text-transparent lg:text-6xl ${
//                 isDark
//                   ? "from-green-500 via-teal-400 to-purple-500"
//                   : "from-indigo-700 via-fuchsia-600 to-amber-500"
//               }`}
//             >

//               INNOVATIVE PROJECTS

//             </span>

//           </h1>

//   <div className="w-28 h-[3px] bg-gradient-to-r from-transparent via-[#133aba]  to-transparent mx-auto mt-6 rounded-full" />
// </div>

//       {/* <div className="row g-4 max-h-[65vh] overflow-y-auto pr-1">
//         {projects.map((project) => (
//           <div className="col-12 col-md-6 col-lg-4 mb-4" key={project.name}>
//             <ProjectCard project={project} />
//           </div>
//         ))}
//       </div> */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//   {projects.map((project) => (
//     <ProjectCard key={project.name} project={project} />
//   ))}
// </div>
//     </Section>
//   )
// }

// import { useEffect, useState } from "react";
// import { HiOutlineCollection } from "react-icons/hi";
// import Section from "../components/Section";
// import { projects } from "../data/projects";
// import ProjectCard from "../components/ProjectCard";

// export default function Projects() {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     const root = document.documentElement;

//     setTheme(
//       root.getAttribute("data-theme") ||
//         localStorage.getItem("theme") ||
//         "dark"
//     );

//     const observer = new MutationObserver(() => {
//       setTheme(root.getAttribute("data-theme") || "dark");
//     });

//     observer.observe(root, {
//       attributes: true,
//       attributeFilter: ["data-theme"],
//     });

//     return () => observer.disconnect();
//   }, []);

//   const isDark = theme === "dark";

//   return (
//     <Section id="projects">
//       {/* Heading */}

//       <div className="mb-12 text-center sm:mb-14">
//         <p
//           className={`mb-3 text-xs font-semibold uppercase tracking-[0.35em] sm:text-sm ${
//             isDark ? "white" : "black"
//           }`}
//         >
//           Selected Work
//         </p>

//         <h1 className="flex items-center justify-center gap-3 sm:gap-4">
//           <HiOutlineCollection
//             className={`h-8 w-8 sm:h-10 sm:w-10 lg:h-10 lg:w-10 ${
//               isDark ? "white" : "black"
//             }`}
//           />

//           <span
//             className={`bg-gradient-to-r bg-clip-text text-transparent font-bold leading-tight
//               text-2xl
//               sm:text-4xl
//               md:text-5xl
//               lg:text-4xl
//               ${
//                 isDark
//                   ? "from-green-500 via-teal-400 to-purple-500"
//                   : "from-indigo-700 via-fuchsia-600 to-amber-500"
//               }`}
//           >
//             INNOVATIVE PROJECTS
//           </span>
//         </h1>

//         <div
//           className={`mx-auto mt-4 h-[3px] w-24 rounded-full sm:w-28 lg:w-32 bg-gradient-to-r ${
//             isDark
//               ? "from-transparent via-cyan-400 to-transparent"
//               : "from-transparent via-indigo-600 to-transparent"
//           }`}
//         />
//       </div>

//       {/* Projects */}

//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-10">
//         {projects.map((project) => (
//           <ProjectCard key={project.name} project={project} />
//         ))}
//       </div>
//     </Section>
//   );
// }


// import { useEffect, useState } from "react";
// import { HiOutlineSquares2X2 } from "react-icons/hi2";
// import PROJECTS from "../data/projects";
// import ProjectCard from "../Components/Projectcard";

// const ALL_FILTER = "All";

// export default function Projects() {
//   const [theme, setTheme] = useState("dark");
//   const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

//   useEffect(() => {
//     const root = document.documentElement;
//     setTheme(root.getAttribute("data-theme") || localStorage.getItem("theme") || "dark");
//     const observer = new MutationObserver(() => {
//       setTheme(root.getAttribute("data-theme") || "dark");
//     });
//     observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
//     return () => observer.disconnect();
//   }, []);

//   const isDark = theme === "dark";
//   const accent = isDark ? "text-cyan-400" : "text-indigo-600";

//   if (!Array.isArray(PROJECTS)) {
//     console.error(
//       "Projects.jsx: expected PROJECTS to be an array from ./projectsData, got:",
//       PROJECTS
//     );
//     return (
//       <section id="projects" className="pt-24 pb-16 text-center text-sm text-red-400">
//         Couldn't load project data — check the import in Projects.jsx.
//       </section>
//     );
//   }

//   const stacks = [ALL_FILTER, ...new Set(PROJECTS.flatMap((p) => p.stack))];

//   const filtered =
//     activeFilter === ALL_FILTER
//       ? PROJECTS
//       : PROJECTS.filter((p) => p.stack.includes(activeFilter));

//   return (
//     <section id="projects" className="relative scroll-mt-24 pt-24 pb-16">
//       <div className="mx-auto max-w-6xl px-6 sm:px-8">
//         {/* Heading */}
//         <div className="text-center mt-10">
//           <p
//             className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${
//               isDark ? "text-white" : "text-black"
//             }`}
//           >
//             My Work
//           </p>

//           <h1 className="mb-4 flex items-center justify-center gap-4 font-extrabold leading-tight">
//             <HiOutlineSquares2X2
//               className={`h-10 w-10 sm:h-12 sm:w-12 lg:h-10 lg:w-10 ${
//                 isDark ? "text-white" : "text-black"
//               }`}
//             />
//             <span
//               className={`bg-gradient-to-r bg-clip-text text-4xl text-transparent font-bold sm:text-5xl lg:text-5xl ${
//                 isDark
//                   ? "from-green-500 via-teal-400 to-purple-500"
//                   : "from-indigo-700 via-fuchsia-600 to-amber-500"
//               }`}
//             >
//               PROJECTS
//             </span>
//           </h1>

//           <div className="w-28 h-[3px] bg-gradient-to-r from-transparent via-[#133aba] to-transparent mx-auto mt-6 rounded-full" />
//         </div>

//         {/* Filter chips */}
//         <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
//           {stacks.map((stack) => {
//             const active = stack === activeFilter;
//             return (
//               <button
//                 key={stack}
//                 onClick={() => setActiveFilter(stack)}
//                 className={`
//                   rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide
//                   transition-all duration-300 ease-out active:scale-95
//                   ${
//                     active
//                       ? isDark
//                         ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.25)]"
//                         : "border-indigo-500/60 bg-indigo-500/10 text-indigo-700 shadow-[0_0_16px_rgba(99,102,241,0.2)]"
//                       : isDark
//                       ? "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-slate-200"
//                       : "border-slate-300 bg-white/40 text-slate-500 hover:border-slate-400 hover:text-slate-800"
//                   }
//                 `}
//               >
//                 {stack}
//               </button>
//             );
//           })}
//         </div>

//         {/* Project grid */}
//         <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((project, i) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               isDark={isDark}
//               accent={accent}
//               delay={i * 90}
//             />
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <p className={`mt-16 text-center text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>
//             No projects use that stack yet — check back soon.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import PROJECTS from "../data/projects";
import ProjectCard from "../Components/Projectcard";


export default function Projects() {
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
  const accent = isDark ? "text-cyan-400" : "text-indigo-600";

  if (!Array.isArray(PROJECTS)) {
    console.error(
      "Projects.jsx: expected PROJECTS to be an array from ./projectsData, got:",
      PROJECTS
    );
    return (
      <section id="projects" className="pt-24 pb-16 text-center text-sm text-red-400">
        Couldn't load project data — check the import in Projects.jsx.
      </section>
    );
  }

  return (
    <section id="projects" 
    className={`relative scroll-mt-24 pt-24 pb-16
    ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Heading */}
        <div className="text-center mt-10">
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            My Work
          </p>

          <h1 className="mb-4 flex items-center justify-center gap-4 font-extrabold leading-tight">
            <HiOutlineSquares2X2
              className={`h-10 w-10 sm:h-12 sm:w-12 lg:h-10 lg:w-10 ${
                isDark ? "text-white" : "text-black"
              }`}
            />
            <span
              className={`bg-gradient-to-r bg-clip-text text-4xl text-transparent font-bold sm:text-5xl lg:text-5xl ${
                isDark
                  ? "from-green-500 via-teal-400 to-purple-500"
                  : "from-purple-800 via-cyan-500 to-blue-800"
              }`}
            >
              PROJECTS
            </span>
          </h1>

          <div className="w-28 h-[3px] bg-gradient-to-r from-transparent via-[#133aba] to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* Project grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              isDark={isDark}
              accent={accent}
              delay={i * 90}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

