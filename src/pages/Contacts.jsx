// import { useState } from 'react'
// import Section from '../components/Section'
// import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' })

//   const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'Someone'}`)
//     const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
//     window.location.href = `mailto:shivanigurumurthy10@gmail.com?subject=${subject}&body=${body}`
//   }

//   return (
//     <Section id="contact">
//       <p className="font-mono text-sm tracking-[0.2em] uppercase text-[color:var(--color-steel)]">Let's talk</p>
//       <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[color:var(--color-text)]">Contact</h2>
//       <div className="rule-gold w-24 mt-6 mb-10" />

//       <div className="grid md:grid-cols-2 gap-10">
//         <div className="flex flex-col gap-4">
//           <p className="text-[color:var(--color-text-muted)] leading-relaxed max-w-md text-sm">
//             Open to entry-level Software Engineer / Java Full Stack Developer
//             roles. The fastest way to reach me is email.
//           </p>
//           <ContactLink icon={<FaEnvelope size={16} />} label="Email" value="shivanigurumurthy10@gmail.com" href="mailto:shivanigurumurthy10@gmail.com" />
//           <ContactLink icon={<FaPhoneAlt size={15} />} label="Phone" value="+91 939-054-9536" href="tel:+919390549536" />
//           <ContactLink icon={<FaLinkedin size={16} />} label="LinkedIn" value="linkedin.com/in/shivanigurumurthy" href="https://linkedin.com/in/shivanigurumurthy" />
//           <ContactLink icon={<FaGithub size={16} />} label="GitHub" value="github.com/GurumurthyShivani" href="https://github.com/GurumurthyShivani" />
//         </div>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//           <div>
//             <label className="font-mono text-xs text-[color:var(--color-steel)]">Name</label>
//             <input type="text" name="name" required value={form.name} onChange={handleChange}
//               className="mt-1 w-full rounded-sm px-3 py-2 text-sm text-[color:var(--color-text)] border border-[color:var(--color-border)] focus:outline-none focus:border-[color:var(--color-gold)]"
//               style={{ backgroundColor: 'var(--color-surface)' }} />
//           </div>
//           <div>
//             <label className="font-mono text-xs text-[color:var(--color-steel)]">Email</label>
//             <input type="email" name="email" required value={form.email} onChange={handleChange}
//               className="mt-1 w-full rounded-sm px-3 py-2 text-sm text-[color:var(--color-text)] border border-[color:var(--color-border)] focus:outline-none focus:border-[color:var(--color-gold)]"
//               style={{ backgroundColor: 'var(--color-surface)' }} />
//           </div>
//           <div>
//             <label className="font-mono text-xs text-[color:var(--color-steel)]">Message</label>
//             <textarea name="message" required rows={3} value={form.message} onChange={handleChange}
//               className="mt-1 w-full rounded-sm px-3 py-2 text-sm text-[color:var(--color-text)] border border-[color:var(--color-border)] focus:outline-none focus:border-[color:var(--color-gold)]"
//               style={{ backgroundColor: 'var(--color-surface)' }} />
//           </div>
//           <button type="submit"
//             className="mt-1 self-start px-5 py-2.5 rounded-sm bg-[color:var(--color-gold)] text-[color:var(--color-ink)] font-mono text-sm font-medium hover:bg-[color:var(--color-gold-soft)] transition-colors">
//             Send Message
//           </button>
//         </form>
//       </div>

//       <p className="mt-10 font-mono text-[11px] text-[color:var(--color-text-muted)]">
//         © {new Date().getFullYear()} Shivani Gurumurthy. Built with React, Tailwind &amp; Bootstrap.
//       </p>
//     </Section>
//   )
// }

// function ContactLink({ icon, label, value, href }) {
//   return (
//     <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}
//       className="flex items-center gap-3 px-4 py-2.5 rounded-sm bg-[color:var(--color-surface)] border border-[color:var(--color-border)] hover:border-[color:var(--color-gold)] transition-colors">
//       <span className="text-[color:var(--color-gold)]">{icon}</span>
//       <span className="flex flex-col">
//         <span className="font-mono text-[10px] uppercase tracking-wide text-[color:var(--color-steel)]">{label}</span>
//         <span className="text-sm text-[color:var(--color-text)]">{value}</span>
//       </span>
//     </a>
//   )
// }


// import { useEffect, useState } from "react";
// import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaMapMarkerAlt} from "react-icons/fa";
// import { FaXTwitter, FaInstagram } from "react-icons/fa6";
// import {SiLeetcode } from "react-icons/si";
// import { FaHeart, FaCoffee } from "react-icons/fa";
// import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";


