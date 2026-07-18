import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const readTheme = () =>
      setIsDark((root.getAttribute("data-theme") || localStorage.getItem("theme") || "dark") === "dark");

    readTheme();

    const observer = new MutationObserver(readTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <footer
      className={`transition-opacity duration-700 ease-out ${
        mounted ? "opacity-100" : "opacity-0"
      } ${isDark ? "bg-[#050816]" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 sm:py-8">

        <div
          className={`mx-auto mb-6 h-px w-full rounded-full ${
            isDark ? "bg-white/10" : "bg-slate-300"
          }`}
        />

        <div className="flex flex-col items-center gap-2 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-left sm:text-base">

          <p className={isDark ? "text-slate-600" : "text-slate-400"}>
            © {year} Shivani Gurumurthy. All rights reserved.
          </p>

          <p className={`flex items-center gap-1.5 ${isDark ? "text-slate-600" : "text-slate-400"}`}>
            Made with <FaHeart className="text-pink-500 transition-transform duration-300 hover:scale-125" size={11} /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}