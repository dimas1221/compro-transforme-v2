import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Wifi, Home, Server, Code } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const iconMap = {
  Cpu: <Cpu className="w-7 h-7" />,
  Wifi: <Wifi className="w-7 h-7" />,
  Home: <Home className="w-7 h-7" />,
  Server: <Server className="w-7 h-7" />,
  Code: <Code className="w-7 h-7" />,
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
    <>
      {/* ─── DESKTOP ─── */}
      <div className="hidden sm:flex gap-3 rounded-2xl overflow-hidden">
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
              className={`relative cursor-pointer overflow-hidden rounded-2xl
              ${isActive ? "flex-[3]" : "flex-[1]"}
              h-[420px] transition-[flex] duration-700 ease-in-out`}
            >
              <img
                src={f.img}
                alt={title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${isActive
                    ? "bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                    : "bg-black/60"
                  } transition-all duration-700`}
              />

              {/* Content */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6
                transition-all duration-700
                ${isActive ? "opacity-100" : "items-center justify-center text-center opacity-80"}`}
              >
                <div className={`mb-2 text-white ${!isActive ? "mb-1" : ""}`}>
                  {icon}
                </div>

                <h3
                  className={`font-bold text-white transition-all duration-500 ${isActive ? "text-xl md:text-2xl" : "text-sm md:text-base"
                    }`}
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed max-w-md">
                  {desc}
                </p>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ duration: 0.4 }}
                      className="mt-3"
                    >
                      <button
                        onClick={() => navigate(`/solution/${f.id}`)}
                        className="mt-4 px-5 py-2 border border-white/30 rounded-full text-sm font-medium text-white hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
                      >
                        {lang === "id" ? "Pelajari lebih lanjut" : "Learn more"}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── MOBILE ─── */}
      <div className="sm:hidden flex flex-col gap-3">
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
              className={`relative cursor-pointer overflow-hidden rounded-2xl
              ${isActive ? "h-[260px]" : "h-[100px]"}
              transition-all duration-700 ease-in-out`}
            >
              <img
                src={f.img}
                alt={title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${isActive
                    ? "bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                    : "bg-black/65"
                  } transition-all duration-700`}
              />

              {/* Content */}
              <div
                className={`absolute inset-0 flex flex-col px-5
                transition-all duration-700
                ${isActive ? "justify-end pb-6" : "items-center justify-center text-center"}`}
              >
                <div className="mb-1 text-white scale-90">{icon}</div>

                <h3
                  className={`font-bold text-white transition-all duration-500 ${isActive ? "text-base" : "text-sm"
                    }`}
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
                      className="mt-2"
                    >
                      <p className="text-xs text-gray-200 leading-relaxed">
                        {desc}
                      </p>
                      <button
                        onClick={() => navigate(`/solution/${f.id}`)}
                        className="mt-3 text-sm font-medium text-primary hover:underline cursor-pointer"
                      >
                        {lang === "id" ? "Pelajari" : "Learn more"}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
