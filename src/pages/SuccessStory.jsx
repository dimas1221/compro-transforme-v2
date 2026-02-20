import { useLang } from "../context/LanguageContext";

export default function SuccessStory() {
  const { lang } = useLang();
  return (
    <h1 className="text-4xl font-bold">
      {lang === "id" ? "Kisah Sukses" : "Success Story"}
    </h1>
  );
}