// export default function Contact() {
//   const [theme, setTheme] = useState("dark");
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

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

//   const gradientText = isDark
//     ? "from-violet-500 via-cyan-400 to-pink-500"
//     : "from-indigo-700 via-fuchsia-600 to-amber-500";

//   const accent = isDark ? "text-cyan-400" : "text-indigo-600";

//   const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "Someone"}`);
//     const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
//     window.location.href = `mailto:shivanigurumurthy10@gmail.com?subject=${subject}&body=${body}`;
//   };

//   const inputClasses = `
//     mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm outline-none backdrop-blur-xl transition-colors
//     ${
//       isDark
//         ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-cyan-400/60"
//         : "border-white/50 bg-white/40 text-slate-900 placeholder:text-slate-400 focus:border-indigo-400/60"
//     }
//   `;

//   return (
// <section id="contact" className="relative scroll-mt-24 pt-24 pb-8">
//         <div className="mx-auto max-w-6xl px-6 sm:px-8">

//         {/* Heading */}

//          <div className="text-center mt-10">
//           <p
//             className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${
//               isDark ? "white" : "black"
//             }`}
//           >
//             Reach Out
//           </p>
        
//          <h1 className="mb-4 flex items-center justify-center gap-4 font-extrabold leading-tight">
//                      <HiOutlineChatBubbleLeftRight
//                      className={`h-10 w-10 sm:h-12 sm:w-12 lg:h-10 lg:w-10 ${
//                        isDark ? "white" : "black"
//                      }`}
//                    />
         
//                      <span
//                        className={`bg-gradient-to-r bg-clip-text text-4xl text-transparent font-bold sm:text-5xl lg:text-5xl ${
//                          isDark
//                            ? "from-green-500 via-teal-400 to-purple-500"
//                            : "from-indigo-700 via-fuchsia-600 to-amber-500"
//                        }`}
//                      >
//                        LET'S CONNECT
//                      </span>
//                  </h1>
        
//           <div className="w-28  h-[3px] bg-gradient-to-r from-transparent via-[#133aba]  to-transparent mx-auto mt-6 rounded-full" />
//         </div>

//         <div className="mt-17 grid gap-10 lg:grid-cols-2 lg:gap-14">

//           {/* LEFT — Intro + contact links */}

//           <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
//             <p
//               className={`mb-3 text-xl font-bold text-left sm:text-2xl lg:text-3xl ${
//                 isDark ? "text-cyan-400" : "text-indigo-600"
//               }`}
//             >
//               Get in Touch
//             </p>

//             <p
//               className={`mb-8 max-w-md text-left text-sm leading-7 sm:text-base ${
//                 isDark ? "text-slate-400" : "text-slate-600"
//               }`}
//             >
//               Open to entry-level Software Engineer / Java Full Stack Developer roles.
//               Happy to talk through opportunities, projects, or just say hi. Feel free to
//               reach out using the form or via direct email.
//             </p>

//             <div className="flex w-full max-w-md flex-col gap-3">
//               <ContactLink
//                 icon={<FaEnvelope size={16} />}
//                 label="Email"
//                 value="shivanigurumurthy10@gmail.com"
//                 href="mailto:shivanigurumurthy10@gmail.com"
//                 isDark={isDark}
//                 accent={accent}
//               />
//               <ContactLink
//                 icon={<FaMapMarkerAlt size={16} />}
//                 label="Location"
//                 value="Hyderabad, India"
//                 href="mailto:shivanigurumurthy10@gmail.com"
//                 isDark={isDark}
//                 accent={accent}
//               />
//                <div className="mt-4 mb-10 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-6">
//                 <p className={`w-full lg:text-left text-sm sm:text-center ${isDark ? "text-slate-400" : "text-slate-600"}`}>Follow me on Social Media</p>
//                 <a
//                   href="https://linkedin.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="group"
//                 >
//                   <FaLinkedin
//                     size={28}
//                     className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-cyan-400 ${
//                       isDark ? "text-slate-300" : "text-slate-500"
//                     }`}
//                   />
//                 </a>
    
//                 <a
//                   href="https://github.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="group"
//                 >
//                   <FaGithub
//                     size={28}
//                     className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-violet-400 ${
//                       isDark ? "text-slate-300" : "text-slate-500"
//                     }`}
//                   />
//                 </a>
    
