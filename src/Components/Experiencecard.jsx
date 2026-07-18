import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
} from "react-icons/hi";

export default function ExperienceCard({
  job,
  index,
  isDark,
}) {
  return (
    <div className="relative flex items-start gap-3 sm:gap-8">

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.4,
          delay: index * 0.15,
        }}
        className={`
          absolute
          left-[8px]
          sm:left-[6px]
          top-6
          sm:top-8
          z-20
          h-4
          w-4
          sm:h-5
          sm:w-5
          rounded-full
          border-4
          ${
            isDark
              ? "border-[#050816] bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
              : "border-white bg-indigo-600 shadow-[0_0_18px_rgba(79,70,229,0.45)]"
          }
        `}
      />

      {/* Connector */}
<div className="w-4 sm:w-8" />
      {/* Card */}
<motion.div
  initial={{
    opacity: 0,
    x: 50,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{
    duration: 0.55,
    ease: "easeOut",
  }}
  className={`
    w-full
    lg:w-[88%]
    rounded-2xl
    border
    p-3.5
    sm:p-5
    backdrop-blur-xl
    transition-all
    duration-500
    hover:-translate-y-1
    ${
      isDark
        ? "border-cyan-400/20 bg-slate-900/60 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]"
        : "border-slate-200 bg-white hover:border-indigo-500 hover:shadow-[0_0_8px_rgba(99,102,241,0.25),0_0_20px_rgba(99,102,241,0.18),0_0_40px_rgba(99,102,241,0.12)]"    
        }
  `}
>
  {/* Header */}
  <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

    {/* Left */}
    <div className="flex gap-2.5 sm:gap-3">

      <div
        className={`
          flex
          h-9
          w-9
          sm:h-11
          sm:w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          ${
            isDark
              ? "bg-cyan-400/10 text-cyan-300"
              : "bg-indigo-100 text-indigo-700"
          }
        `}
      >
        <HiOutlineBriefcase size={18} className="sm:hidden" />
        <HiOutlineBriefcase size={22} className="hidden sm:block" />
      </div>

      <div>
        <h3
          className={`text-base sm:text-lg lg:text-xl font-bold ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {job.role}
        </h3>

        <p
          className={`mt-1 text-xs sm:text-sm lg:text-base font-semibold ${
            isDark ? "text-cyan-300" : "text-indigo-600"
          }`}
        >
          {job.company}
        </p>
      </div>
    </div>

    {/* Right */}
    <div className="flex flex-col items-start gap-1 text-xs sm:items-end sm:text-sm">

      <div
        className={`flex items-center gap-2 ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        <HiOutlineLocationMarker size={15} className="shrink-0 sm:hidden" />
        <HiOutlineLocationMarker size={16} className="hidden shrink-0 sm:block" />
        {job.location}
      </div>

      <div
        className={`flex items-center gap-2 ${
          isDark ? "text-slate-500" : "text-slate-500"
        }`}
      >
        <HiOutlineCalendar size={15} className="shrink-0 sm:hidden" />
        <HiOutlineCalendar size={16} className="hidden shrink-0 sm:block" />
        {job.period}
      </div>

    </div>
  </div>

  {/* Divider */}
  <div
    className={`my-4 h-px ${
      isDark ? "bg-white/10" : "bg-slate-200"
    }`}
  />

  {/* Bullet Points */}
  <ul className="space-y-2">

    {job.points.map((point, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: 15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.35,
          delay: i * 0.08,
        }}
        className="flex items-start gap-3"
      >
        <span
          className={`mt-2 h-2 w-2 rounded-full shrink-0 ${
            isDark ? "bg-cyan-400" : "bg-indigo-600"
          }`}
        />

        <span
          className={`text-xs sm:text-sm leading-5 sm:leading-6 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {point}
        </span>
      </motion.li>
    ))}

  </ul>
</motion.div>
    </div>
  );
}