import { PartnerCard } from "../../components/PartnerCard";
import { useLang } from "../../context/LanguageContext";

const PARTNERS = [
  {
    title: "Google",
    image:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    title: "Amazon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    title: "Microsoft",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    title: "Meta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
  },
  {
    title: "Apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    title: "Netflix",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    title: "Tesla",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    title: "Adobe",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/Adobe_Inc._logo.svg",
  },
  {
    title: "Spotify",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    title: "Uber",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg",
  },
];

export default function PartnersSection() {
  const { lang } = useLang();
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        {lang === "id" ? "Mitra Kami" : "Our Partners"}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {PARTNERS.map((partner) => (
          <PartnerCard
            key={partner.title}
            title={partner.title}
            image={partner.image}
          />
        ))}
      </div>
    </>
  );
}
