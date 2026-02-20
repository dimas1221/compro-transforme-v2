import { useLang } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Globe, Zap } from "lucide-react";
import bg from "../assets/maps_background.png";
import Solution from "./Solution";
import PartnersSection from "./section-home/Partner";
import SuccessStoriesSection from "./section-home/SuccessStoriesSection";

/* ─── animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

/* ─── bilingual content ─── */
const CONTENT = {
  about: {
    id: {
      subtitle: "Tentang Kami",
      title: "Penyedia Solusi IT Terdepan",
      description:
        "PT Transforme Indonesia adalah penyedia solusi teknologi informasi end-to-end terdepan untuk korporasi bisnis di Indonesia. Solusi kreatif kami menggabungkan teknologi mutakhir dan keahlian rekayasa proses bisnis untuk memaksimalkan keuntungan klien kami.",
    },
    en: {
      subtitle: "About Us",
      title: "Leading IT Solutions Provider",
      description:
        "PT Transforme Indonesia is the leading provider of end-to-end information technology solutions to business corporations in Indonesia. Our creative solution combines the leverage of cutting-edge technology and business process reengineering expertise to maximize the profit of our clients.",
    },
  },
  vision: {
    id: {
      subtitle: "Visi & Misi",
      title: "Apa yang Kami Percaya",
      quote:
        "Menciptakan, mengeksploitasi, dan memberikan nilai maksimum kepada klien kami dengan memanfaatkan solusi teknologi mutakhir melalui passion, dedikasi, dan keunggulan.",
    },
    en: {
      subtitle: "Vision & Mission",
      title: "What We Believe",
      quote:
        "To create, exploit, and deliver maximum values to our clients by leveraging cutting-edge technology solutions through passion, dedication, and excellence.",
    },
  },
};

export default function Home() {
  const { lang } = useLang();
  const about = CONTENT.about[lang];
  const vision = CONTENT.vision[lang];

  return (
    <>
      {/* ══════════ HERO — FULL MAP ══════════ */}
      <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-white px-4">
        <img
          src={bg}
          alt="background map"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        />
      </section>

      {/* ══════════ ABOUT + VISION ══════════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* About card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 hover:shadow-lg transition-shadow"
          >
            <span className="inline-block text-primary font-semibold tracking-widest uppercase text-xs mb-3">
              {about.subtitle}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              {about.title}
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
              {about.description}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              {lang === "id" ? "Selengkapnya" : "Learn More"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Vision card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <span className="inline-block text-primary font-semibold tracking-widest uppercase text-xs mb-3">
                {vision.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {vision.title}
              </h2>
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full shrink-0" />
                <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                  &ldquo;{vision.quote}&rdquo;
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Passion</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>{lang === "id" ? "Dedikasi" : "Dedication"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>{lang === "id" ? "Keunggulan" : "Excellence"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ SOLUTIONS ══════════ */}
      <section className="pb-20 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-primary font-semibold tracking-widest uppercase text-xs mb-3">
              {lang === "id" ? "Layanan Kami" : "Our Services"}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800">
              {lang === "id" ? "Solusi Teknologi" : "Technology Solutions"}
            </h2>
          </motion.div>

          <Solution />
        </div>
      </section>

      {/* ══════════ SUCCESS STORIES ══════════ */}
      <SuccessStoriesSection />

      {/* ══════════ PARTNERS ══════════ */}
      <PartnersSection />
    </>
  );
}
