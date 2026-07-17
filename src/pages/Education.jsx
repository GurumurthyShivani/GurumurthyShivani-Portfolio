// import { motion } from "framer-motion";
// import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
// import { education } from "../data/education";

// export default function Education() {
//   return (
//     <div className="max-w-5xl mx-auto px-6">
// <div className="flex items-center justify-center gap-3 mb-10">
//             <span className="flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 text-white">
//           <FaGraduationCap size={16} />
//         </span>

//         <h3 className="text-xl font-semibold text-white">Education</h3>

//       </div>

//       <div className="relative">
//         {/* vertical spine — draws downward as it scrolls into view, aligned under the dots */}
//         <motion.div
//           initial={{ scaleY: 0 }}
//           whileInView={{ scaleY: 1 }}
//           viewport={{ amount: 0.3, once: false }}
//           transition={{ duration: 1.1, ease: "easeInOut" }}
//           style={{ transformOrigin: "top" }}
//           className="absolute left-[12.4rem] top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-violet-500 via-cyan-400 to-pink-500 opacity-70"
//         />

//         <div className="flex flex-col gap-8">
//           {education.map((ed, i) => (
//                 <div
//                 key={ed.title}
//                 className="grid grid-cols-[11rem_3rem_1fr] items-start gap-5 mb-8"
//                 >             
//                 {/* left: period + location, outside the timeline */}
//               <div className="pr-8 text-right">

//   <p className="text-sm font-semibold text-violet-300 whitespace-nowrap leading-6">
//     August 2019
//   </p>

//   <p className="text-sm font-semibold text-violet-300 whitespace-nowrap leading-6">
//     June 2023
//   </p>

//   <div className="mt-3 flex items-center justify-end gap-2 text-sm text-[color:var(--color-text-muted)]">

//     <FaMapMarkerAlt
//       className="text-cyan-400"
//       size={12}
//     />

//     <span>{ed.location}</span>

//   </div>

//                 </div>
              

//               {/* middle: ring-and-dot marker + short connector, centered in its own column */}
//               <div className="relative flex justify-center">
//                 <motion.span
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ amount: 0.4, once: false }}
//                   transition={{ duration: 0.4, delay: i * 0.25 + 0.5, type: "spring", stiffness: 300 }}
//                   className="relative z-10 flex items-center justify-center h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#050816] shrink-0"
//                 >
//                   <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
//                 </motion.span>
//                 <motion.div
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   viewport={{ amount: 0.4, once: false }}
//                   transition={{ duration: 0.4, delay: i * 0.25 + 0.7 }}
//                   style={{ transformOrigin: "left" }}
//                     className="ml-2 mt-2 h-[2px] w-10 rounded-full bg-gradient-to-r from-cyan-400 to-transparent"               
//                 />
//               </div>

//               {/* right: content box */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ amount: 0.4, once: false }}
//                 transition={{ duration: 0.5, delay: i * 0.25 + 0.3 }}
//                 whileHover={{ scale: 1.02, x: 4 }}
//                 className="
// relative
// w-full
// min-h-[170px]
// rounded-2xl
// border
// border-white/10
// bg-white/[0.04]
// backdrop-blur-xl
// px-8
// py-7
// transition-all
// duration-500
// hover:-translate-y-1
// hover:border-cyan-400/40
// hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
// "
//               >
//                 {/* <h4 className="text-base font-semibold text-white leading-tight">{ed.title}</h4>
//                 {ed.field && <p className="text-xs text-cyan-300 mt-1">{ed.field}</p>}
//                 <p className="text-xs text-slate-400 mt-1">{ed.school}</p> */}

// <div className="flex flex-col gap-2 pr-28">
// <h3 className="text-2xl font-bold leading-snug text-[color:var(--color-text)]">    {ed.school}
//   </h3>

// <p className="text-base font-semibold text-cyan-400">    {ed.title}
//   </p>

// <p className="text-sm leading-6 text-[color:var(--color-text-muted)]">    {ed.field}
//   </p>

// </div>

// <div className="my-5 h-px bg-gradient-to-r from-violet-500/50 via-cyan-400/50 to-transparent" />

//                 {/* <div className="my-5 h-px bg-gradient-to-r from-violet-500 via-cyan-400 to-transparent"/> */}


//                 {/* <div className="flex justify-end mt-2">
//                   <span className="text-sm font-mono font-semibold text-pink-300">{ed.score}</span>
//                 </div> */}
// <div className="absolute top-6 right-6">

