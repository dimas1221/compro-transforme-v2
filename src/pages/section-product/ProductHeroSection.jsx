import { useLang } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import { Cpu, Wifi, ShieldCheck, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const highlights = [
  {
    icon: Cpu,
    id: "Teknologi AI",
    en: "AI Technology",
  },
  {
    icon: Wifi,
    id: "IoT Terkoneksi",
    en: "Connected IoT",
  },
  {
    icon: ShieldCheck,
    id: "Keamanan Tinggi",
    en: "High Security",
  },
  {
    icon: Zap,
    id: "Performa Cepat",
    en: "Fast Performance",
  },
];

export default function ProductHeroSection() {
  const { lang } = useLang();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* decorative blurs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* ── LEFT: TEXT ── */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4"
            >
              {lang === "id" ? "Produk Kami" : "Our Products"}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5"
            >
              {lang === "id" ? (
                <>
                  Solusi Teknologi <br />
                  <span className="text-primary">Inovatif & Cerdas</span>
                </>
              ) : (
                <>
                  Innovative & Smart <br />
                  <span className="text-primary">Tech Solutions</span>
                </>
              )}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg"
            >
              {lang === "id"
                ? "Jelajahi rangkaian produk AI, IoT, dan perangkat pintar kami yang dirancang untuk meningkatkan keamanan, efisiensi, dan kualitas hidup Anda."
                : "Explore our range of AI, IoT, and smart devices designed to enhance your security, efficiency, and quality of life."}
            </motion.p>

            {/* highlight badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="flex flex-wrap gap-3"
            >
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-sm px-4 py-2 rounded-full"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    {h[lang]}
                  </span>
                );
              })}
            </motion.div>
          </div>

          {/* ── RIGHT: IMAGE GRID ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            <div className="space-y-3 md:space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&fit=crop&q=80"
                  alt="AI Technology"
                  className="w-full h-36 md:h-44 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&fit=crop&q=80"
                  alt="IoT Devices"
                  className="w-full h-44 md:h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&fit=crop&q=80"
                  alt="Smart Watch"
                  className="w-full h-44 md:h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&fit=crop&q=80"
                  alt="Security System"
                  className="w-full h-36 md:h-44 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
