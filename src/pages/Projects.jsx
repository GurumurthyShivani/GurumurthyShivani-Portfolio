// import { useEffect, useState } from "react";
// import { HiOutlineSquares2X2 } from "react-icons/hi2";
// import PROJECTS from "../data/projects";
// import ProjectCard from "../Components/Projectcard";


// export default function Projects() {
//   const [theme, setTheme] = useState("dark");

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

//   return (
//     <section id="projects" 
//     className={`relative scroll-mt-24 pt-24 pb-16
//     ${
//         isDark ? "bg-[#050816]" : "bg-white"
//       }`}
//     >
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
//                   : "from-purple-800 via-cyan-500 to-blue-800"
//               }`}
//             >
//               PROJECTS
//             </span>
//           </h1>

//           <div className="w-28 h-[3px] bg-gradient-to-r from-transparent via-[#133aba] to-transparent mx-auto mt-6 rounded-full" />
//         </div>

//         {/* Project grid */}
//         <div className="mt-12 grid gap-6 sm:grid-cols-2">
//           {PROJECTS.map((project, i) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               isDark={isDark}
//               accent={accent}
//               delay={i * 90}
//             />
//           ))}
//         </div>
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
    className={`relative scroll-mt-24 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24
    ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center mt-6 sm:mt-10">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.3em] sm:text-sm sm:tracking-[0.35em] ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            My Work
          </p>

          <h1 className="mb-4 flex items-center justify-center gap-2 font-extrabold leading-tight sm:gap-4">
            <HiOutlineSquares2X2
              className={`h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 ${
                isDark ? "text-white" : "text-black"
              }`}
            />
            <span
              className={`bg-gradient-to-r bg-clip-text text-3xl text-transparent font-bold sm:text-4xl lg:text-5xl ${
                isDark
                  ? "from-green-500 via-teal-400 to-purple-500"
                  : "from-purple-800 via-cyan-500 to-blue-800"
              }`}
            >
              PROJECTS
            </span>
          </h1>

          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#133aba] to-transparent mx-auto mt-6 rounded-full sm:w-28" />
        </div>

        {/* Project grid */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
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