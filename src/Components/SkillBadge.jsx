// export default function SkillBadge({ name, icon: Icon, mono, color }) {
//   return (
//     <div className="group w-28 h-28 [perspective:1000px] cursor-pointer">

//       <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

//         {/* Front */}
//         <div
//           className="
//             absolute inset-0
//             rounded-2xl
//             border border-white/10
//             bg-white/5 backdrop-blur-md
//             flex flex-col items-center justify-center gap-3
//             [backface-visibility:hidden]
//             transition-all duration-300
//             group-hover:shadow-[0_0_25px_rgba(212,175,55,0.45)]
//             group-hover:border-[#d4af37]
//           "
//         >
//           {Icon ? (
//             <Icon size={42} color={color} />
//           ) : (
//             <span
//               className="font-semibold text-xs px-2 py-1 rounded-lg border"
//               style={{ color, borderColor: color }}
//             >
//               {mono}
//             </span>
//           )}

//           {/* <span className="text-xs text-center text-gray-300 px-2">
//             {name}
//           </span> */}
//         </div>

//         {/* Back */}
// <div
//   className="
//     absolute inset-0
//     rounded-2xl
//     border border-emerald-400/70
//    border border-[#34D399]
// shadow-[0_0_40px_rgba(52,211,153,0.55)]
//     backdrop-blur-md
//     flex flex-col items-center justify-center
//     [transform:rotateY(180deg)]
//     [backface-visibility:hidden]
//     shadow-[0_0_35px_rgba(34,197,94,0.45)]
//   "
// >
//   {/* {Icon ? (
//     <Icon size={36} color="#4ADE80" />
//   ) : (
//     <span
//       className="font-semibold text-xs px-2 py-1 rounded-lg border border-emerald-400 text-emerald-300"
//     >
//       {mono}
//     </span>
//   )} */}
//   {name}

//   {/* <span className="mt-2 text-sm font-semibold text-emerald-200">
//     {name}
//   </span> */}
// </div>

//       </div>

//     </div>
//   );
// }

import { useState } from "react";

export default function SkillBadge({ name, icon: Icon, mono, color, isDark }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 [perspective:1000px] cursor-pointer select-none"
      onClick={() => setFlipped((v) => !v)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >

        {/* Front */}
        <div
          className={`
            absolute inset-0
            rounded-2xl
            border border-white/10
            bg-white/5 backdrop-blur-md
            flex flex-col items-center justify-center gap-3
            [backface-visibility:hidden]
            transition-all duration-300
            group-hover:shadow-[0_0_25px_rgba(212,175,55,0.45)]
            group-hover:border-[#d4af37]
            ${flipped ? "shadow-[0_0_25px_rgba(212,175,55,0.45)] border-[#d4af37]" : ""}
          `}
        >
          {Icon ? (
            <>
              <Icon size={32} className="sm:hidden" color={color} />
              <Icon size={42} className="hidden sm:block" color={color} />
            </>
          ) : (
            <span
              className="font-semibold text-[10px] sm:text-xs px-2 py-1 rounded-lg border"
              style={{ color, borderColor: color }}
            >
              {mono}
            </span>
          )}
        </div>

        {/* Back */}
        <div
          className={`
            absolute inset-0
            rounded-2xl
            border border-[#34D399]
            shadow-[0_0_35px_rgba(34,197,94,0.45)]
            backdrop-blur-md
            flex flex-col items-center justify-center
            px-2 text-center
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
            ${isDark ? "bg-white/5" : "bg-white/70"}
          `}
        >
          <span
            className={`text-[11px] sm:text-sm font-semibold ${
              isDark ? "text-emerald-200" : "text-black"
            }`}
          >
            {name}
          </span>
        </div>

      </div>
    </div>
  );
}


