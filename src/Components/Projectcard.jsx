import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function ProjectCard({ project, isDark, accent, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

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
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        h-full w-full transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div
        onClick={() => setActive((v) => !v)}
        className={`
          group flex h-full w-full flex-col overflow-hidden rounded-2xl border backdrop-blur-2xl
          transition-all duration-300 ease-out
          hover:-translate-y-1
          sm:rounded-3xl
          ${
            isDark
              ? `border-white/10 bg-white/[0.05] shadow-[0_8px_40px_rgba(0,0,0,0.25)] hover:border-cyan-300/70 hover:shadow-[0_0_28px_rgba(103,232,249,0.35)] ${
                  active ? "-translate-y-1 border-cyan-300/70 shadow-[0_0_28px_rgba(103,232,249,0.35)]" : ""
                }`
              : `border-white/50 bg-white/30 shadow-[0_8px_40px_rgba(15,23,42,0.06)] hover:border-indigo-400/70 hover:shadow-[0_0_28px_rgba(129,140,248,0.3)] ${
                  active ? "-translate-y-1 border-indigo-400/70 shadow-[0_0_28px_rgba(129,140,248,0.3)]" : ""
                }`
          }
        `}
      >
        {/* Image — fixed aspect ratio instead of a hardcoded pixel height, so it scales with card width on any device */}
        <div
          className={`flex h-40 w-full shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br sm:h-48 lg:h-56 ${
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
            <>
              <FaCode size={32} className={`sm:hidden ${isDark ? "text-slate-600" : "text-slate-300"}`} />
              <FaCode size={36} className={`hidden sm:block ${isDark ? "text-slate-600" : "text-slate-300"}`} />
            </>
          )}
        </div>

        {/* Info */}
        <div className="flex w-full flex-1 flex-col p-4 pt-4 sm:pt-4">
          <h3 className={`mb-2 text-base font-bold sm:text-lg ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            {project.title}
          </h3>

          {project.features?.length > 0 && (
            <ul className="mb-2 mt-2 flex max-h-40 flex-col gap-2 overflow-y-auto sm:max-h-48 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 text-xs leading-5 sm:text-sm sm:leading-6 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  <span
                    className={`mt-1.5 h-1 w-1 shrink-0 rounded-full sm:mt-2 ${
                      isDark ? "bg-cyan-400" : "bg-indigo-500"
                    }`}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mb-5 mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors sm:px-3 sm:text-xs ${
                  isDark ? "bg-white/[0.06] text-slate-300" : "bg-slate-900/[0.05] text-slate-600"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex shrink-0 items-center gap-2.5 sm:gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`
                flex flex-1 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold
                transition-all duration-300 ease-out active:scale-95 sm:px-4 sm:py-2.5 sm:text-sm
                ${
                  isDark
                    ? "border-white/10 text-slate-300 hover:border-white/25 hover:bg-white/[0.05]"
                    : "border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-white/50"
                }
              `}
            >
              <FaGithub size={13} />
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={`
                flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white
                transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95 sm:px-4 sm:py-2.5 sm:text-sm
                ${isDark ? "bg-cyan-500 hover:bg-cyan-600" : "bg-indigo-600 hover:bg-indigo-700"}
              `}
            >
              <FaExternalLinkAlt size={11} />
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}