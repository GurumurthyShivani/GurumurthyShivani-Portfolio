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


