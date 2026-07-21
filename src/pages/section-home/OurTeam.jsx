import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";

function MemberCard({ member, index, lang }) {
  const [imgError, setImgError] = useState(false);

  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-xl"
    >
      {/* Photo */}
      <div className="aspect-[3/4] overflow-hidden bg-slate-800/60">
        {!imgError && member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-slate-600 font-black text-4xl tracking-widest select-none">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-primary text-[9px] font-bold tracking-[0.12em] uppercase mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.role[lang]}
        </p>
        <h3 className="text-white text-sm font-semibold leading-tight">
          {member.name}
        </h3>
      </div>

      {/* Index watermark */}
      <span className="absolute top-2 right-2.5 text-white/8 font-black text-3xl leading-none select-none tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

export default function OurTeam() {
  const { lang } = useLang();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/team.json?v=" + new Date().getTime())
      .then((r) => r.json())
      .then(setData)
      .catch(() => {});
  }, []);

  if (!data) return null;

  const { section, members } = data;

  return (
    <section
      id="team"
      className="relative py-20 md:py-24 px-4 md:px-6 bg-[#0B1120] overflow-hidden"
    >
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase">
              {section.subtitle[lang]}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {section.title[lang]}
            </h2>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              {section.description[lang]}
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 md:gap-3">
          {members.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
