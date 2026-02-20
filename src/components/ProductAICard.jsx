import { useNavigate } from "react-router-dom";

export default function ProductAICard({
  title,
  description,
  image,
  reverse = false,
  lang,
  slug,
}) {
  const navigate = useNavigate();
  return (
    <div
      className={`group perspective-[1200px] ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/70 p-8 rounded-xl shadow-lg">
        {/* TEXT */}
        <div
          className={`transition-transform duration-500 ${
            reverse ? "md:order-2" : ""
          } group-hover:translate-z-10`}
        >
          <h3 className="text-xl font-bold mb-4">{title[lang]}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {description[lang]}
          </p>

          <button
            onClick={() => navigate(`/products/${slug}`)}
            className="px-4 py-2 rounded-md bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition"
          >
            {lang === "id" ? "Lihat Detail" : "View More"}
          </button>
        </div>

        {/* IMAGE */}
        <div
          className={`transition-transform duration-500 ${
            reverse ? "md:order-1" : ""
          }`}
        >
          <div
            className="
              relative rounded-xl overflow-hidden bg-white
              shadow-[0_15px_40px_rgba(0,0,0,0.12)]
              transition-all duration-500
              group-hover:-translate-y-2
              group-hover:rotate-x-3
              group-hover:rotate-y-[-3deg]
            "
          >
            {/* LIGHT OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <img
              src={image}
              alt={title[lang]}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
