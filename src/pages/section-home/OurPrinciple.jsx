import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import { CheckCircle2, Building2, Cpu } from "lucide-react";

export default function OurPrinciple() {
    const { lang } = useLang();
    const [data, setData] = useState(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        fetch("/data/principals.json?v=" + new Date().getTime())
            .then(r => r.json())
            .then(setData)
            .catch(() => {});
    }, []);

    if (!data) return null;

    const { section, principals } = data;
    const current = principals[active];

    return (
        <section id="principals" className="relative py-20 md:py-28 px-4 md:px-6 bg-[#0B1120] overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-6xl mx-auto z-10">
                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[11px] font-bold tracking-widest uppercase">
                            {section.subtitle[lang]}
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                        {section.title[lang]}
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        {section.description[lang]}
                    </p>
                </motion.div>

                {/* ── TAB SWITCHER ── */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-white/5 backdrop-blur-xl rounded-full p-1 gap-0.5 border border-white/10">
                        {principals.map((p, i) => (
                            <button
                                key={p.id}
                                onClick={() => setActive(i)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer relative ${active === i
                                    ? "text-white"
                                    : "text-slate-400 hover:text-white"
                                }`}
                            >
                                {active === i && (
                                    <motion.div
                                        layoutId="principalTab"
                                        className="absolute inset-0 rounded-full"
                                        style={{ backgroundColor: current.color }}
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{p.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── CONTENT ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-2xl relative"
                    >
                        {/* subtle glow */}
                        <div
                            className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-20"
                            style={{ backgroundColor: current.color }}
                        />

                        {/* ── ROW 1: HERO BANNER + INFO ── */}
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Left — Image */}
                            <div className="relative min-h-[260px] lg:min-h-[380px] overflow-hidden">
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                        e.currentTarget.parentElement.style.background =
                                            `linear-gradient(135deg, ${current.color}15 0%, ${current.color}08 100%)`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-l from-slate-900/70 to-transparent hidden lg:block" />

                                {/* Brand badge */}
                                <div className="absolute bottom-5 left-5 z-10">
                                    <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/10">
                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{ background: current.color, boxShadow: `0 0 12px ${current.color}` }}
                                        />
                                        <span className="text-white font-bold text-base">{current.name}</span>
                                    </div>
                                </div>

                                {/* Stats overlay (if available) */}
                                {current.stats && current.stats.length > 0 && (
                                    <div className="absolute bottom-5 right-5 z-10 hidden md:flex gap-2">
                                        {current.stats.map((s, i) => (
                                            <div key={i} className="bg-black/40 backdrop-blur-md rounded-xl px-3.5 py-2 border border-white/10 text-center min-w-[80px]">
                                                <div className="text-lg font-black text-white leading-none" style={{ color: current.color }}>{s.value}</div>
                                                <div className="text-[10px] text-slate-300 mt-1 leading-tight font-medium max-w-[100px]">{s.label[lang]}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Right — Overview */}
                            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center relative z-10">
                                <span
                                    className="text-[11px] font-bold tracking-widest uppercase mb-2"
                                    style={{ color: current.color }}
                                >
                                    {current.tagline[lang]}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                                    {current.description[lang].substring(0, 80)}...
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                                    {current.description[lang]}
                                </p>

                                {/* Inline highlights */}
                                <div className="grid grid-cols-2 gap-2.5">
                                    {current.highlights[lang].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2.5 border border-white/5">
                                            <CheckCircle2
                                                className="w-3.5 h-3.5 shrink-0"
                                                style={{ color: current.color }}
                                            />
                                            <span className="text-slate-200 text-xs font-medium leading-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── MOBILE STATS (shown below image on small screens) ── */}
                        {current.stats && current.stats.length > 0 && (
                            <div className="grid grid-cols-3 gap-px bg-white/5 md:hidden">
                                {current.stats.map((s, i) => (
                                    <div key={i} className="bg-slate-900/80 p-4 text-center">
                                        <div className="text-2xl font-black leading-none mb-1" style={{ color: current.color }}>{s.value}</div>
                                        <div className="text-[10px] text-slate-400 leading-tight font-medium">{s.label[lang]}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* ── DIVIDER ── */}
                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* ── ROW 2: ABOUT ── */}
                        {current.about && (
                            <div className="p-6 md:p-8 lg:px-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${current.color}15` }}>
                                        <Building2 className="w-4 h-4" style={{ color: current.color }} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-base font-bold text-white mb-2">
                                            {current.about.title[lang]}
                                        </h4>
                                        <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                                            {current.about.text[lang]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── ROW 3: FEATURES GRID ── */}
                        {current.features && current.features.length > 0 && (
                            <>
                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                <div className="p-6 md:p-8 lg:px-10">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${current.color}15` }}>
                                            <Cpu className="w-4 h-4" style={{ color: current.color }} />
                                        </div>
                                        <h4 className="text-base font-bold text-white">
                                            {lang === "id" ? "Teknologi Unggulan" : "Key Technologies"}
                                        </h4>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {current.features.map((f, i) => (
                                            <div
                                                key={i}
                                                className="group bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300"
                                            >
                                                <div className="h-40 bg-slate-800/50 relative overflow-hidden">
                                                    <img
                                                        src={f.image}
                                                        alt={f.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = "none";
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                                    <div className="absolute bottom-3 left-4">
                                                        <span className="text-sm font-bold" style={{ color: current.color }}>{f.title}</span>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3">
                                                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                                                        {f.description[lang]}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2.5 mt-10">
                    {principals.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`rounded-full transition-all duration-500 cursor-pointer ${active === i
                                ? "w-8 h-2"
                                : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                            }`}
                            style={{ backgroundColor: active === i ? current.color : undefined }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
