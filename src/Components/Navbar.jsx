// import { useEffect, useState } from "react";
// import { Moon, Sun, Menu, X } from "lucide-react";

// const navItems = [
//   "Home",
//   "About",
//   "Education",
//   "Skills",
//   "Projects",
//   "Experience",
//   "Achievements",
//   "Blog",
// ];

// export default function Navbar() {
//   const [theme, setTheme] = useState("dark");
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("Home");

//   useEffect(() => {
//   const savedTheme = localStorage.getItem("theme") || "dark";

//   setTheme(savedTheme);

//   document.documentElement.setAttribute("data-theme", savedTheme);
// }, []);

//   useEffect(() => {
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 10);
//   };

//   handleScroll(); // Set initial state

//   window.addEventListener("scroll", handleScroll, { passive: true });

//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   // Scroll-spy: track which section is currently in view so its
//   // nav link keeps the underline + highlighted color, not just on hover.
//   useEffect(() => {
//     const sections = navItems
//       .map((item) => document.getElementById(item.toLowerCase()))
//       .filter(Boolean);

//     if (sections.length === 0) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const match = navItems.find(
//               (item) => item.toLowerCase() === entry.target.id
//             );
//             if (match) setActiveSection(match);
//           }
//         });
//       },
//       {
//         // Treats a thin horizontal band near the top of the viewport as the
//         // "active" zone — the section crossing that band becomes current.
//         rootMargin: "-40% 0px -55% 0px",
//         threshold: 0,
//       }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   const toggleTheme = () => {
//   const nextTheme = theme === "dark" ? "light" : "dark";

//   setTheme(nextTheme);

//   document.documentElement.setAttribute("data-theme", nextTheme);

//   localStorage.setItem("theme", nextTheme);
// };

//   const isDark = theme === "dark";

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? isDark
//             ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
//             : "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="mx-auto max-w-7xl px-5 sm:px-8">

//         <div className="grid grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1fr] items-center h-16 sm:h-20">

//           {/* Logo */}

//           <div className="justify-self-start">

//             <a
//               href="#home"
//               className="
//                 no-underline
//                 text-2xl
//                 sm:text-3xl
//                 font-bold
//                 bg-gradient-to-r
//                 from-violet-500
//                 via-cyan-400
//                 to-pink-500
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               {"<SG />"}
//             </a>

//           </div>

//           {/* Navigation */}

//           <nav className="hidden lg:flex items-center gap-7">

//             {navItems.map((item) => {
//               const isActive = item === activeSection;

//               return (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setActiveSection(item)}
//                   aria-current={isActive ? "page" : undefined}
//                   className={`
//                     relative
//                     no-underline
//                     font-medium
//                     tracking-wide
//                     transition-all
//                     duration-300

//                     after:absolute
//                     after:left-0
//                     after:-bottom-2
//                     after:h-[2px]
//                     after:rounded-full
//                     after:bg-gradient-to-r
//                     after:from-violet-500
//                     after:via-cyan-400
//                     after:to-teal-400
//                     after:transition-all
//                     after:duration-300

//                     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}

//                     ${
//                       isDark
//                         ? isActive
//                           ? "text-white"
//                           : "text-gray-300 hover:text-white"
//                         : isActive
//                         ? "text-slate-900"
//                         : "text-slate-600 hover:text-slate-900"
//                     }
//                   `}
//                 >
//                   {item}
//                 </a>
//               );
//             })}

//           </nav>

//           {/* Right Side */}

//           <div className="justify-self-end flex items-center gap-2 sm:gap-4">

//             <div className={`hidden sm:block h-6 w-px ${isDark ? "bg-white/20" : "bg-slate-300"}`}></div>

//             {/* Let's Talk — premium gradient, theme-aware */}
//             <a
//               href="#contact"
//               className={`
//                 no-underline
//                 rounded-xl
//                 px-4
//                 py-2
//                 text-xs
//                 sm:px-6
//                 sm:py-2.5
//                 sm:text-sm
//                 font-semibold
//                 tracking-wide
//                 border
//                 transition-all
//                 duration-300
//                 bg-gradient-to-r
//                 bg-[length:200%_100%]
//                 bg-left
//                 hover:bg-right
//                 hover:shadow-lg

//                 ${
//                   isDark
//                     ?// "border-amber-300/50 from-amber-200 via-yellow-400 to-amber-500 text-slate-900 shadow-amber-500/20 hover:shadow-amber-400/40"
//                    "border-indigo-900/20 from-slate-800 via-indigo-700 to-slate-900 text-white hover:shadow-[0_0_25px_rgba(49,46,129,0.35)]"
//                   : "border-cyan-900/30 from-cyan-950 via-teal-600 to-cyan-950 text-white shadow-cyan-500/20 hover:shadow-cyan-500/40"
//                 }
//               `}
//             >
//               Let's Talk
//             </a>

//             {/* <div className="h-6 w-px bg-white/20"></div> */}

//             <button
//               onClick={toggleTheme}
//               className={`
//                 rounded-full
//                 p-2
//                 transition-all
//                 duration-500
//                 hover:rotate-180
//                 ${isDark ? "hover:bg-white/10" : "hover:bg-slate-900/5"}
//               `}
//             >
//               {theme === "dark" ? (
//                 <Sun className="h-5 w-5 text-yellow-400" />
//               ) : (
//                 <Moon className="h-5 w-5 text-slate-800" />
//               )}
//             </button>

//             {/* Hamburger — mobile only */}

