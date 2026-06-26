import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import { CheckCircle2, ArrowRight } from "lucide-react";

import principalsData from "../../../public/data/principals.json";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

export default function OurPrinciple() {
    const { lang } = useLang();
    const [data, setData] = useState(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        setData(principalsData);
    }, []);

    if (!data) return null;

    const { section, principals } = data;
    const current = principals[active];

    return (
        <section id="principals" className="relative py-24 md:py-32 px-6 bg-[#0B1120] overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <div className="relative max-w-6xl mx-auto z-10">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-5">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-bold tracking-widest uppercase">
                            {section.subtitle[lang]}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
                        {section.title[lang]}
                    </h2>
                    <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                        {section.description[lang]}
                    </p>
                </motion.div>

                {/* Tab switcher (Premium Glass Pill) */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white/5 backdrop-blur-xl rounded-full p-1.5 gap-1 border border-white/10 shadow-xl">
                        {principals.map((p, i) => (
                            <button
                                key={p.id}
                                onClick={() => setActive(i)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer relative ${active === i
                                        ? "text-white"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {active === i && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary rounded-full"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{p.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="grid lg:grid-cols-5 gap-0 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-900/40 backdrop-blur-2xl relative"
                    >
                        {/* decorative card glow */}
                        <div
                            className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-30"
                            style={{ backgroundColor: current.color }}
                        />

                        {/* Left — image (2 columns) */}
                        <div className="relative lg:col-span-2 min-h-[350px] lg:min-h-[500px] overflow-hidden group">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                src={current.image}
                                alt={current.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    e.currentTarget.parentElement.style.background =
                                        `linear-gradient(135deg, ${current.color}22 0%, ${current.color}11 100%)`;
                                }}
                            />
                            {/* gradient overlay matching dark theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent lg:hidden" />
                            <div className="absolute inset-0 bg-gradient-to-l from-slate-900/90 via-slate-900/20 to-transparent hidden lg:block" />

                            {/* Brand Name Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10">
                                <div className="inline-flex items-center gap-3 bg-slate-900/60 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10 mb-2">
                                    <div
                                        className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                        style={{ background: current.color, boxShadow: `0 0 15px ${current.color}` }}
                                    />
                                    <span className="text-white font-bold text-lg tracking-wide">
                                        {current.name}
                                    </span>
                                </div>
                                {/* stat badge */}
                                {current.stat?.value && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-4 flex flex-col"
                                    >
                                        <span className="text-white text-5xl font-black tracking-tight" style={{ textShadow: `0 4px 20px ${current.color}40` }}>
                                            {current.stat.value}
                                        </span>
                                        <span className="text-slate-300 text-sm font-medium tracking-wide uppercase mt-1">
                                            {current.stat.label[lang]}
                                        </span>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Right — content (3 columns) */}
                        <div className="lg:col-span-3 p-8 md:p-12 lg:p-14 flex flex-col justify-center relative z-10">
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xs font-bold tracking-widest uppercase mb-4"
                                style={{ color: current.color }}
                            >
                                {current.tagline[lang]}
                            </motion.span>
                            
                            <motion.h3 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                            >
                                Solusi Lengkap dari <br className="hidden sm:block" />
                                <span style={{ color: current.color }}>{current.name}</span>
                            </motion.h3>

                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-slate-400 text-sm md:text-base leading-relaxed mb-10"
                            >
                                {current.description[lang]}
                            </motion.p>

                            {/* highlights grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {current.highlights[lang].map((item, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        key={i}
                                        className="group flex items-center gap-3.5 bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                                    >
                                        <div
                                            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                            style={{ backgroundColor: `${current.color}15` }}
                                        >
                                            <CheckCircle2
                                                className="w-4 h-4"
                                                style={{ color: current.color }}
                                            />
                                        </div>
                                        <span className="text-slate-200 text-sm font-semibold leading-snug group-hover:text-white transition-colors">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Call to action or decorative line */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="h-1 w-20 rounded-full"
                                style={{ background: `linear-gradient(90deg, ${current.color}, transparent)` }}
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* dot indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {principals.map((p, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`rounded-full transition-all duration-500 cursor-pointer ${active === i 
                                ? "w-10 h-2" 
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
