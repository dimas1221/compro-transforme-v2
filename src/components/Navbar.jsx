import { Link } from "react-router-dom";
import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import logo from "../assets/logo.png";
export default function Navbar() {
  const { lang, toggleLang } = useLang();

  const [openMobile, setOpenMobile] = useState(false);
  const [openPartner, setOpenPartner] = useState(false);

  const menuItems = [
    { to: "/", labelId: "Beranda", labelEn: "Home" },
    { to: "/about", labelId: "Tentang", labelEn: "About" },
    { to: "/products", labelId: "Produk", labelEn: "Products" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white py-4 fixed top-0 left-0 w-full z-50 shadow font-bold">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Tranforme Logo"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link to={item.to}>
                  {lang === "id" ? item.labelId : item.labelEn}
                </Link>
              </li>
            ))}

            {/* Partner dropdown */}
            <li className="relative cursor-pointer">
              <button
                onClick={() => setOpenPartner((prev) => !prev)}
                className="flex items-center gap-1"
              >
                {lang === "id" ? "Partner Kami" : "Our Partner"}
              </button>

              {openPartner && (
                <ul className="absolute bg-primary mt-2 p-2 rounded shadow-lg text-white">
                  <li>
                    <Link
                      to="/partner/jovision"
                      className="block py-1 px-2 hover:bg-gray-700"
                    >
                      Jovision
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/partner/maxvision"
                      className="block py-1 px-2 hover:bg-gray-700"
                    >
                      Maxvision
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact">{lang === "id" ? "Kontak" : "Contact"}</Link>
            </li>

            <li>
              <Link to="/success-story">
                {lang === "id" ? "Kisah Sukses" : "Success Story"}
              </Link>
            </li>
          </ul>

          {/* Language toggle */}
          <button
            className="hidden md:block border px-3 py-1 rounded text-sm hover:bg-primary hover:text-white transition"
            onClick={toggleLang}
          >
            {lang === "id" ? "EN" : "ID"}
          </button>

          {/* Burger button mobile */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpenMobile(true)}
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          openMobile ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center">
          <div className="font-semibold text-xl">Menu</div>

          <button onClick={() => setOpenMobile(false)} className="text-3xl">
            ×
          </button>
        </div>

        <ul className="mt-6 text-lg flex flex-col gap-4 px-6">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.to}
                onClick={() => setOpenMobile(false)}
                className="block py-2"
              >
                {lang === "id" ? item.labelId : item.labelEn}
              </Link>
            </li>
          ))}

          {/* Partner dropdown */}
          <li>
            <button
              className="block w-full text-left py-2"
              onClick={() => setOpenPartner((prev) => !prev)}
            >
              {lang === "id" ? "Partner Kami" : "Our Partner"}
            </button>

            {openPartner && (
              <ul className="pl-4 flex flex-col gap-2">
                <li>
                  <Link
                    to="/partner/jovision"
                    onClick={() => setOpenMobile(false)}
                  >
                    Jovision
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partner/maxvision"
                    onClick={() => setOpenMobile(false)}
                  >
                    Maxvision
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setOpenMobile(false)}
              className="block py-2"
            >
              {lang === "id" ? "Kontak" : "Contact"}
            </Link>
          </li>

          <li>
            <Link
              to="/success-story"
              onClick={() => setOpenMobile(false)}
              className="block py-2"
            >
              {lang === "id" ? "Kisah Sukses" : "Success Story"}
            </Link>
          </li>

          {/* language toggle mobile */}
          <button
            onClick={toggleLang}
            className="border px-3 py-1 rounded text-sm mt-4 w-fit"
          >
            {lang === "id" ? "EN" : "ID"}
          </button>
        </ul>
      </div>
    </>
  );
}
