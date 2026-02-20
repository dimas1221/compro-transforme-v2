import { useParams, useNavigate, Link } from "react-router-dom";
import { PRODUCT_CATEGORIES } from "./section-product/productData";
import { useLang } from "../context/LanguageContext";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Settings2,
  ChevronRight,
  PackageOpen,
} from "lucide-react";

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

/* ─── helper: camelCase → readable label ─── */
function formatLabel(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { lang } = useLang();
  const navigate = useNavigate();

  const product = PRODUCT_CATEGORIES.flatMap((cat) =>
    Object.values(cat.items).flat()
  ).find((item) => item.slug === slug);

  /* ── NOT FOUND ── */
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center px-6">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
          <PackageOpen className="w-7 h-7 text-slate-400" />
        </div>
        <h2 className="text-xl font-bold text-slate-700 mb-2">
          {lang === "id" ? "Produk tidak ditemukan" : "Product not found"}
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          {lang === "id"
            ? "Produk yang Anda cari tidak tersedia."
            : "The product you're looking for doesn't exist."}
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === "id" ? "Kembali ke Produk" : "Back to Products"}
        </Link>
      </div>
    );
  }

  const features = product.detail?.features?.[lang] || [];
  const parameters = product.detail?.parameters
    ? Object.entries(product.detail.parameters)
    : [];

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 pt-10 pb-20 md:pb-28">
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-1.5 text-sm text-gray-400 mb-8"
          >
            <button
              onClick={() => navigate("/products")}
              className="hover:text-white transition cursor-pointer"
            >
              {lang === "id" ? "Produk" : "Products"}
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 truncate max-w-[200px] sm:max-w-none">
              {product.title[lang]}
            </span>
          </motion.nav>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
            >
              <img
                src={product.image}
                alt={product.title[lang]}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </motion.div>

            {/* Text */}
            <div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4"
              >
                {product.title[lang]}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="text-gray-300 text-sm md:text-base leading-relaxed mb-8"
              >
                {product.description[lang]}
              </motion.p>


            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      {features.length > 0 && (
        <section className="relative -mt-10 z-10 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  {lang === "id" ? "Fitur Unggulan" : "Key Features"}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed">
                      {f}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══════════ PARAMETERS ══════════ */}
      {parameters.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Settings2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                {lang === "id" ? "Spesifikasi Teknis" : "Technical Specifications"}
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              {parameters.map(([key, value], i) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 gap-1 sm:gap-4 ${i % 2 === 0 ? "bg-slate-50/60" : "bg-white"
                    }`}
                >
                  <span className="text-sm font-semibold text-slate-700">
                    {formatLabel(key)}
                  </span>
                  <span className="text-sm text-slate-500 sm:text-right">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}


    </>
  );
}