//                 <a
//                   href="https://twitter.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="group"
//                 >
//                   <FaXTwitter
//                     size={28}
//                     className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 ${
//                       isDark
//                         ? "text-slate-300 group-hover:text-white"
//                         : "text-slate-500 group-hover:text-slate-900"
//                     }`}
//                   />
//                 </a>
//                 <a
//                   href="https://github.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="group"
//                 >
//                   <FaInstagram
//                     size={28}
//                     className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-pink-400 ${
//                       isDark ? "text-slate-300" : "text-slate-500"
//                     }`}
//                   />
//                 </a>
//                 <a
//                   href="https://github.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="group"
//                 >
//                   <SiLeetcode
//                     size={28}
//                     className={`transition duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-yellow-400 ${
//                       isDark ? "text-slate-300" : "text-slate-500"
//                     }`}
//                   />
//                 </a>
    
              
    
//               </div>
//             </div>

//           </div>

//           {/* RIGHT — Form */}

//           <div
//             className={`
//               rounded-3xl border mb-20 p-6 backdrop-blur-2xl sm:p-8
//               ${
//                 isDark
//                   ? "border-transparent bg-white/[0.05] shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
//                   : "border-white/50 bg-white/30 shadow-[0_8px_40px_rgba(15,23,42,0.08)]"
//               }
//             `}
//           >
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//               <div>
//                 <label className={`text-xs mb-2 font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="Your name"
//                   className={inputClasses}
//                 />
//               </div>

//               <div>
//                 <label className={`text-xs mb-2 font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="you@example.com"
//                   className={inputClasses}
//                 />
//               </div>

//               <div>
//                 <label className={`text-xs mb-2 font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   required
//                   rows={4}
//                   value={form.message}
//                   onChange={handleChange}
//                   placeholder="What's on your mind?"
//                   className={`${inputClasses} resize-none`}
//                 />
//               </div>

//                   <button
//                   type="submit"
//                   className={`
//                     mt-2 flex items-center justify-center gap-2 self-start
//                     px-6 py-2 !rounded-2xl
//                     text-sm font-semibold tracking-wide text-white
//                     transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg 
//                     ${
//                       isDark
//                         ? "bg-cyan-500 hover:bg-cyan-600"
//                         : "bg-indigo-600 hover:bg-indigo-700"
//                     }
//                   `}
//                 >
//                   <span>Send Message</span>
//                   <FaPaperPlane size={13} />
//                 </button>

//             </form>
//           </div>

      
//         </div>
// <div
//   className={`mt-8  flex flex-col items-center justify-between gap-3 border-t pt-3 text-s sm:flex-row sm:mt-2 ${
//     isDark
//       ? "border-white/10"
//       : "border-slate-300"
//   }`}
// >        <p className={isDark ? "text-slate-600" : "text-slate-400"}>
//           © {new Date().getFullYear()} Shivani Gurumurthy. All rights reserved.
//         </p>

//         <p className={`flex items-center gap-1.5 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
//           Made with <FaHeart className="text-pink-500" size={12} /> and lots of coffee. 
//         </p>
//       </div>

//       </div>
//     </section>
//   );
// }

// function ContactLink({ icon, label, value, href, isDark, accent }) {
//   return (
//     <a
//       href={href}
//       target={href.startsWith("http") ? "_blank" : undefined}
//       rel={href.startsWith("http") ? "noreferrer" : undefined}
//       className={`
//         group flex items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all
//         ${
//           isDark
//             ? "border-white/10 bg-white/[0.04] hover:border-cyan-400/40 hover:bg-white/[0.07]"
//             : "border-white/50 bg-white/30 hover:border-indigo-400/50 hover:bg-white/50"
//         }
//       `}
//     >
//       <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isDark ? "bg-white/5" : "bg-white/50"} ${accent}`}>
//         {icon}
//       </span>
//       <span className="flex flex-col text-left">
//         <span className={`text-[10px] font-semibold uppercase tracking-wide ${isDark ? "text-slate-500" : "text-slate-400"}`}>
//           {label}
//         </span>
//         <span className={`text-sm ${isDark ? "text-slate-200" : "text-slate-700"}`}>
//           {value}
//         </span>
//       </span>
//     </a>
//   );
// }


