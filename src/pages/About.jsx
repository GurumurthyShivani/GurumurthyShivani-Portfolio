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
      <div className="text-center pt-20 sm:pt-24">
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.3em] sm:text-sm sm:tracking-[0.35em] ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Get To Know
        </p>

        <h1 className="mb-4 font-extrabold leading-tight">
          <span
            className={`bg-gradient-to-r bg-clip-text text-transparent font-bold text-4xl sm:text-5xl lg:text-6xl ${
              isDark
                ? "from-green-500 via-teal-400 to-purple-500"
                : "from-purple-800 via-cyan-500 to-blue-800"
            }`}
          >
            ABOUT ME
          </span>
        </h1>

        <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#133aba] to-transparent mx-auto mt-6 rounded-full sm:w-28" />
      </div>

      {/* Background Glow */}

      <div
        className={`pointer-events-none absolute right-4 top-24 h-32 w-32 rounded-full blur-[80px] sm:right-16 sm:top-20 sm:h-56 sm:w-56 sm:blur-[110px] lg:right-24 lg:h-72 lg:w-72 lg:blur-[140px] ${
          isDark ? "bg-cyan-500/20" : "bg-indigo-300/30"
        }`}
      />

      <div
        className={`pointer-events-none absolute left-4 bottom-16 h-40 w-40 rounded-full blur-[90px] sm:left-10 sm:bottom-24 sm:h-64 sm:w-64 sm:blur-[130px] lg:left-16 lg:h-80 lg:w-80 lg:blur-[160px] ${
          isDark ? "bg-violet-700/20" : "bg-amber-300/30"
        }`}
      />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-5 py-20 sm:gap-16 sm:px-8 sm:py-24 lg:flex-row lg:gap-20">

        {/* LEFT — Stat / gradient panel */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="order-2 lg:order-1 relative w-full max-w-sm lg:w-fit lg:max-w-none shrink-0"
        >
          {/* Gradient ring frame */}

          <div
            className={`rounded-3xl bg-gradient-to-br p-[2px] ${
              isDark
                ? "from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_60px_rgba(139,92,246,0.25)]"
                : "from-blue-500 via-teal-400 to-indigo-500 shadow-[0_0_60px_rgba(59,130,246,0.18)]"
            }`}
          >
            <div
              className={`rounded-[calc(1.5rem-2px)] p-6 sm:p-8 md:p-10 ${
                isDark ? "bg-slate-950/90" : "bg-white/90"
              } backdrop-blur-xl`}
            >

              <p className={`mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.25em] sm:mb-7 sm:text-[11px] sm:tracking-[0.3em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                By the numbers
              </p>

              {/* Stats grid */}

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
                      className={`bg-gradient-to-r bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl ${
                        isDark
                          ? "from-cyan-300 via-violet-400 to-pink-400"
                          : "from-indigo-600 via-cyan-600 to-blue-500"
                      }`}
                    >
                      {stat.value}
                    </p>

                    {/* Label */}
                    <p
                      className={`mt-2 whitespace-nowrap text-[11px] font-medium sm:text-xs md:text-sm ${
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
          className="order-1 lg:order-2 max-w-2xl text-center lg:text-left"
        >
          <div className="mb-8 lg:mb-16">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${
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

            <p className={`text-left text-justify text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              I'm a Java Full Stack Developer with a strong foundation in Java, Spring Boot, React.js, SQL, and modern web technologies. After earning my B.Tech in Information Technology, I gained professional experience at Cognizant before transitioning into software development through intensive hands-on training and real-world projects.
            </p>

            <p className={`text-left text-justify text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              I enjoy building scalable, maintainable applications with clean code and intuitive user experiences. From developing REST APIs with Spring Boot to creating responsive interfaces with React.js, I focus on writing software that is reliable, efficient, and easy to maintain.
            </p>

            <p className={`text-left text-justify text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              I'm passionate about continuous learning and constantly exploring new technologies, system design, and backend architecture. Every project is an opportunity to improve my skills, solve meaningful problems, and build software that is both functional and thoughtfully crafted.
            </p>

          </div>

          <div className={`my-8 sm:my-10 h-px w-full ${isDark ? "bg-white/10" : "bg-slate-200"}`} />

          {/* Badges */}

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start">
            {badges.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className={`
                  flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide
                  sm:px-4 sm:py-2 sm:text-sm
                  ${
                    isDark
                      ? "border-white/10 bg-white/[0.03] text-slate-300"
                      : "border-slate-200 bg-white text-slate-600"
                  }
                `}
              >
                <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isDark ? "text-amber-300" : "text-indigo-600"}`} />
                {text}
              </span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}