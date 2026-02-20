import { useLang } from "../context/LanguageContext";

export default function PartnerMaxvision() {
  const { lang } = useLang();
  return (
    <h1 className="text-4xl font-bold">
      Maxvision {lang === "id" ? "Partner" : "Partner"}
    </h1>
  );
}
