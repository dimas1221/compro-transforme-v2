import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import {
    ArrowLeft,
    ArrowRight,
    Layers,
    CheckCircle2,
    Zap,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function SolutionDetail() {
    const { id } = useParams();
    const { lang } = useLang();
    const [feature, setFeature] = useState(null);

    useEffect(() => {
        fetch("/data/features.json")
            .then((r) => r.json())
            .then((data) => {
                const found = data?.features?.find((f) => String(f.id) === id);
                setFeature(found || null);
            });
    }, [id]);

    if (!feature) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-pulse text-slate-400 text-lg">Loading...</div>
            </div>
        );
    }

    const title =
        lang === "id" ? feature.learn_more_title_id : feature.learn_more_title_en;
    const desc =
        lang === "id" ? feature.learn_more_desc_id : feature.learn_more_desc_en;
    const services = feature.header_learn_more || [];
    const benefits = feature.benefits || [];
    const techStack = feature.tech_stack || [];

    return (
        <>
            {/* ══════════ HERO ══════════ */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white min-h-[70vh] flex items-center">
                {/* Decorative orbs */}
                <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
                <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="relative w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
                    <motion.div variants={fadeUp} initial="hidden" animate="visible">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            {lang === "id" ? "Kembali ke Beranda" : "Back to Home"}
                        </Link>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-12 items-center">
                        <div className="md:col-span-3">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 text-primary text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
                            >
                                <Layers className="w-3.5 h-3.5" />
                                {lang === "id" ? feature.title_id : feature.title_en}
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={1}
                                className="text-3xl sm:text-4xl md:text-[3.25rem] font-extrabold leading-[1.15] mb-6 tracking-tight"
                            >
                                {title}
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={2}
                                className="text-gray-400 text-sm md:text-[15px] leading-[1.8] whitespace-pre-line max-w-xl"
                            >
                                {desc}
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={3}
                                className="flex flex-wrap gap-3 mt-8"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    {lang === "id" ? "Konsultasi Gratis" : "Free Consultation"}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    to="/portofolio"
                                    className="inline-flex items-center gap-2 border border-white/15 text-white/80 font-medium px-7 py-3.5 rounded-xl hover:bg-white/5 hover:border-white/25 transition-all duration-300"
                                >
                                    {lang === "id" ? "Lihat Portofolio" : "View Portfolio"}
                                </Link>
                            </motion.div>
                        </div>

                        {/* Hero image */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={3}
                            className="md:col-span-2 hidden md:block"
                        >
                            <div className="relative">
                                <div className="absolute -inset-6 bg-primary/8 rounded-3xl blur-3xl" />
                                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                                    <img
                                        src={feature.learn_more_image}
                                        alt={title}
                                        className="w-full object-cover h-[400px]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════ SERVICES — ALTERNATING LAYOUT ══════════ */}
            {services.length > 0 && (
                <section className="py-24 md:py-32 px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <span className="inline-flex items-center gap-2 text-primary font-semibold tracking-widest uppercase text-xs mb-3">
                                <Layers className="w-3.5 h-3.5" />
                                {lang === "id" ? "Layanan Kami" : "Our Services"}
                            </span>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
                                {lang === "id"
                                    ? "Apa yang Kami Tawarkan"
                                    : "What We Offer"}
                            </h2>
                            <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto">
                                {lang === "id"
                                    ? "Solusi lengkap yang dirancang khusus untuk kebutuhan bisnis Anda"
                                    : "Comprehensive solutions tailored specifically for your business needs"}
                            </p>
                        </motion.div>

                        <div className="space-y-20 md:space-y-28">
                            {services.map((s, i) => {
                                const isReversed = i % 2 !== 0;
                                const sTitle = lang === "id" ? s.title_id : s.title_en;
                                const sDesc = lang === "id" ? s.desc_id : s.desc_en;

                                return (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={1}
                                        className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${isReversed ? "md:direction-rtl" : ""
                                            }`}
                                    >
                                        {/* Image side */}
                                        <div
                                            className={`${isReversed ? "md:order-2" : "md:order-1"}`}
                                        >
                                            <div className="relative group">
                                                <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-sky-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200/50">
                                                    <img
                                                        src={s.image}
                                                        alt={sTitle}
                                                        className="w-full h-[280px] md:h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                </div>
                                                {/* Floating number badge */}
                                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-extrabold text-lg shadow-lg shadow-primary/30 ring-4 ring-white">
                                                    {String(i + 1).padStart(2, "0")}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Text side */}
                                        <div
                                            className={`${isReversed ? "md:order-1" : "md:order-2"}`}
                                        >
                                            <span className="inline-block text-primary/60 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                                                {lang === "id" ? `Layanan ${i + 1}` : `Service ${i + 1}`}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">
                                                {sTitle}
                                            </h3>
                                            <p className="text-slate-500 text-sm md:text-[15px] leading-[1.8]">
                                                {sDesc}
                                            </p>
                                            <div className="mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-primary to-sky-400" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* ══════════ BENEFITS ══════════ */}
            {benefits.length > 0 && (
                <section className="relative py-24 md:py-32 px-6 bg-slate-50 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px]" />

                    <div className="relative max-w-6xl mx-auto">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="inline-flex items-center gap-2 text-primary font-semibold tracking-widest uppercase text-xs mb-3">
                                <Zap className="w-3.5 h-3.5" />
                                {lang === "id" ? "Keunggulan" : "Advantages"}
                            </span>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
                                {lang === "id"
                                    ? "Mengapa Memilih Kami"
                                    : "Why Choose Us"}
                            </h2>
                            <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
                                {lang === "id"
                                    ? "Nilai lebih yang kami berikan untuk setiap proyek"
                                    : "The added value we bring to every project"}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {benefits.map((b, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    custom={i}
                                    className="bg-white rounded-2xl border border-slate-100 p-7 group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 relative overflow-hidden"
                                >
                                    {/* Hover gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-sky-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative">
                                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-400">
                                            <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-2 text-[15px]">
                                            {lang === "id" ? b.title_id : b.title_en}
                                        </h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            {lang === "id" ? b.desc_id : b.desc_en}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* ══════════ TECH STACK ══════════ */}
            {techStack.length > 0 && (
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <span className="inline-block text-primary font-semibold tracking-widest uppercase text-xs mb-3">
                                {lang === "id" ? "Teknologi" : "Technology"}
                            </span>
                            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">
                                {lang === "id"
                                    ? "Tech Stack yang Kami Gunakan"
                                    : "Our Tech Stack"}
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap justify-center gap-3"
                        >
                            {techStack.map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    variants={fadeUp}
                                    custom={i}
                                    className="bg-slate-100 text-slate-600 font-semibold text-sm px-6 py-2.5 rounded-full border border-transparent hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* ══════════ CTA ══════════ */}
            <section className="px-6 pb-24 md:pb-32">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-white text-center overflow-hidden">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-56 h-56 bg-sky-500/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-[80px]" />
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                                backgroundSize: "40px 40px",
                            }}
                        />

                        <div className="relative">
                            <span className="inline-block text-primary font-semibold tracking-widest uppercase text-xs mb-5">
                                {lang === "id" ? "Mari Berdiskusi" : "Let's Talk"}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
                                {lang === "id"
                                    ? "Siap Memulai Proyek Anda?"
                                    : "Ready to Start Your Project?"}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-[15px] mb-10 max-w-lg mx-auto leading-relaxed">
                                {lang === "id"
                                    ? "Hubungi kami untuk mendiskusikan bagaimana solusi ini dapat diterapkan untuk kebutuhan organisasi Anda."
                                    : "Contact us to discuss how this solution can be applied to your organization's needs."}
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
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
