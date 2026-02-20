import { useEffect, useMemo, useState } from "react";
import { useLang } from "../../context/LanguageContext";
import ProductTabs from "../../components/ProductTabs";
import ProductAICard from "../../components/ProductAICard";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";
import EmptyState from "../../components/EmptyState";

const PAGE_SIZE = 3;
const LOADING_DELAY = 400;

export default function ProductCategorySection({ category }) {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState(category.tabs[0]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const triggerLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), LOADING_DELAY);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(1);
    setSearch("");
    triggerLoading();
  };

  /* ================= FILTER ================= */
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

  const handlePageChange = (nextPage) => {
    setPage(nextPage);
    triggerLoading();
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* HEADER */}
      <div className="mb-10 space-y-4">
        {/* TITLE + SEARCH */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">{category.title}</h2>

          {/* SEARCH */}
          <div className="w-full md:w-72">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder={
                lang === "id" ? "Cari produk..." : "Search product..."
              }
              className="
          w-full px-4 py-2 rounded-md border
          text-sm focus:outline-none focus:ring-2
          focus:ring-sky-500
        "
            />
          </div>
        </div>

        {/* TABS (DI BAWAH TITLE) */}
        <ProductTabs
          tabs={category.tabs}
          activeTab={activeTab}
          onChange={handleTabChange}
        />
      </div>

      {/* CONTENT */}
      <div className="space-y-20 transition-opacity duration-300">
        {isLoading ? (
          Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        ) : paginatedItems.length === 0 ? (
          <EmptyState />
        ) : (
          paginatedItems.map((item, index) => (
            <ProductAICard
              key={`${category.key}-${activeTab}-${index}`}
              {...item}
              lang={lang}
              reverse={index % 2 === 1}
              slug={item.slug}
            />
          ))
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && !isLoading && (
        <div className="flex justify-center items-center gap-4 mt-14">
          <button
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-2 text-sm rounded-md border disabled:opacity-40 hover:bg-gray-50"
          >
            Prev
          </button>

          <span className="text-sm text-gray-500">
            {page} / {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-2 text-sm rounded-md border disabled:opacity-40 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