//             <button
//               onClick={() => setMobileOpen((prev) => !prev)}
//               aria-label="Toggle menu"
//               className={`
//                 lg:hidden
//                 rounded-full
//                 p-2
//                 transition-all
//                 duration-300
//                 ${isDark ? "hover:bg-white/10" : "hover:bg-slate-900/5"}
//               `}
//             >
//               {mobileOpen ? (
//                 <X className={`h-5 w-5 ${isDark ? "text-white" : "text-slate-900"}`} />
//               ) : (
//                 <Menu className={`h-5 w-5 ${isDark ? "text-white" : "text-slate-900"}`} />
//               )}
//             </button>

//           </div>

//         </div>

//         {/* Mobile Nav Panel */}

//         <div
//           className={`
//             lg:hidden
//             overflow-hidden
//             transition-all
//             duration-300
//             ease-in-out
//             ${mobileOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}
//           `}
//         >
//           <nav className="flex flex-col gap-1">

//             {navItems.map((item) => {
//               const isActive = item === activeSection;

//               return (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => {
//                     setActiveSection(item);
//                     setMobileOpen(false);
//                   }}
//                   aria-current={isActive ? "page" : undefined}
//                   className={`
//                     no-underline
//                     rounded-lg
//                     px-3
//                     py-2.5
//                     font-medium
//                     tracking-wide
//                     transition-colors
//                     duration-200
//                     ${
//                       isDark
//                         ? isActive
//                           ? "bg-white/10 text-white"
//                           : "text-gray-300 hover:bg-white/5 hover:text-white"
//                         : isActive
//                         ? "bg-slate-900/10 text-slate-900"
//                         : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900"
//                     }
//                   `}
//                 >
//                   {item}
//                 </a>
//               );
//             })}

//           </nav>
//         </div>

//       </div>
//     </header>
//   );
// }


import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, MessageCircle } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Education",
  "Skills",
  "Projects",
  "Experience",
  "Achievements",
  "Blog",
];

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll(); // Set initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: track which section is currently in view so its
  // nav link keeps the underline + highlighted color, not just on hover.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navItems.find(
              (item) => item.toLowerCase() === entry.target.id
            );
            if (match) setActiveSection(match);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const isDark = theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? isDark
            ? "bg-slate-950/95 lg:bg-slate-950/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-white/95 lg:bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20 gap-2">

          {/* Logo */}
          <div className="shrink-0">
            <a
              href="#home"
              className="
                no-underline
                text-lg
                sm:text-2xl
                lg:text-3xl
                font-bold
                bg-gradient-to-r
                from-violet-500
                via-cyan-400
                to-pink-500
                bg-clip-text
                text-transparent
                whitespace-nowrap
              "
            >
              {"<SG />"}
            </a>
          </div>

          {/* Navigation - center, only on large screens+ */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 flex-1 justify-center">
            {navItems.map((item) => {
              const isActive = item === activeSection;

              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item)}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    relative
                    no-underline
                    font-medium
                    tracking-wide
                    whitespace-nowrap
                    transition-all
                    duration-300

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:rounded-full
                    after:bg-gradient-to-r
                    after:from-violet-500
                    after:via-cyan-400
                    after:to-teal-400
                    after:transition-all
                    after:duration-300

                    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}

                    ${
                      isDark
                        ? isActive
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                        : isActive
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    }
                  `}
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Right Side - always stays right-aligned, never wraps */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 flex-nowrap">

            <div
              className={`hidden md:block h-6 w-px ${
                isDark ? "bg-white/20" : "bg-slate-300"
              }`}
            ></div>

            {/* Let's Talk — full label from sm up, icon-only below that */}
            <a
              href="#contact"
              aria-label="Let's Talk"
              className={`
                no-underline
                rounded-xl
                border
                transition-all
                duration-300
                bg-gradient-to-r
                bg-[length:200%_100%]
                bg-left
                hover:bg-right
                hover:shadow-lg
                shrink-0
                flex
                items-center
                justify-center

                p-2
                sm:px-4
                sm:py-2
                sm:text-xs
                lg:px-6
                lg:py-2.5
                lg:text-sm
                font-semibold
                tracking-wide

                ${
                  isDark
                    ? "border-indigo-900/20 from-slate-800 via-indigo-700 to-slate-900 text-white hover:shadow-[0_0_25px_rgba(49,46,129,0.35)]"
                    : "border-cyan-900/30 from-cyan-950 via-teal-600 to-cyan-950 text-white shadow-cyan-500/20 hover:shadow-cyan-500/40"
                }
              `}
            >
              <MessageCircle className="h-4 w-4 sm:hidden" />
              <span className="hidden sm:inline">Let's Talk</span>
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`
                shrink-0
                rounded-full
                p-1.5
                sm:p-2
                transition-all
                duration-500
                hover:rotate-180
                ${isDark ? "hover:bg-white/10" : "hover:bg-slate-900/5"}
              `}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-800" />
              )}
            </button>

            {/* Hamburger — mobile/tablet only */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className={`
                lg:hidden
                shrink-0
                rounded-full
                p-1.5
                sm:p-2
                transition-all
                duration-300
                ${isDark ? "hover:bg-white/10" : "hover:bg-slate-900/5"}
              `}
            >
              {mobileOpen ? (
                <X className={`h-5 w-5 ${isDark ? "text-white" : "text-slate-900"}`} />
              ) : (
                <Menu className={`h-5 w-5 ${isDark ? "text-white" : "text-slate-900"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${mobileOpen ? "max-h-[70vh] opacity-100 pb-6 overflow-y-auto" : "max-h-0 opacity-0"}
          `}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = item === activeSection;

              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActiveSection(item);
                    setMobileOpen(false);
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    no-underline
                    rounded-lg
                    px-3
                    py-2.5
                    font-medium
                    tracking-wide
                    transition-colors
                    duration-200
                    ${
                      isDark
                        ? isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                        : isActive
                        ? "bg-slate-900/10 text-slate-900"
                        : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900"
                    }
                  `}
                >
                  {item}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}