//   <span
//     className="
//     inline-flex
//     items-center
//     justify-center
//     rounded-xl
//     border
//    border-cyan-300/40
// bg-white/5
// backdrop-blur-xl
//     px-4
// py-2
//     text-sm
//     font-semibold
//     tracking-wide
//     text-cyan-300
//     backdrop-blur-xl
// shadow-[0_0_25px_rgba(34,211,238,0.22)]
//     transition-all
//     duration-300
//     hover:border-cyan-300
//     hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
//     "
//   >
//     {ed.score}
//   </span>

// </div>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import { motion } from "framer-motion";
// import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
// import { education } from "../data/education";

// export default function Education() {
//   return (
//     <section id="education" className="py-24 bg-[color:var(--color-ink)]">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="flex items-center justify-center gap-3 mb-14">
//           <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 text-white">
//             <FaGraduationCap />
//           </span>
//           <h2 className="text-3xl font-bold text-[color:var(--color-text)]">Education</h2>
//         </div>

//         <div className="relative">
//           <motion.div
//             initial={{ scaleY: 0 }}
//             whileInView={{ scaleY: 1 }}
//             viewport={{ once: false, amount: 0.2 }}
//             transition={{ duration: 1 }}
//             style={{ transformOrigin: "top" }}
//             className="absolute left-[12.4rem] top-3 bottom-3 w-[2px] rounded-full bg-gradient-to-b from-violet-500 via-cyan-400 to-pink-500"
//           />

//           <div className="space-y-10">
//             {education.map((ed, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ x: 6 }}
//                 className="grid grid-cols-[11rem_3rem_1fr] items-start gap-5"
//               >
//                 <div className="pr-10 text-right">
//                   <p className="text-[15px] font-semibold text-violet-300 whitespace-nowrap">{ed.startDate || "August 2019"}</p>
//                   <p className="text-[15px] font-semibold text-violet-300 whitespace-nowrap">{ed.endDate || "June 2023"}</p>

//                   <div className="mt-3 flex items-center justify-end gap-2 text-sm text-[color:var(--color-text-muted)]">
//                     <FaMapMarkerAlt className="text-cyan-400" size={12}/>
//                     <span>{ed.location}</span>
//                   </div>
//                 </div>

//                 <div className="relative flex justify-center">
//                   <motion.span
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     viewport={{ once: false }}
//                     transition={{ delay: i * .2 }}
//                     className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-400 bg-[color:var(--color-ink)] shadow-[0_0_20px_rgba(34,211,238,0.45)]">
//                     <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500"/>
//                   </motion.span>

//                   <div className="ml-2 mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-cyan-400 to-transparent"/>
//                 </div>

//                 <motion.div
//                   initial={{opacity:0,x:20}}
//                   whileInView={{opacity:1,x:0}}
//                   viewport={{once:false}}
//                   whileHover={{y:-6}}
//                   className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-8 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all">

//                   <div className="absolute top-6 right-8">
//                     <span className="inline-flex rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.18)]">
//                       {ed.score}
//                     </span>
//                   </div>

//                   <div className="pr-28 space-y-2">
//                     <h3 className="text-3xl font-bold text-[color:var(--color-text)]">{ed.school}</h3>
//                     <p className="text-lg font-semibold text-cyan-400">{ed.title}</p>
//                     <p className="text-base leading-7 text-[color:var(--color-text-muted)]">{ed.field}</p>
//                   </div>

//                   <div className="my-6 h-px bg-gradient-to-r from-violet-500/50 via-cyan-400/50 to-transparent"/>

//                   {ed.description && (
//                     <p className="text-[15px] leading-7 text-[color:var(--color-text-muted)]">
//                       {ed.description}
//                     </p>
//                   )}
//                 </motion.div>
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
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { education } from "../data/education";

