import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
      className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-shadow duration-400 cursor-pointer`}
      onClick={() => navigate(`/products/${slug}`)}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${reverse ? "md:direction-rtl" : ""
          }`}
      >
        {/* IMAGE */}
        <div className={`overflow-hidden ${reverse ? "md:order-2" : ""}`}>
          <img
            src={image}
            alt={title[lang]}
            className="w-full h-56 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* TEXT */}
        <div
          className={`flex flex-col justify-center p-7 md:p-10 ${reverse ? "md:order-1" : ""
            }`}
        >
          <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
            {title[lang]}
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
            {description[lang]}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/products/${slug}`);
            }}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/btn cursor-pointer"
          >
            {lang === "id" ? "Lihat Detail" : "View Details"}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
