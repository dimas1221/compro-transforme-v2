import { useLang } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useJsonData } from "../hooks/useJsonData";

/* ─────────── animation helpers ─────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

/* ═══════════════════════════════════════════ */
export default function About() {
  const { lang } = useLang();
  const { data: COMPANY_CONTENT, loading } = useJsonData("/data/companyContent.json");

  if (loading || !COMPANY_CONTENT) return null;

  /* ─────────── content data ─────────── */
  const hero = {
    subtitle: COMPANY_CONTENT.about[lang].subtitle,
    title: lang === "id" ? "Mitra Teknologi Terpercaya Anda" : "Your Trusted Technology Partner",
    description: COMPANY_CONTENT.about[lang].description,
  };

  const vision = {
    title: lang === "id" ? "Visi" : "Vision",
    text: COMPANY_CONTENT.vision[lang].quote,
  };

  const stats = [
    { value: "10+", label: lang === "id" ? "Tahun Pengalaman" : "Years of Experience" },
    { value: "200+", label: lang === "id" ? "Proyek Selesai" : "Projects Completed" },
    { value: "50+", label: lang === "id" ? "Klien Terlayani" : "Clients Served" },
    { value: "99%", label: lang === "id" ? "Tingkat Kepuasan" : "Satisfaction Rate" },
  ];

  const cta = lang === "id"
    ? { title: "Siap Memulai Transformasi Digital?", description: "Hubungi kami untuk konsultasi gratis dan temukan solusi terbaik untuk bisnis Anda.", button: "Hubungi Kami" }
    : { title: "Ready to Start Your Digital Transformation?", description: "Contact us for a free consultation and find the best solution for your business.", button: "Contact Us" };

  return (
    <>
      {/* ──────────── HERO ──────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4"
          >
            {hero.subtitle}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed"
          >
            {hero.description}
          </motion.p>
        </div>
      </section>

      {/* ──────────── STATS ──────────── */}
      <section className="relative -mt-12 md:-mt-16 z-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {s.value}
              </div>
              <div className="text-sm text-secondary">{s[lang]}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────── VISION ──────────── */}
      <section className="py-20 md:py-28 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto bg-gradient-to-br from-primary/5 via-white to-sky-50 border border-primary/10 rounded-2xl p-10 md:p-14 overflow-hidden"
        >
          {/* decorative circles */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/5 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sky-100/40 rounded-full" />

          {/* accent bar */}
          <div className="absolute left-0 top-10 bottom-10 w-1 bg-gradient-to-b from-primary via-sky-400 to-primary/20 rounded-full" />

          <div className="relative pl-5">
            <span className="inline-flex items-center gap-1.5 text-primary font-semibold tracking-widest uppercase text-[10px] mb-4">
              <Eye className="w-4 h-4" />
              {lang === "id" ? "Visi Kami" : "Our Vision"}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              {vision.title}
            </h2>
            <p className="text-slate-600 leading-relaxed italic text-base md:text-lg">
              &ldquo;{vision.text}&rdquo;
            </p>
          </div>
        </motion.div>
      </section>

      {/* ──────────── CTA ──────────── */}
      <section className="py-20 md:py-28 px-6">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-sky-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
        >
          {/* decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <h2 className="relative text-2xl md:text-4xl font-bold mb-4">
            {cta.title}
          </h2>
          <p className="relative text-white/80 max-w-xl mx-auto mb-8 text-sm md:text-base">
            {cta.description}
          </p>
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            {cta.button}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
