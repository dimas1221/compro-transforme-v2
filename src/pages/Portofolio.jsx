import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ─── animation ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
    }),
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
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

                <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
                    <motion.span
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4"
                    >
                        {lang === "id" ? "Portofolio Kami" : "Our Portfolio"}
                    </motion.span>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5"
                    >
                        {lang === "id"
                            ? "Proyek yang Telah Kami Kerjakan"
                            : "Projects We've Delivered"}
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
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-6xl mx-auto space-y-20">
                    {items.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div
                                className={`grid md:grid-cols-2 ${idx % 2 === 1 ? "" : ""
                                    }`}
                            >
                                {/* Image */}
                                <div
                                    className={`overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""
                                        }`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title[lang]}
                                        className="w-full h-64 md:h-full min-h-[280px] object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div
                                    className={`flex flex-col justify-center p-8 md:p-10 ${idx % 2 === 1 ? "md:order-1" : ""
                                        }`}
                                >
                                    {/* Badge */}
                                    <span className="inline-flex items-center gap-2 text-primary font-semibold tracking-widest uppercase text-xs mb-3 w-fit">
                                        <Briefcase className="w-3.5 h-3.5" />
                                        {lang === "id" ? `Proyek ${idx + 1}` : `Project ${idx + 1}`}
                                    </span>

                                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                                        {item.title[lang]}
                                    </h2>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        {item.description[lang]}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2.5">
                                        {item.features[lang].map((f, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-2.5 group"
                                            >
                                                <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                                    <CheckCircle2 className="w-3 h-3 text-primary" />
                                                </div>
                                                <span className="text-sm text-slate-600 leading-relaxed">
                                                    {f}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ══════════ CTA ══════════ */}
            <section className="px-6 pb-20 md:pb-28">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-primary to-sky-600 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                        <div className="relative">
                            <h3 className="text-xl md:text-2xl font-bold mb-3">
                                {lang === "id"
                                    ? "Tertarik bekerja sama?"
                                    : "Interested in working together?"}
                            </h3>
                            <p className="text-white/80 text-sm md:text-base mb-6 max-w-lg mx-auto">
                                {lang === "id"
                                    ? "Hubungi kami untuk berdiskusi tentang bagaimana kami dapat membantu transformasi digital organisasi Anda."
                                    : "Contact us to discuss how we can help with your organization's digital transformation."}
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors"
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
