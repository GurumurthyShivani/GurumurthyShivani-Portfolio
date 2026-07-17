// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// export default function ProjectCard({ project }) {
//   const { name, subtitle, image, description, tech, github, live } = project

//   return (
//     <div className="group rounded-md overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-border)] hover:border-[color:var(--color-gold)] transition-colors flex flex-col">
//       <div className="overflow-hidden">
//         <img
//           src={image}
//           alt={`${name} preview`}
//           className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       <div className="p-6 flex flex-col flex-1">
//         <h3 className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--color-text)]">
//           {name}
//         </h3>
//         <p className="font-mono text-xs text-[color:var(--color-steel)] mt-1">{subtitle}</p>

//         <p className="mt-4 text-sm text-[color:var(--color-text-muted)] leading-relaxed flex-1">
//           {description}
//         </p>

//         <div className="mt-5 flex flex-wrap gap-2">
//           {tech.map((t) => (
//             <span
//               key={t}
//               className="font-mono text-[11px] px-2 py-1 rounded-sm bg-[color:var(--color-surface-2)] text-[color:var(--color-gold-soft)] border border-[color:var(--color-border)]"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         <div className="mt-6 flex items-center gap-5">
//           <a
//             href={github}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-gold)] transition-colors"
//           >
//             <FaGithub size={16} /> Code
//           </a>
//           <a
//             href={live}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-gold)] transition-colors"
//           >
//             <FaExternalLinkAlt size={13} /> Live Demo
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }






// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// export default function ProjectCard({ project }) {
//   const { name, subtitle, image, description, features, tech, github, live } = project

//   return (
//     <div className="group relative rounded-md p-[1px]">
//       <div
//         className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none"
//         style={{ background: 'linear-gradient(135deg, #38bdf8, #60a5fa, #22d3ee)' }}
//       ></div>

//       <div className="relative rounded-md overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-border)] group-hover:border-transparent transition-colors duration-500 flex flex-col shadow-[0_0_0px_rgba(56,189,248,0)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]">
//         <div className="relative overflow-hidden">
//           <img
//             src={image}
//             alt={`${name} preview`}
//             className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
//           />

//           <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
//             <a
//               href={github}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 text-sm text-white hover:text-[color:var(--color-gold)] transition-colors"
//             >
//               <FaGithub size={20} />
//               <span>Code</span>
//             </a>

//             <a
//               href={live}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 text-sm text-white hover:text-[color:var(--color-gold)] transition-colors"
//             >
//               <FaExternalLinkAlt size={16} />
//               <span>Live Demo</span>
//             </a>
//           </div>
//         </div>

//         <div className="p-6 flex flex-col flex-1">
//           <h3 className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--color-text)]">
//             {name}
//           </h3>

//           {/* <p className="font-mono text-xs text-[color:var(--color-steel)] mt-1">
//             {subtitle}
//           </p> */}

//           <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed line-clamp-3">
//             {description}
//           </p>

//           {features && features.length > 0 ? (
//             <ul className="space-y-1.5">
//               {features.map((f, i) => (
//                 <li
//                   key={i}
//                   className="flex items-start gap-2 text-sm text-[color:var(--color-text-muted)] leading-relaxed"
//                 >
//                   <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[color:var(--color-gold)] shrink-0"></span>
//                   <span>{f}</span>
//                 </li>
//               ))}
//             </ul>
//           ) : null}

//           <div className="flex flex-wrap gap-2">
//             {tech.map((t) => (
//               <span
//                 key={t}
//                 className="font-mono text-[11px] px-2 py-1 rounded-sm bg-transparent text-[color:var(--color-gold-soft)] border border-[color:var(--color-border)]"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const CARD_HEIGHT = 700; // total card height in px
const IMAGE_HEIGHT = Math.round(CARD_HEIGHT * 0.4); // 40%
const INFO_HEIGHT = CARD_HEIGHT - IMAGE_HEIGHT; // 60%

export default function ProjectCard({ project, isDark, accent, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ height: `${CARD_HEIGHT}px`, transitionDelay: `${delay}ms` }}
      className={`
        w-full transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div
        className={`
          group flex h-full w-full flex-col overflow-hidden rounded-3xl border backdrop-blur-2xl
          transition-all duration-300 ease-out
          hover:-translate-y-1
          ${
            isDark
              ? "border-white/10 bg-white/[0.05] shadow-[0_8px_40px_rgba(0,0,0,0.25)] hover:border-cyan-300/70 hover:shadow-[0_0_28px_rgba(103,232,249,0.35)]"
              : "border-white/50 bg-white/30 shadow-[0_8px_40px_rgba(15,23,42,0.06)] hover:border-indigo-400/70 hover:shadow-[0_0_28px_rgba(129,140,248,0.3)]"
          }
        `}
      >
        {/* Image — 40% of card height, full width */}
        <div
          style={{ height: `${IMAGE_HEIGHT}px` }}
          className={`flex w-full shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br ${
            isDark ? "from-white/[0.06] to-white/[0.02]" : "from-white/60 to-white/20"
          }`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <FaCode size={36} className={isDark ? "text-slate-600" : "text-slate-300"} />
          )}
        </div>

        {/* Info — 60% of card height, full width */}
        <div
          style={{ height: `${INFO_HEIGHT}px` }}
          className="flex w-full flex-col overflow-hidden p-6"
        >
          <h3 className={`mb-2 text-lg font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            {project.title}
          </h3>

          {project.features?.length > 0 && (
            <ul className="mb-1 flex flex-1 flex-col gap-2.0 overflow-auto">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 text-sm leading-6 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  <span
                    className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                      isDark ? "bg-cyan-400" : "bg-indigo-500"
                    }`}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mb-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors ${
                  isDark ? "bg-white/[0.06] text-slate-300" : "bg-slate-900/[0.05] text-slate-600"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex shrink-0 items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`
                flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold
                transition-all duration-300 ease-out active:scale-95
                ${
                  isDark
                    ? "border-white/10 text-slate-300 hover:border-white/25 hover:bg-white/[0.05]"
                    : "border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-white/50"
                }
              `}
            >
              <FaGithub size={14} />
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={`
                flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white
                transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95
                ${isDark ? "bg-cyan-500 hover:bg-cyan-600" : "bg-indigo-600 hover:bg-indigo-700"}
              `}
            >
              <FaExternalLinkAlt size={12} />
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}




