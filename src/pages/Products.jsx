import { useLang } from "../context/LanguageContext";
import ProductCategorySection from "./section-product/ProductCategorySection";
import { useJsonData } from "../hooks/useJsonData";
import ProductHeroSection from "./section-product/ProductHeroSection";

export default function Products() {
  const { lang } = useLang();
  const { data: PRODUCT_CATEGORIES, loading } = useJsonData("/data/productData.json");

  if (loading || !PRODUCT_CATEGORIES) return null;

  return (
    <>
      {/* PAGE TITLE (optional SEO / breadcrumb) */}
      <h1 className="sr-only">{lang === "id" ? "Produk" : "Products"}</h1>

      {/* SECTION 1 */}
      <ProductHeroSection />

      {/* SECTION NEXT */}
      {PRODUCT_CATEGORIES.map((category) => (
        <ProductCategorySection key={category.key} category={category} />
      ))}
      {/* <ProductFeatureSection /> */}
      {/* <ProductListSection /> */}
    </>
  );
}
