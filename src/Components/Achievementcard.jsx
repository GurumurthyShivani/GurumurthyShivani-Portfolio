// import {
//   HiOutlineAcademicCap,
//   HiOutlineCalendar,
//   HiOutlineExternalLink,
// } from "react-icons/hi";

// export default function AchievementCard({
//   certificate,
//   issuer,
//   from,
//   to,
//   link,
//   isDark,
// }) {
//   return (
//     <div
//   className={`group rounded-xl border p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1    
//     ${
//       isDark
//         ? "border-cyan-400/20 bg-slate-900/60 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]"
//         : "border-slate-200 bg-white hover:border-indigo-500 hover:shadow-[0_0_8px_rgba(99,102,241,0.25),0_0_20px_rgba(99,102,241,0.18),0_0_40px_rgba(99,102,241,0.12)]"    
//         }`}
// >
//   {/* Icon */}
//   <div
//     className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${
//       isDark
//         ? "bg-cyan-400/10 text-cyan-300"
//         : "bg-indigo-100 text-indigo-700"
//     }`}
//   >
//     <HiOutlineAcademicCap size={22} />
//   </div>

//   {/* Certificate */}
//   <h5
//     className={`mt-3 text-base text-center font-bold leading-tight ${
//       isDark ? "text-white" : "text-slate-900"
//     }`}
//   >
//     {certificate}
//   </h5>

//   {/* Issuer */}
//   <p
//     className={`mt-1 text-s text-center ${
//       isDark ? "text-cyan-300" : "text-indigo-600"
//     }`}
//   >
//     {issuer}
//   </p>

//   {/* Date */}
//   <div
//     className={`mt-2 flex items-center justify-center gap-1 text-xs ${
//       isDark ? "text-slate-400" : "text-slate-600"
//     }`}
//   >
//     <HiOutlineCalendar size={14} />
//     {from} - {to}
//   </div>

//   {/* Divider */}
//   <div
//     className={`my-3 h-px ${
//       isDark ? "bg-white/10" : "bg-slate-200"
//     }`}
//   />

//   {/* Link */}
//   <a
//   href={link}
//   target="_blank"
//   rel="noreferrer"
//   className={`mt-2 flex w-full items-center justify-center gap-1 text-sm font-semibold transition ${
//     isDark
//       ? "text-cyan-300 hover:text-cyan-200"
//       : "text-indigo-600 hover:text-indigo-800"
//   }`}
// >
//   View Certificate
//   <HiOutlineExternalLink size={15} />
// </a>
// </div>
//   );
// }


import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineExternalLink,
} from "react-icons/hi";

export default function AchievementCard({
  certificate,
  issuer,
  from,
  to,
  link,
  isDark,
}) {
  return (
    <div
  className={`group rounded-xl border p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1    
    ${
      isDark
        ? "border-cyan-400/20 bg-slate-900/60 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]"
        : "border-slate-200 bg-white hover:border-indigo-500 hover:shadow-[0_0_8px_rgba(99,102,241,0.25),0_0_20px_rgba(99,102,241,0.18),0_0_40px_rgba(99,102,241,0.12)]"    
        }`}
>
  {/* Icon */}
  <div
    className={`mx-auto flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl ${
      isDark
        ? "bg-cyan-400/10 text-cyan-300"
        : "bg-indigo-100 text-indigo-700"
    }`}
  >
    <HiOutlineAcademicCap size={20} className="sm:hidden" />
    <HiOutlineAcademicCap size={22} className="hidden sm:block" />
  </div>

  {/* Certificate */}
  <h5
    className={`mt-3 text-sm sm:text-base text-center font-bold leading-tight ${
      isDark ? "text-white" : "text-slate-900"
    }`}
  >
    {certificate}
  </h5>

  {/* Issuer */}
  <p
    className={`mt-1 text-xs sm:text-sm text-center ${
      isDark ? "text-cyan-300" : "text-indigo-600"
    }`}
  >
    {issuer}
  </p>

  {/* Date */}
  <div
    className={`mt-2 flex items-center justify-center gap-1 text-xs ${
      isDark ? "text-slate-400" : "text-slate-600"
    }`}
  >
    <HiOutlineCalendar size={14} />
    {from} - {to}
  </div>

  {/* Divider */}
  <div
    className={`my-3 h-px ${
      isDark ? "bg-white/10" : "bg-slate-200"
    }`}
  />

  {/* Link */}
  <a
  href={link}
  target="_blank"
  rel="noreferrer"
  className={`mt-2 flex w-full items-center justify-center gap-1 text-xs sm:text-sm font-semibold transition ${
    isDark
      ? "text-cyan-300 hover:text-cyan-200"
      : "text-indigo-600 hover:text-indigo-800"
  }`}
>
  View Certificate
  <HiOutlineExternalLink size={14} className="sm:hidden" />
  <HiOutlineExternalLink size={15} className="hidden sm:block" />
</a>
</div>
  );
}