import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

/* ─── animations ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function Portofolio() {
    const { lang } = useLang();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/data/portfolio.json")
            .then((res) => res.json())
            .then((data) => setItems(data?.portfolios || []));
    }, []);

    return (
        <>
            {/* ══════════ HERO ══════════ */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Decorative orbs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
                <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-sky-500/6 rounded-full blur-[80px]" />
                <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-violet-500/6 rounded-full blur-[80px]" />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                    }}
                />

                <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-full px-5 py-2 mb-6"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span className="text-primary font-medium tracking-wide uppercase text-xs">
                            {lang === "id" ? "Portofolio Kami" : "Our Portfolio"}
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
                    >
                        <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                            {lang === "id"
                                ? "Proyek yang Telah Kami Kerjakan"
                                : "Projects We've Delivered"}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
                    >
                        {lang === "id"
                            ? "Kami telah membantu berbagai institusi dan korporasi melalui solusi teknologi inovatif yang meningkatkan efisiensi dan keamanan."
                            : "We've helped various institutions and corporations through innovative technology solutions that enhance efficiency and security."}
                    </motion.p>


                </div>
            </section>

            {/* ══════════ PORTFOLIO CARDS ══════════ */}
            <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-50/50 to-white">
                <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                    {items.map((item, idx) => {
                        const isReversed = idx % 2 === 1;
                        return (
                            <motion.div
                                key={item.id}
                                variants={scaleIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                className="group relative"
                            >
                                {/* Glow effect behind card */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-sky-400/10 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative bg-white rounded-2xl shadow-md shadow-slate-200/60 border border-slate-100/80 overflow-hidden hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-500">
                                    <div className={`grid md:grid-cols-2`}>
                                        {/* ─── Image ─── */}
                                        <div
                                            className={`relative overflow-hidden ${isReversed ? "md:order-2" : ""}`}
                                        >
                                            {/* Image gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/[0.02] to-slate-900/[0.06] z-10 pointer-events-none" />

                                            {/* Pattern background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50" />

                                            <img
                                                src={item.image}
                                                alt={item.title[lang]}
                                                className="relative z-[5] w-full aspect-[4/3] object-contain p-6 md:p-8 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                            />

                                            {/* Project number badge */}
                                            <div className="absolute top-4 left-4 z-20">
                                                <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center border border-slate-100">
                                                    <span className="text-sm font-bold bg-gradient-to-br from-primary to-sky-600 bg-clip-text text-transparent">
                                                        {String(idx + 1).padStart(2, "0")}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ─── Content ─── */}
                                        <div
                                            className={`flex flex-col justify-center p-8 md:p-12 ${isReversed ? "md:order-1" : ""}`}
                                        >
                                            {/* Category badge */}
                                            <span className="inline-flex items-center gap-2 text-primary font-semibold tracking-widest uppercase text-[10px] mb-4 w-fit bg-primary/[0.06] rounded-full px-3.5 py-1.5">
                                                <Briefcase className="w-3 h-3" />
                                                {lang === "id" ? `Proyek` : `Project`}
                                            </span>

                                            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 leading-tight">
                                                {item.title[lang]}
                                            </h2>

                                            <p
                                                className="text-slate-500 text-sm leading-relaxed mb-7"
                                                dangerouslySetInnerHTML={{ __html: item.description[lang] }}
                                            />

                                            {/* Divider */}
                                            <div className="w-12 h-[2px] bg-gradient-to-r from-primary/40 to-transparent mb-6" />

                                            {/* Features */}
                                            <div className="space-y-3">
                                                {item.features[lang].map((f, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.06, duration: 0.4 }}
                                                        viewport={{ once: true }}
                                                        className="flex items-start gap-3 group/item"
                                                    >
                                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/10 to-sky-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:from-primary/20 group-hover/item:to-sky-500/20 transition-all">
                                                            <CheckCircle2 className="w-3 h-3 text-primary" />
                                                        </div>
                                                        <span
                                                            className="text-sm text-slate-600 leading-relaxed"
                                                            dangerouslySetInnerHTML={{ __html: f }}
                                                        />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ══════════ CTA ══════════ */}
            <section className="px-6 pb-24 md:pb-32">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-16 text-white text-center overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
                        <div className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                                backgroundSize: '24px 24px'
                            }}
                        />

                        <div className="relative">
                            <div className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-1.5 mb-6">
                                <Sparkles className="w-3 h-3 text-primary" />
                                <span className="text-[10px] font-semibold tracking-widest uppercase text-primary">
                                    {lang === "id" ? "Mari Bekerja Sama" : "Let's Collaborate"}
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {lang === "id"
                                    ? "Tertarik bekerja sama?"
                                    : "Interested in working together?"}
                            </h3>
                            <p className="text-white/60 text-sm md:text-base mb-8 max-w-lg mx-auto leading-relaxed">
                                {lang === "id"
                                    ? "Hubungi kami untuk berdiskusi tentang bagaimana kami dapat membantu transformasi digital organisasi Anda."
                                    : "Contact us to discuss how we can help with your organization's digital transformation."}
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary to-sky-500 text-white font-semibold px-7 py-3.5 rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                {lang === "id" ? "Hubungi Kami" : "Contact Us"}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
