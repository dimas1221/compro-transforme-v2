import { useLang } from "../context/LanguageContext";
import bg from "../assets/maps_background.png";
import Solution from "./Solution";

import { FiCpu, FiWifi, FiPlay } from "react-icons/fi";
import PartnersSection from "./section-home/Partner";
import SuccessStoriesSection from "./section-home/SuccessStoriesSection";

export default function Home() {
  const { lang } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-white px-4">
        <img
          src={bg}
          alt="background map"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        />
      </section>

      {/* SOLUTION */}
      {/* <h2 className="text-2xl md:text-5xl font-bold text-center mb-6">
        {lang === "id" ? "Solusi Kami" : "Our Solutions"}
      </h2>
      <Solution /> */}

      {/* ABOUT + VISION */}
      <section className="px-6 md:px-16 lg:px-28 py-16">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* About Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              {lang === "id" ? "Tentang Kami" : "About Us"}
            </h2>
            <p className="text-sm md:text-lg text-secondary leading-relaxed">
              PT Transforme Indonesia is the leading provider of end-to-end
              information technology solutions to business corporations in
              Indonesia. Our creative solution combines the leverage of
              cutting-edge technology and business process reengineering
              expertise to maximize the profit of our clients.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Vision & Mission
            </h2>
            <p className="text-sm md:text-lg text-secondary leading-relaxed italic">
              “To create, exploit, and deliver maximum values to our clients by
              leveraging cutting-edge technology solutions through passion,
              dedication, and excellence.”
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 md:px-16 lg:px-28 pb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Products
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Artificial Intelligence (AI)
              </h3>
              <p className="text-sm text-secondary mb-4">
                Face Recognition, Thermal Detection
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
                More
              </button>
              <FiCpu className="text-blue-500 text-3xl" />
            </div>
          </div>

    
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Internet of Things (IoT)
              </h3>
              <p className="text-sm text-secondary mb-4">
                Smart Connectivity, Smart Sensor & Devices
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
                More
              </button>
              <FiWifi className="text-blue-500 text-3xl" />
            </div>
          </div>
        </div> */}
        <Solution />
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-sky-600 px-6 md:px-16 lg:px-28 py-16 text-white">
        {/* <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {lang === "id" ? "Cerita Sukses" : "Success Stories"}
          </h2>

          <div className="bg-black rounded-xl overflow-hidden relative aspect-video">
            <button className="absolute inset-0 flex items-center justify-center">
              <FiPlay className="text-white text-5xl opacity-80" />
            </button>
          </div>
        </div> */}
        <SuccessStoriesSection />
      </section>

      {/* PARTNERS */}
      <section className="px-6 md:px-16 lg:px-28 py-20">
        <PartnersSection />
      </section>
    </>
  );
}
