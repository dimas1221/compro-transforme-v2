import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const STORIES = [
  {
    image:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=800",
    title: { id: "Drone Mini", en: "Mini Drone" },
    description: {
      id: "Drone kamera bertenaga dengan harga terjangkau. Kamera hingga resolusi 4K dan optimasi pengambilan gambar otomatis.",
      en: "Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1508615070457-7baeba4003b9?q=80&w=800",
    title: { id: "Drone Ringan", en: "Drone Light" },
    description: {
      id: "Drone impian para kreator. Pengaturan aperture manual dan performa baterai yang tinggi.",
      en: "Drone light is every creator's dream. Setting aperture manually and high battery performance.",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800",
    title: { id: "Drone Phantom", en: "Phantom Drone" },
    description: {
      id: "Terinspirasi dari profesional. Bergerak lebih cepat dengan fokus pada kecepatan dan kestabilan.",
      en: "Inspired by professionals. Can move faster, focus on speed and stable environment.",
    },
  },
];

export default function SuccessStoriesSection() {
  const { lang } = useLang();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28 px-6">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-semibold tracking-widest uppercase text-xs mb-3">
            {lang === "id" ? "Cerita Sukses" : "Success Stories"}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {lang === "id"
              ? "Inovasi Terbaru Kami"
              : "Our Latest Innovation"}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            {lang === "id"
              ? "Kualitas terbaik untuk setiap momen. Jadikan pengalaman Anda tak terlupakan."
              : "Best quality for every moment. Make your experience unforgettable."}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title[lang]}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
