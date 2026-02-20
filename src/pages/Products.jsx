import { useLang } from "../context/LanguageContext";
import ProductCategorySection from "./section-product/ProductCategorySection";
import { PRODUCT_CATEGORIES } from "./section-product/productData";
import ProductHeroSection from "./section-product/ProductHeroSection";

export default function Products() {
  const { lang } = useLang();
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
