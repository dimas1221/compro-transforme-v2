import { useLang } from "../context/LanguageContext";

export default function PartnerJovision() {
  const { lang } = useLang();
  return (
    <h1 className="text-4xl font-bold">
      Jovision {lang === "id" ? "Partner" : "Partner"}
    </h1>
  );
}
