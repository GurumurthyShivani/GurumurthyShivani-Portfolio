import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
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
    <section
      id="education"
      className={`relative min-h-screen scroll-mt-24 py-16 sm:py-20 lg:py-24 ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6">

        {/* Heading */}

        <div className="mb-14 flex flex-col items-center text-center sm:mb-16 lg:mb-20">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.3em] sm:text-sm sm:tracking-[0.35em] ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Academic Journey
          </p>

          <h1 className="mb-4 flex items-center justify-center gap-3 font-extrabold leading-tight sm:gap-4">
            <HiOutlineAcademicCap
              className={`h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 ${
                isDark ? "text-white" : "text-black"
              }`}
            />

            <span
              className={`bg-gradient-to-r bg-clip-text text-3xl text-transparent font-bold sm:text-5xl lg:text-6xl ${
                isDark
                  ? "from-green-500 via-teal-400 to-purple-500"
                  : "from-purple-800 via-cyan-500 to-blue-800"
              }`}
            >
              EDUCATION
            </span>
          </h1>
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#133aba] to-transparent mx-auto mt-2 rounded-full sm:w-28" />
        </div>

        <div className="relative">

          {/* Center spine — tablet/desktop only */}

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "top" }}
            className={`absolute left-1/2 top-0 bottom-0 hidden w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b md:block ${gradientText}`}
          />

          {/* Left rail — mobile only */}

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "top" }}
            className={`absolute left-4 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b md:hidden ${gradientText}`}
          />

          <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
            {education.map((ed, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className="relative pl-11 sm:pl-12 md:pl-0">

                  {/* Mobile dot */}

                  <span
                    className={`
                      absolute left-4 top-2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 md:hidden
                      ${isDark ? "border-cyan-400 bg-[#03040c]" : "border-indigo-500 bg-white"}
                    `}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${gradientText}`} />
                  </span>

                  {/* Desktop row */}

                  <div className="hidden md:flex md:items-center">

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

                  {/* Mobile/tablet card */}

                  <div className="md:hidden">
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
  const [active, setActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      whileTap={{ y: -6, scale: 0.99 }}
      onClick={() => setActive((v) => !v)}
      onTap={() => setActive((v) => !v)}
      className={`
        relative cursor-pointer select-none rounded-2xl border p-4 backdrop-blur-2xl transition-all sm:p-5
        ${
          isDark
            ? `border-white/10 bg-white/[0.05] shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] ${
                active ? "border-cyan-400/40 shadow-[0_0_35px_rgba(34,211,238,0.18)]" : ""
              }`
            : `border-white/50 bg-white/30 shadow-[0_8px_40px_rgba(15,23,42,0.08)] hover:border-indigo-400/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.15)] ${
                active ? "border-indigo-400/50 shadow-[0_0_35px_rgba(99,102,241,0.15)]" : ""
              }`
        }
      `}
    >

      <h3 className={`text-base font-bold sm:text-lg md:text-xl ${isDark ? "text-white" : "text-slate-900"}`}>
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