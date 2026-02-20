import { useParams, useNavigate } from "react-router-dom";
import { PRODUCT_CATEGORIES } from "./section-product/productData";
import { useLang } from "../context/LanguageContext";
import { FiArrowLeft } from "react-icons/fi";

export default function ProductDetail() {
  const { slug } = useParams();
  const { lang } = useLang();
  const navigate = useNavigate();
  console.log("slug from url:", slug);
  const product = PRODUCT_CATEGORIES.flatMap((cat) =>
    Object.values(cat.items).flat()
  ).find((item) => item.slug === slug);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/products")}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8 group cursor-pointer"
      >
        <FiArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">
          {lang === "id" ? "Semua Produk" : "All Products"}
        </span>
      </button>

      {/* HEADER */}
      <div className="grid md:grid-cols-2 gap-12">
        <img src={product.image} className="rounded-xl shadow" />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title[lang]}</h1>
          <p className="text-gray-600">{product.description[lang]}</p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="mt-20">
        <h2 className="text-xl font-bold mb-6">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {product.detail.features[lang].map((f, i) => (
            <div key={i} className="border rounded-lg p-6 text-center">
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* PARAMETERS */}
      <div className="mt-20">
        <h2 className="text-xl font-bold mb-6">Parameters</h2>
        <div className="border rounded-lg divide-y">
          {Object.entries(product.detail.parameters).map(([k, v]) => (
            <div key={k} className="flex justify-between p-4">
              <span className="font-medium capitalize">{k}</span>
              <span className="text-gray-600">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
