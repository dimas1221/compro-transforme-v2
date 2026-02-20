import { useMemo, useState } from "react";
import { useLang } from "../../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight, PackageOpen } from "lucide-react";
import ProductAICard from "../../components/ProductAICard";

const PAGE_SIZE = 3;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function ProductCategorySection({ category }) {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState(category.tabs[0]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(1);
    setSearch("");
  };

  /* ─── FILTER ─── */
  const filteredItems = useMemo(() => {
    const items = category.items?.[activeTab] || [];
    if (!search) return items;
    const keyword = search.toLowerCase();
    return items.filter(
      (item) =>
        item.title[lang].toLowerCase().includes(keyword) ||
        item.description[lang].toLowerCase().includes(keyword)
    );
  }, [category.items, activeTab, search, lang]);

  const totalPages = Math.ceil(filteredItems.length / PAGE_SIZE);
  const paginatedItems = filteredItems.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* ── HEADER ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          {/* Category title */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <span className="inline-block text-primary font-semibold tracking-widest uppercase text-xs mb-2">
                {lang === "id" ? "Kategori" : "Category"}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                {category.title}
              </h2>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder={
                  lang === "id" ? "Cari produk..." : "Search product..."
                }
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition shadow-sm"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {category.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                  ${activeTab === tab
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── PRODUCT CARDS ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${page}-${search}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            {paginatedItems.length === 0 ? (
              /* ── EMPTY STATE ── */
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                  <PackageOpen className="w-7 h-7 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-700 mb-1">
                  {lang === "id"
                    ? "Produk tidak ditemukan"
                    : "No products found"}
                </h3>
                <p className="text-sm text-slate-500 max-w-xs">
                  {lang === "id"
                    ? "Coba kata kunci lain atau pilih tab yang berbeda."
                    : "Try different keywords or select another tab."}
                </p>
              </div>
            ) : (
              paginatedItems.map((item, index) => (
                <motion.div
                  key={`${category.key}-${activeTab}-${item.slug}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <ProductAICard
                    {...item}
                    lang={lang}
                    reverse={index % 2 === 1}
                    slug={item.slug}
                  />
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── PAGINATION ── */}
        {totalPages > 1 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center items-center gap-2 mt-14"
          >
            <button
              disabled={page === 1}
              onClick={() => {
                setPage(page - 1);
              }}
              className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => {
                  setPage(p);
                }}
                className={`
                  w-10 h-10 rounded-xl text-sm font-medium transition cursor-pointer
                  ${page === p
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }
                `}
              >
                {p}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => {
                setPage(page + 1);
              }}
              className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
