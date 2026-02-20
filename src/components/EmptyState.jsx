import { useLang } from "../context/LanguageContext";

export default function EmptyState({ title, description }) {
  const { lang } = useLang();

  return (
    <div className="text-center py-16">
      <h3 className="text-lg font-semibold mb-2">
        {title ?? (lang === "id" ? "Data tidak tersedia" : "No data available")}
      </h3>
      <p className="text-sm text-gray-500">
        {description ??
          (lang === "id"
            ? "Silakan coba kategori atau tab lain."
            : "Please try another category or tab.")}
      </p>
    </div>
  );
}
