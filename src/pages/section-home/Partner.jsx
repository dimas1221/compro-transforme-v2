import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";

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
    title: "Google",
    image:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    title: "Amazon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    title: "Microsoft",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    title: "Meta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
  },
  {
    title: "Apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    title: "Netflix",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    title: "Tesla",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    title: "Adobe",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/Adobe_Inc._logo.svg",
  },
  {
    title: "Spotify",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    title: "Uber",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg",
  },
];

export default function PartnersSection() {
  const { lang } = useLang();

  return (
    <section className="py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-semibold tracking-widest uppercase text-xs mb-3">
            {lang === "id" ? "Dipercaya Oleh" : "Trusted By"}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800">
            {lang === "id" ? "Mitra Kami" : "Our Partners"}
          </h2>
        </motion.div>

        {/* Logo grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center justify-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src={partner.image}
                alt={partner.title}
                className="h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                {partner.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
