import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import {
  Building2,
  RefreshCcw,
  Landmark,
  Banknote,
  TrainFront,
  HeartPulse,
  Home,
  Lightbulb,
  BarChart3,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const PARTNERS = [
  {
    title: "MPI",
    full: "Multi Prima Indonesia",
    icon: Building2,
    color: "#2563EB",
  },
  {
    title: "Syncro",
    full: "Syncro Technology",
    icon: RefreshCcw,
    color: "#0EA5E9",
  },
  {
    title: "DJP",
    full: "Direktorat Jenderal Pajak",
    icon: Landmark,
    color: "#D97706",
  },
  {
    title: "BNI",
    full: "Bank Negara Indonesia",
    icon: Banknote,
    color: "#F97316",
  },
  {
    title: "KCI",
    full: "Kereta Commuter Indonesia",
    icon: TrainFront,
    color: "#DC2626",
  },
  {
    title: "Imedin",
    full: "Imedin Healthcare",
    icon: HeartPulse,
    color: "#059669",
  },
  {
    title: "Modernland",
    full: "Modernland Realty",
    icon: Home,
    color: "#7C3AED",
  },
  {
    title: "Paradigma",
    full: "Paradigma Teknologi",
    icon: Lightbulb,
    color: "#0284C7",
  },
  { title: "Suma", full: "Suma Analitika", icon: BarChart3, color: "#1D4ED8" },
];

export default function PartnersSection() {
  const { lang } = useLang();

  return (
    <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold tracking-widest uppercase text-xs mb-3">
            {lang === "id" ? "Dipercaya Oleh" : "Trusted By"}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-3">
            {lang === "id" ? "Mitra Kami" : "Our Partners"}
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
            {lang === "id"
              ? "Kami berkolaborasi dengan institusi terkemuka di Indonesia"
              : "We collaborate with leading institutions in Indonesia"}
          </p>
        </motion.div>

        {/* Partner grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
          {PARTNERS.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="relative bg-white rounded-2xl border border-slate-100 p-5 md:p-6 flex flex-col items-center text-center gap-3 group cursor-default
                           hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-400"
              >
                {/* Colored top accent */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: partner.color }}
                />

                {/* Icon container */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    backgroundColor: `${partner.color}08`,
                    boxShadow: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${partner.color}15`;
                    e.currentTarget.style.boxShadow = `0 8px 24px ${partner.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${partner.color}08`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon
                    className="w-6 h-6 transition-transform duration-300"
                    style={{ color: partner.color }}
                  />
                </div>

                {/* Title */}
                <div>
                  <span
                    className="text-sm font-bold tracking-wide transition-colors duration-300"
                    style={{ color: "#334155" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = partner.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#334155")
                    }
                  >
                    {partner.title}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-tight hidden md:block">
                    {partner.full}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat line */}
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={10}
          className="mt-14 flex items-center justify-center gap-8 md:gap-12"
        >
          {[
            { value: "9+", label: lang === "id" ? "Mitra Aktif" : "Active Partners" },
            { value: "50+", label: lang === "id" ? "Proyek Selesai" : "Projects Completed" },
            { value: "5+", label: lang === "id" ? "Tahun Pengalaman" : "Years Experience" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-slate-400 mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
