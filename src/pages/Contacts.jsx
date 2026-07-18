import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaMapMarkerAlt} from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import {SiLeetcode } from "react-icons/si";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";


export default function Contact() {
  const [theme, setTheme] = useState("dark");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [mounted, setMounted] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    setTheme(root.getAttribute("data-theme") || localStorage.getItem("theme") || "dark");

    const observer = new MutationObserver(() => {
      setTheme(root.getAttribute("data-theme") || "dark");
    });

    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  // Trigger entrance animation shortly after mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const isDark = theme === "dark";

  const accent = isDark ? "text-cyan-400" : "text-indigo-600";

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "Someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    setSent(true);
    window.location.href = `mailto:shivanigurumurthy10@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setSent(false), 2000);
  };

  const inputClasses = `
    mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm outline-none backdrop-blur-xl
    transition-all duration-300 ease-out
    focus:scale-[1.01] focus:shadow-lg
    ${
      isDark
        ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:shadow-cyan-400/10"
        : "border-white/50 bg-white/40 text-slate-900 placeholder:text-slate-400 focus:border-indigo-400/60 focus:shadow-indigo-400/10"
    }
  `;

  // Helper for staggered fade/slide-up entrance transitions
  const reveal = () => `
    transition-all duration-700 ease-out
    ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `;
  const revealStyle = (delayMs = 0) => ({ transitionDelay: `${delayMs}ms` });

  return (
<section id="contact" 
        className={`relative scroll-mt-24 pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24
        ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
        >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Heading */}

         <div className={`text-center mt-6 sm:mt-8 lg:mt-10 ${reveal()}`} style={revealStyle(0)}>
          <p
            className={`mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.35em] ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Reach Out
          </p>
        
         <h1 className="mb-4 flex items-center justify-center gap-2 sm:gap-4 font-extrabold leading-tight">
                     <HiOutlineChatBubbleLeftRight
                     className={`h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 transition-transform duration-500 ${
                       isDark ? "text-white" : "text-black"
                     } ${mounted ? "rotate-0" : "-rotate-12"}`}
                   />
         
                     <span
                       className={`bg-gradient-to-r bg-clip-text text-3xl text-transparent font-bold sm:text-5xl lg:text-5xl transition-all duration-700 ${
                         isDark
                           ? "from-green-500 via-teal-400 to-purple-500"
                           : "from-purple-800 via-cyan-500 to-blue-800"
                       }`}
                     >
                       LET'S CONNECT
                     </span>
                 </h1>
        
          <div
            className={`h-[3px] bg-gradient-to-r from-transparent via-[#133aba] to-transparent mx-auto mt-6 rounded-full transition-all duration-700 ease-out ${
              mounted ? "w-24 sm:w-28" : "w-0"
            }`}
          />
        </div>

        <div className="mt-12 grid gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT — Intro + contact links */}

          <div
            className={`flex flex-col items-center text-center lg:items-start lg:text-left ${reveal()}`}
            style={revealStyle(120)}
          >
            <p
              className={`mb-3 text-lg font-bold text-left sm:text-2xl lg:text-3xl ${
                isDark ? "text-cyan-400" : "text-indigo-600"
              }`}
            >
              Get in Touch
            </p>

            <p
              className={`mb-8 max-w-md text-left text-sm leading-6 sm:text-base sm:leading-7 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Open to entry-level Software Engineer / Java Full Stack Developer roles.
              Happy to talk through opportunities, projects, or just say hi. Feel free to
              reach out using the form or via direct email.
            </p>

            <div className="flex w-full max-w-md flex-col gap-3">
              <div
                className={`transition-all duration-500 ease-out ${
                  mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={revealStyle(200)}
              >
                <ContactLink
                  icon={<FaEnvelope size={16} />}
                  label="Email"
                  value="shivanigurumurthy10@gmail.com"
                  href="mailto:shivanigurumurthy10@gmail.com"
                  isDark={isDark}
                  accent={accent}
                />
              </div>
              <div
                className={`transition-all duration-500 ease-out ${
                  mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={revealStyle(280)}
              >
                <ContactLink
                  icon={<FaMapMarkerAlt size={16} />}
                  label="Location"
                  value="Hyderabad, India"
                  href="mailto:shivanigurumurthy10@gmail.com"
                  isDark={isDark}
                  accent={accent}
                />
              </div>
               <div
                 className={`mt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start sm:gap-5 transition-all duration-500 ease-out ${
                   mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                 }`}
                 style={revealStyle(360)}
               >
                <p className={`w-full text-sm lg:text-left md:text-left ${isDark ? "text-slate-400" : "text-slate-600"}`}>Follow me on Social Media</p>
                <a
                  href="https://www.linkedin.com/in/shivanigurumurthy/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="group relative z-10 -m-2 p-2"
                >
                  <FaLinkedin
                    className={`h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-cyan-400 group-active:scale-95 ${
                      isDark ? "text-slate-300" : "text-slate-500"
                    }`}
                  />
                </a>
    
                <a
                  href="https://github.com/GurumurthyShivani"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="group relative z-10 -m-2 p-2"
                >
                  <FaGithub
                    className={`h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-violet-400 group-active:scale-95 ${
                      isDark ? "text-slate-300" : "text-slate-500"
                    }`}
                  />
                </a>
    
                <a
                  href="https://x.com/Neethu_2910"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="group relative z-10 -m-2 p-2"
                >
                  <FaXTwitter
                    className={`h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 group-active:scale-95 ${
                      isDark
                        ? "text-slate-300 group-hover:text-white"
                        : "text-slate-500 group-hover:text-slate-900"
                    }`}
                  />
                </a>
                <a
                  href="https://www.instagram.com/neeethuuuuuuu/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="group relative z-10 -m-2 p-2"
                >
                  <FaInstagram
                    className={`h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-pink-400 group-active:scale-95 ${
                      isDark ? "text-slate-300" : "text-slate-500"
                    }`}
                  />
                </a>
                <a
                  href="https://leetcode.com/u/GurumurthyShivani/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode"
                  className="group relative z-10 -m-2 p-2"
                >
                  <SiLeetcode
                    className={`h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-yellow-400 group-active:scale-95 ${
                      isDark ? "text-slate-300" : "text-slate-500"
                    }`}
                  />
                </a>

              </div>
            </div>

          </div>

          {/* RIGHT — Form */}

          <div
            className={`
              rounded-3xl border p-5 backdrop-blur-2xl sm:p-8
              transition-all duration-700 ease-out
              ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.98]"}
              ${
                isDark
                  ? "border-transparent bg-white/[0.05] shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                  : "border-white/50 bg-white/30 shadow-[0_8px_40px_rgba(15,23,42,0.08)]"
              }
            `}
            style={revealStyle(180)}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div>
                <label className={`text-xs mb-2 font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={`text-xs mb-2 font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={`text-xs mb-2 font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className={`${inputClasses} resize-none`}
                />
              </div>

                  <button
                  type="submit"
                  className={`
                    mt-2 flex items-center justify-center gap-2 self-stretch sm:self-start
                    px-6 py-2.5 !rounded-2xl
                    text-sm font-semibold tracking-wide text-white
                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5 hover:shadow-lg active:scale-95 active:translate-y-0
                    ${
                      isDark
                        ? "bg-cyan-500 hover:bg-cyan-600"
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }
                    ${sent ? "scale-95" : "scale-100"}
                  `}
                >
                  <span>{sent ? "Sent!" : "Send Message"}</span>
                  <FaPaperPlane
                    size={13}
                    className={`transition-transform duration-300 ${sent ? "translate-x-1 -translate-y-1" : ""}`}
                  />
                </button>

            </form>
          </div>

      
        </div>

      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href, isDark, accent }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`
        group flex items-center gap-3 rounded-2xl border px-3.5 py-2.5 backdrop-blur-xl
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]
        sm:px-4 sm:py-3
        ${
          isDark
            ? "border-white/10 bg-white/[0.04] hover:border-cyan-400/40 hover:bg-white/[0.07]"
            : "border-white/50 bg-white/30 hover:border-indigo-400/50 hover:bg-white/50"
        }
      `}
    >
      <span className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${isDark ? "bg-white/5" : "bg-white/50"} ${accent}`}>
        {icon}
      </span>
      <span className="flex flex-col text-left">
        <span className={`text-[10px] font-semibold uppercase tracking-wide ${isDark ? "text-slate-500" : "text-slate-400"}`}>
          {label}
        </span>
        <span className={`break-all text-xs sm:text-sm ${isDark ? "text-slate-200" : "text-slate-700"}`}>
          {value}
        </span>
      </span>
    </a>
  );
}