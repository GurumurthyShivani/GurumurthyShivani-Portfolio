// export default function SkillBadge({ name, icon: Icon, mono, color }) {
//   return (
//     <div className="group flex flex-col items-center justify-center gap-3 w-28 h-28 rounded-md bg-[color:var(--color-surface)] border border-[color:var(--color-border)] hover:border-[color:var(--color-gold)] hover:-translate-y-1 transition-all duration-200">
//       {Icon ? (
//         <Icon size={30} color={color} />
//       ) : (
//         <span
//           className="font-mono text-xs font-semibold px-2 py-1 rounded border"
//           style={{ color, borderColor: color }}
//         >
//           {mono}
//         </span>
//       )}
//       <span className="text-xs text-[color:var(--color-text-muted)] group-hover:text-[color:var(--color-text)] text-center px-2">
//         {name}
//       </span>
//     </div>
//   )
// }


export default function SkillBadge({ name, icon: Icon, mono, color }) {
  return (
    <div className="group w-28 h-28 [perspective:1000px] cursor-pointer">

      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* Front */}
        <div
          className="
            absolute inset-0
            rounded-2xl
            border border-white/10
            bg-white/5 backdrop-blur-md
            flex flex-col items-center justify-center gap-3
            [backface-visibility:hidden]
            transition-all duration-300
            group-hover:shadow-[0_0_25px_rgba(212,175,55,0.45)]
            group-hover:border-[#d4af37]
          "
        >
          {Icon ? (
            <Icon size={42} color={color} />
          ) : (
            <span
              className="font-semibold text-xs px-2 py-1 rounded-lg border"
              style={{ color, borderColor: color }}
            >
              {mono}
            </span>
          )}

          {/* <span className="text-xs text-center text-gray-300 px-2">
            {name}
          </span> */}
        </div>

        {/* Back */}
<div
  className="
    absolute inset-0
    rounded-2xl
    border border-emerald-400/70
   border border-[#34D399]
shadow-[0_0_40px_rgba(52,211,153,0.55)]
    backdrop-blur-md
    flex flex-col items-center justify-center
    [transform:rotateY(180deg)]
    [backface-visibility:hidden]
    shadow-[0_0_35px_rgba(34,197,94,0.45)]
  "
>
  {/* {Icon ? (
    <Icon size={36} color="#4ADE80" />
  ) : (
    <span
      className="font-semibold text-xs px-2 py-1 rounded-lg border border-emerald-400 text-emerald-300"
    >
      {mono}
    </span>
  )} */}
  {name}

  {/* <span className="mt-2 text-sm font-semibold text-emerald-200">
    {name}
  </span> */}
</div>

      </div>

    </div>
  );
}