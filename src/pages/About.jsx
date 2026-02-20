import { useLang } from "../context/LanguageContext";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Lightbulb,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

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

/* ─────────── content data ─────────── */
const CONTENT = {
  hero: {
    id: {
      subtitle: "Tentang Kami",
      title: "Mitra Teknologi Terpercaya Anda",
      description:
        "PT Transforme Indonesia adalah penyedia solusi teknologi informasi end‑to‑end terkemuka untuk korporasi bisnis di Indonesia. Solusi kreatif kami menggabungkan teknologi mutakhir dan keahlian rekayasa proses bisnis untuk memaksimalkan keuntungan klien.",
    },
    en: {
      subtitle: "About Us",
      title: "Your Trusted Technology Partner",
      description:
        "PT Transforme Indonesia is the leading provider of end‑to‑end information technology solutions to business corporations in Indonesia. Our creative solution combines cutting‑edge technology and business process reengineering expertise to maximize client profit.",
    },
  },

  vision: {
    id: {
      title: "Visi",
      text: "Menciptakan, mengeksploitasi, dan memberikan nilai maksimal kepada klien kami dengan memanfaatkan solusi teknologi mutakhir melalui semangat, dedikasi, dan keunggulan.",
    },
    en: {
      title: "Vision",
      text: "To create, exploit, and deliver maximum values to our clients by leveraging cutting‑edge technology solutions through passion, dedication, and excellence.",
    },
  },

  mission: {
    id: {
      title: "Misi",
      items: [
        "Menyediakan solusi teknologi inovatif yang disesuaikan dengan kebutuhan klien.",
        "Membangun kemitraan jangka panjang berdasarkan kepercayaan dan hasil nyata.",
        "Mendorong transformasi digital untuk pertumbuhan bisnis berkelanjutan.",
        "Mengembangkan talenta dan keahlian terdepan di industri.",
      ],
    },
    en: {
      title: "Mission",
      items: [
        "Provide innovative technology solutions tailored to client needs.",
        "Build long‑term partnerships based on trust and tangible results.",
        "Drive digital transformation for sustainable business growth.",
        "Develop top‑tier talent and industry‑leading expertise.",
      ],
    },
  },

  values: {
    id: { title: "Nilai Inti Kami" },
    en: { title: "Our Core Values" },
    items: [
      {
        icon: Lightbulb,
        id: { name: "Inovasi", desc: "Selalu terdepan dengan solusi kreatif dan teknologi terbaru." },
        en: { name: "Innovation", desc: "Always at the forefront with creative solutions and the latest technology." },
      },
      {
        icon: Users,
        id: { name: "Kolaborasi", desc: "Bekerja sama dengan klien sebagai mitra strategis." },
        en: { name: "Collaboration", desc: "Working with clients as strategic partners." },
      },
      {
        icon: Award,
        id: { name: "Keunggulan", desc: "Standar kualitas tertinggi dalam setiap proyek." },
        en: { name: "Excellence", desc: "The highest quality standards in every project." },
      },
      {
        icon: Globe,
        id: { name: "Integritas", desc: "Transparansi dan kejujuran dalam setiap interaksi." },
        en: { name: "Integrity", desc: "Transparency and honesty in every interaction." },
      },
    ],
  },

  stats: [
    { value: "10+", id: "Tahun Pengalaman", en: "Years of Experience" },
    { value: "200+", id: "Proyek Selesai", en: "Projects Completed" },
    { value: "50+", id: "Klien Terlayani", en: "Clients Served" },
    { value: "99%", id: "Tingkat Kepuasan", en: "Satisfaction Rate" },
  ],

  cta: {
    id: {
      title: "Siap Memulai Transformasi Digital?",
      description: "Hubungi kami untuk konsultasi gratis dan temukan solusi terbaik untuk bisnis Anda.",
      button: "Hubungi Kami",
    },
    en: {
      title: "Ready to Start Your Digital Transformation?",
      description: "Contact us for a free consultation and find the best solution for your business.",
      button: "Contact Us",
    },
  },
};

/* ═══════════════════════════════════════════ */
export default function About() {
  const { lang } = useLang();
  const hero = CONTENT.hero[lang];
  const vision = CONTENT.vision[lang];
  const mission = CONTENT.mission[lang];
  const values = CONTENT.values;
  const stats = CONTENT.stats;
  const cta = CONTENT.cta[lang];

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

      {/* ──────────── VISION & MISSION ──────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl p-8 md:p-10"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {vision.title}
            </h2>
            <p className="text-secondary leading-relaxed italic text-sm md:text-base">
              "{vision.text}"
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="bg-gradient-to-br from-slate-50 to-transparent border border-slate-100 rounded-2xl p-8 md:p-10"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {mission.title}
            </h2>
            <ul className="space-y-3">
              {mission.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-secondary text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ──────────── CORE VALUES ──────────── */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-14"
          >
            {values[lang].title}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.items.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{v[lang].name}</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {v[lang].desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
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
