// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Section from "../Components/Section";
// import ExperienceCard from "../Components/Experiencecard";
// import { HiOutlineBriefcase } from "react-icons/hi";
// import { experience } from "../data/experience";

// export default function Experience() {
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
//     <Section id="experience"
//      className={`${
//         isDark ? "bg-[#050816]" : "bg-white"
//       }`}
//     >
//       {/* Heading */}

//       <div className="text-center mt-10">
//   <p
//     className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${
//       isDark ? "white" : "black"
//     }`}
//   >
//     Professional Journey
//   </p>

//  <h1 className="mb-4 flex items-center justify-center gap-4 font-extrabold leading-tight">
//              <HiOutlineBriefcase
//              className={`h-10 w-10 sm:h-12 sm:w-12 lg:h-10 lg:w-10 ${
//                isDark ? "white" : "black"
//              }`}
//            />
 
//              <span
//                className={`bg-gradient-to-r bg-clip-text text-4xl text-transparent font-bold sm:text-5xl lg:text-5xl ${
//                  isDark
//                    ? "from-green-500 via-teal-400 to-purple-500"
//                    : "from-purple-800 via-cyan-500 to-blue-800"
//                }`}
//              >
//                EXPERINECE
//              </span>
//          </h1>

//   <div className="w-28 h-[3px] bg-gradient-to-r from-transparent via-[#133aba]  to-transparent mx-auto mt-6 rounded-full" />
// </div>

//       {/* Timeline */}

// <div className="relative mx-auto max-w-4xl lg:max-w-5xl">
//         {/* Animated Vertical Line */}

//         <motion.div
//           initial={{ scaleY: 0 }}
//           whileInView={{ scaleY: 1 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 1.5 }}
//           style={{ originY: 0 }}
//           className={`absolute left-4 top-0 bottom-0 w-[3px] rounded-full ${
//             isDark
//               ? "bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500"
//               : "bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500"
//           }`}
//         />

//         {/* Cards */}

// <div className="mt-5 space-y-8 sm:space-y-10">
//             {experience.map((job, index) => (
//             <ExperienceCard
//               key={job.role + job.company}
//               job={job}
//               index={index}
//               isDark={isDark}
//             />
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }



import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "../Components/Section";
import ExperienceCard from "../Components/Experiencecard";
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

      <div className="text-center mt-6 sm:mt-8 lg:mt-10">
  <p
    className={`mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.35em] ${
      isDark ? "text-white" : "text-black"
    }`}
  >
    Professional Journey
  </p>

 <h1 className="mb-4 flex items-center justify-center gap-2 sm:gap-4 font-extrabold leading-tight">
             <HiOutlineBriefcase
             className={`h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 ${
               isDark ? "text-white" : "text-black"
             }`}
           />
 
             <span
               className={`bg-gradient-to-r bg-clip-text text-3xl text-transparent font-bold sm:text-5xl lg:text-5xl ${
                 isDark
                   ? "from-green-500 via-teal-400 to-purple-500"
                   : "from-purple-800 via-cyan-500 to-blue-800"
               }`}
             >
               EXPERIENCE
             </span>
         </h1>

  <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#133aba] to-transparent mx-auto mt-6 rounded-full sm:w-28" />
</div>

      {/* Timeline */}

<div className="relative mx-auto max-w-4xl px-1 sm:px-0 lg:max-w-5xl">
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

<div className="mt-5 space-y-6 sm:space-y-8 lg:space-y-10">
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