import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaMapMarkerAlt} from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import {SiLeetcode } from "react-icons/si";
import { FaHeart, FaCoffee } from "react-icons/fa";
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

  const gradientText = isDark
    ? "from-violet-500 via-cyan-400 to-pink-500"
    : "from-indigo-700 via-fuchsia-600 to-amber-500";

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
  const reveal = (delayMs = 0) => `
    transition-all duration-700 ease-out
    ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `;
  const revealStyle = (delayMs = 0) => ({ transitionDelay: `${delayMs}ms` });

  return (
<section id="contact" 
        className={`relative scroll-mt-24 pt-24 pb-8
        ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
        >
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* Heading */}

         <div className={`text-center mt-10 ${reveal()}`} style={revealStyle(0)}>
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${
              isDark ? "white" : "black"
            }`}
          >
            Reach Out
          </p>
        
         <h1 className="mb-4 flex items-center justify-center gap-4 font-extrabold leading-tight">
                     <HiOutlineChatBubbleLeftRight
                     className={`h-10 w-10 sm:h-12 sm:w-12 lg:h-10 lg:w-10 transition-transform duration-500 ${
                       isDark ? "white" : "black"
                     } ${mounted ? "rotate-0" : "-rotate-12"}`}
                   />
         
                     <span
                       className={`bg-gradient-to-r bg-clip-text text-4xl text-transparent font-bold sm:text-5xl lg:text-5xl transition-all duration-700 ${
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
              mounted ? "w-28" : "w-0"
            }`}
          />
        </div>

        <div className="mt-17 grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT — Intro + contact links */}

          <div
            className={`flex flex-col items-center text-center lg:items-start lg:text-left ${reveal()}`}
            style={revealStyle(120)}
          >
            <p
              className={`mb-3 text-xl font-bold text-left sm:text-2xl lg:text-3xl ${
                isDark ? "text-cyan-400" : "text-indigo-600"
              }`}
            >
              Get in Touch
            </p>

            <p
              className={`mb-8 max-w-md text-left text-sm leading-7 sm:text-base ${
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
                 className={`mt-4 mb-10 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-6 transition-all duration-500 ease-out ${
                   mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                 }`}
                 style={revealStyle(360)}
               >
                <p className={`w-full lg:text-left text-sm sm:text-center ${isDark ? "text-slate-400" : "text-slate-600"}`}>Follow me on Social Media</p>
                <a
                  href="https://www.linkedin.com/in/shivanigurumurthy/"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <FaLinkedin
                    size={28}
                    className={`transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-cyan-400 group-active:scale-95 ${
                      isDark ? "text-slate-300" : "text-slate-500"
                    }`}
                  />
                </a>
    
                <a
                  href="https://github.com/GurumurthyShivani"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <FaGithub
                    size={28}
                    className={`transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-violet-400 group-active:scale-95 ${
                      isDark ? "text-slate-300" : "text-slate-500"
                    }`}
                  />
                </a>
    
                <a
                  href="https://x.com/Neethu_2910"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <FaXTwitter
                    size={28}
                    className={`transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 group-active:scale-95 ${
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
                  className="group"
                >
                  <FaInstagram
                    size={28}
                    className={`transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-pink-400 group-active:scale-95 ${
                      isDark ? "text-slate-300" : "text-slate-500"
                    }`}
                  />
                </a>
                <a
                  href="https://leetcode.com/u/GurumurthyShivani/"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <SiLeetcode
                    size={28}
                    className={`transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-yellow-400 group-active:scale-95 ${
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
              rounded-3xl border mb-20 p-6 backdrop-blur-2xl sm:p-8
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
                    mt-2 flex items-center justify-center gap-2 self-start
                    px-6 py-2 !rounded-2xl
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
<div
  className={`mt-8  flex flex-col items-center justify-between gap-3 border-t pt-3 text-s sm:flex-row sm:mt-2 transition-opacity duration-700 ease-out ${
    mounted ? "opacity-100" : "opacity-0"
  } ${
    isDark
      ? "border-white/10"
      : "border-slate-300"
  }`}
  style={revealStyle(400)}
>        <p className={isDark ? "text-slate-600" : "text-slate-400"}>
          © {new Date().getFullYear()} Shivani Gurumurthy. All rights reserved.
        </p>

        <p className={`flex items-center gap-1.5 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
          Made with <FaHeart className="text-pink-500 transition-transform duration-300 hover:scale-125" size={12} /> and lots of coffee. 
        </p>
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
        group flex items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-xl
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]
        ${
          isDark
            ? "border-white/10 bg-white/[0.04] hover:border-cyan-400/40 hover:bg-white/[0.07]"
            : "border-white/50 bg-white/30 hover:border-indigo-400/50 hover:bg-white/50"
        }
      `}
    >
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${isDark ? "bg-white/5" : "bg-white/50"} ${accent}`}>
        {icon}
      </span>
      <span className="flex flex-col text-left">
        <span className={`text-[10px] font-semibold uppercase tracking-wide ${isDark ? "text-slate-500" : "text-slate-400"}`}>
          {label}
        </span>
        <span className={`text-sm ${isDark ? "text-slate-200" : "text-slate-700"}`}>
          {value}
        </span>
      </span>
    </a>
  );
}