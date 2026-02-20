import { SuccessStoryCard } from "../../components/SuccessStoryCard";
import { useLang } from "../../context/LanguageContext";

const STORIES = [
  {
    image:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=800",
    title: {
      id: "Drone Mini",
      en: "Mini Drone",
    },
    description: {
      id: "Drone kamera bertenaga dengan harga terjangkau. Kamera hingga resolusi 4K dan optimasi pengambilan gambar otomatis.",
      en: "Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1508615070457-7baeba4003b9?q=80&w=800",
    highlighted: true,
    title: {
      id: "Drone Ringan",
      en: "Drone Light",
    },
    description: {
      id: "Drone impian para kreator. Pengaturan aperture manual dan performa baterai yang tinggi.",
      en: "Drone light is every creator's dream. Setting aperture manually and high battery performance.",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800",
    title: {
      id: "Drone Phantom",
      en: "Phantom Drone",
    },
    description: {
      id: "Terinspirasi dari profesional. Bergerak lebih cepat dengan fokus pada kecepatan dan kestabilan.",
      en: "Inspired by professionals. Can move faster, focus on speed and stable environment.",
    },
  },
];

export default function SuccessStoriesSection() {
  const { lang } = useLang();

  return (
    <section className="bg-sky-600 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {lang === "id" ? "Cerita Sukses" : "Success Stories"}
          </h2>

          <p className="text-white/80 max-w-xl mx-auto text-sm md:text-base">
            {lang === "id" ? (
              <>
                Inovasi terbaru dengan kualitas terbaik.
                <br />
                Jadikan setiap momen penerbangan tak terlupakan.
              </>
            ) : (
              <>
                New innovation, best quality than before.
                <br />
                Make every moment flying operation become unforgettable.
              </>
            )}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {STORIES.map((item, index) => (
            <SuccessStoryCard
              key={index}
              title={item.title[lang]}
              description={item.description[lang]}
              image={item.image}
              highlighted={item.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