export default function Education() {
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

  const gradientText = isDark
    ? "from-violet-500 via-cyan-400 to-pink-500"
    : "from-indigo-700 via-blue-400 to-purple-600";

  const accent = isDark ? "text-cyan-400" : "text-indigo-600";

  return (
    <section id="education"
     className={`relative min-h-screen scroll-mt-24 py-24 
      ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
      >
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div className="mb-20 flex flex-col items-center text-center">
          {/* <span
            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r text-white ${gradientText}`}
          >
            <FaGraduationCap size={20} />
          </span> */}
           <p
    className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${
      isDark ? "text-white" : "text-black"
    }`}
  >
     Academic Journey
  </p>
         <h1 className="mb-4 flex items-center justify-center gap-4 font-extrabold leading-tight">
            <HiOutlineAcademicCap
            className={`h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 ${
              isDark ? "white" : "black"
            }`}
          />

            <span
              className={`bg-gradient-to-r bg-clip-text text-4xl text-transparent font-bold sm:text-5xl lg:text-6xl ${
                isDark
                  ? "from-green-500 via-teal-400 to-purple-500"
                  : "from-purple-800 via-cyan-500 to-blue-800"
              }`}
            >
              EDUCATION
            </span>
        </h1>
        <div className="w-28 h-[3px] bg-gradient-to-r from-transparent via-[#133aba]  to-transparent mx-auto mt-2 rounded-full" />
        
        
        </div>
        
        

        <div className="relative">

          {/* Center spine — desktop only */}

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "top" }}
            className={`absolute left-1/2 top-0 bottom-0 hidden w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b sm:block ${gradientText}`}
          />

          {/* Left rail — mobile only */}

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "top" }}
            className={`absolute left-4 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b sm:hidden ${gradientText}`}
          />

          <div className="flex flex-col gap-8 sm:gap-12">
            {education.map((ed, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className="relative pl-12 sm:pl-0">

                  {/* Mobile dot */}

                  <span
                    className={`
                      absolute left-4 top-2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 sm:hidden
                      ${isDark ? "border-cyan-400 bg-[#03040c]" : "border-indigo-500 bg-white"}
                    `}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${gradientText}`} />
                  </span>

                  {/* Desktop row */}

                  <div className="hidden sm:flex sm:items-center">

                    {/* Left slot */}

                    <div className={`w-1/2 ${isLeft ? "pr-12" : "pr-12 opacity-0 pointer-events-none"}`}>
                      {isLeft && (
                        <TimelineCard ed={ed} isDark={isDark} accent={accent} align="right" />
                      )}
                    </div>

                    {/* Center dot */}

                    <span
                      className={`
                        relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2
                        ${isDark ? "border-cyan-400 bg-[#03040c] shadow-[0_0_60px_rgba(34,211,238,0.45)]" : "border-indigo-500 bg-white shadow-[0_0_60px_rgba(99,102,241,0.3)]"}
                      `}
                    >
                      <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${gradientText}`} />
                    </span>

                    {/* Right slot */}

                    <div className={`w-1/2 ${!isLeft ? "pl-12" : "pl-12 opacity-0 pointer-events-none"}`}>
                      {!isLeft && (
                        <TimelineCard ed={ed} isDark={isDark} accent={accent} align="left" />
                      )}
                    </div>

                  </div>

                  {/* Mobile card */}

                  <div className="sm:hidden">
                    <TimelineCard ed={ed} isDark={isDark} accent={accent} align="left" />
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ ed, isDark, accent, align }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className={`
        relative rounded-2xl border p-4 backdrop-blur-2xl transition-all sm:p-5
        ${
          isDark
            ? "border-white/10 bg-white/[0.05] shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
            : "border-white/50 bg-white/30 shadow-[0_8px_40px_rgba(15,23,42,0.08)] hover:border-indigo-400/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.15)]"
        }
      `}
    >

      {/* <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-violet-300" : "text-indigo-700"}`}>
          <FaCalendarAlt size={11} />
          {(ed.startdate)} — {(ed.enddate)}
        </span>
        <span className={`flex items-center gap-1.5 text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          <FaMapMarkerAlt size={11} className={accent} />
          {ed.location}
        </span>
      </div> */}

      <h3 className={`text-lg font-bold sm:text-xl ${isDark ? "text-white" : "text-slate-900"}`}>
        {ed.school}
      </h3>
      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? "text-violet-300" : "text-indigo-700"}`}>
          <FaCalendarAlt size={11} />
          {(ed.startdate)} — {(ed.enddate)}
        </span>
        <span className={`flex items-center gap-1.5 text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          <FaMapMarkerAlt size={11} className={accent} />
          {ed.location}
        </span>
      </div>
      <p className={`mt-0.5 text-sm font-semibold ${accent}`}>{ed.title}</p>
      <p className={`mt-0.5 text-sm leading-5 ${isDark ? "text-slate-400" : "text-slate-800"}`}>
        {ed.field}
      </p>

      <div className="mt-3 flex items-center justify-between gap-4">
        <span
          className={`
            inline-flex rounded-lg border px-3 py-1 text-xs font-semibold backdrop-blur-xl
            ${
              isDark
                ? "border-cyan-400/40 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 text-cyan-300"
                : "border-indigo-400/40"
            }
          `}
        >
          {ed.score}
        </span>
      </div>

      {ed.description && (
        <>
          <div className={`my-3 h-px bg-gradient-to-r to-transparent ${isDark ? "from-violet-500/50 via-cyan-400/50" : "from-indigo-500/40 via-fuchsia-500/40"}`} />
          <p className={`text-sm leading-5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            {ed.description}
          </p>
        </>
      )}
    </motion.div>
  );
}
