import { useLang } from "../../context/LanguageContext";

export default function ProductHeroSection() {
  const { lang } = useLang();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* TOP CONTENT */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-sky-500">
          {lang === "id" ? (
            <>
              Gaya Hidup <br /> Cerdas Saya
            </>
          ) : (
            <>
              My Smart <br /> Lifestyle
            </>
          )}
        </h2>

        {/* DESC + BUTTON */}
        <div className="flex items-center gap-6 max-w-md">
          <p className="text-gray-500 text-sm leading-relaxed">
            {lang === "id"
              ? "Solusi teknologi pintar untuk mendukung kehidupan modern Anda."
              : "Lorem ipsum dolor sit amet consectetur. Aliquet faucibus id mi."}
          </p>

          <button className="shrink-0 px-4 py-2 rounded-md bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition">
            {lang === "id" ? "Lihat" : "View More"}
          </button>
        </div>
      </div>

      {/* IMAGE BANNER */}
      <div className="relative">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1600"
            alt="Smart Lifestyle"
            className="w-full h-[260px] md:h-[320px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
