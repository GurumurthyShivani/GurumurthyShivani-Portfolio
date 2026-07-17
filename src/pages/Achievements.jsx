import { useEffect, useState } from "react";
import Section from "../Components/Section";
import AchievementCard from "../Components/AchievementCard";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { achievements } from "../data/achievements";

export default function Achievement() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;

    setTheme(
      root.getAttribute("data-theme") ||
        localStorage.getItem("theme") ||
        "dark"
    );

    const observer = new MutationObserver(() => {
      setTheme(root.getAttribute("data-theme") || "dark");
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  return (
    <Section id="achievements"
    className={`${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      {/* Heading */}

       <div className="mb-10 sm:mb-12 lg:mb-14 text-center">
        <p
          className={`mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] ${
            isDark ? "white" : "black"
          }`}
        >
          Milestones
        </p>
      
        <h1 className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
          <HiOutlineCheckBadge
            className={`h-8 w-8 sm:h-10 sm:w-10 lg:h-10 lg:w-10 ${
              isDark ? "white" : "black"
            }`}
          />
      
          <span
            className={`bg-gradient-to-r bg-clip-text text-transparent font-bold leading-tight
            text-2xl
            sm:text-4xl
            md:text-5xl
            lg:text-4xl
            ${
              isDark
                ? "from-green-500 via-teal-400 to-purple-500"
                : "from-purple-800 via-cyan-500 to-blue-800"
            }`}
          >
            CERTIFICATIONS
          </span>
        </h1>
      
        <div
          className={`mx-auto mt-3 h-[3px] w-24 sm:w-28 lg:w-32 rounded-full bg-gradient-to-r ${
            isDark
              ? "from-transparent via-cyan-400 to-transparent"
              : "from-transparent via-indigo-600 to-transparent"
          }`}
        />
      </div>

      {/* Achievement Cards */}

<div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">        {achievements.map((item) => (
          <AchievementCard
            key={item.certificate}
            certificate={item.certificate}
            issuer={item.issuer}
            from={item.from}
            to={item.to}
            link={item.link}
            isDark={isDark}
          />
        ))}
      </div>
    </Section>
  );
}