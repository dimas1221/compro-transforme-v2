import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Wifi, Home, Server, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

const iconMap = {
  Cpu: <Cpu className="w-8 h-8" />,
  Wifi: <Wifi className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Server: <Server className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
};

export default function Solution() {
  const [features, setFeatures] = useState([]);
  const [active, setActive] = useState(1);
  const { lang } = useLang();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data?.features || []));
  }, []);

  return (
    <section className="relative py-3 transition-colors duration-700 p-4 md:p-0 mt-5 bg-[#000000]">
      {/* ================= DESKTOP ================= */}
      <div
        className="hidden sm:flex mx-auto flex-row gap-5 
                   overflow-hidden rounded-xl shadow-lg
                   border border-gray-100 dark:border-gray-800"
      >
        {features.map((f) => {
          const isActive = f.id === active;
          const title = lang === "id" ? f.title_id : f.title_en;
          const desc = lang === "id" ? f.desc_id : f.desc_en;
          const icon = iconMap[f.icon];

          return (
            <motion.div
              key={f.id}
              layout
              onMouseMove={() => setActive(f.id)}
              onMouseLeave={() => setActive(1)}
              transition={{ type: "spring", stiffness: 100, damping: 22 }}
              className={`relative cursor-pointer overflow-hidden
              ${isActive ? "flex-[3]" : "flex-[1]"}
              h-[420px] transition-[flex] duration-700 ease-in-out
              rounded-lg bg-white/5`}
            >
              <motion.img
                src={f.img}
                alt={title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.75]"
              />

              <div
                className={`absolute inset-0 ${
                  isActive ? "bg-black/30" : "bg-black/60"
                } transition-all duration-700 pointer-events-none`}
              />

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center
                transition-all duration-700 pointer-events-none
                ${isActive ? "opacity-100" : "opacity-70"}`}
              >
                <div className="mb-4 text-white">{icon}</div>

                <h3
                  className={`font-bold ${
                    isActive ? "text-xl md:text-2xl" : "text-sm md:text-base"
                  } text-white transition-all duration-500`}
                >
                  {title}
                </h3>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5 }}
                      className="mt-3 max-w-sm text-sm text-gray-200 leading-relaxed pointer-events-auto"
                    >
                      {desc}

                      <div className="mt-5">
                        <button className="px-5 py-2 border border-gray/70 rounded-full text-sm font-medium hover:bg-white hover:text-black transition">
                          {lang === "id"
                            ? "Pelajari lebih lanjut"
                            : "Learn more"}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ================= MOBILE ================= */}
      <div
        className="sm:hidden flex flex-col gap-5  max-w-7xl mx-auto
                   overflow-hidden rounded-xl shadow-md
                   border border-gray-100 dark:border-gray-800 mt-4"
      >
        {features.map((f) => {
          const isActive = f.id === active;
          const title = lang === "id" ? f.title_id : f.title_en;
          const desc = lang === "id" ? f.desc_id : f.desc_en;
          const icon = iconMap[f.icon];

          return (
            <motion.div
              key={f.id}
              layout
              onClick={() => setActive(f.id)}
              transition={{ type: "spring", stiffness: 100, damping: 22 }}
              className={`relative cursor-pointer overflow-hidden
              ${isActive ? "h-[260px]" : "h-[120px]"}
              transition-all duration-700 ease-in-out rounded-lg`}
            >
              <motion.img
                src={f.img}
                alt={title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.75]"
              />

              <div
                className={`absolute inset-0 ${
                  isActive ? "bg-black/30" : "bg-black/65"
                } transition-all duration-700`}
              />

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4
                transition-all duration-700
                ${isActive ? "opacity-100" : "opacity-70"}`}
              >
                <div className="mb-1 text-white scale-90">{icon}</div>

                <h3
                  className={`font-semibold ${
                    isActive ? "text-base" : "text-sm"
                  } text-white transition-all duration-500`}
                >
                  {title}
                </h3>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                      className="mt-2 max-w-xs text-xs text-gray-200 leading-relaxed"
                    >
                      {desc}

                      <div className="mt-3">
                        <button className="text-sm font-medium text-primary hover:underline">
                          {lang === "id" ? "Pelajari" : "Learn more"}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
