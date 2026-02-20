import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X, Menu, Globe } from "lucide-react";
import logo from "../assets/logo.png";

const MENU_ITEMS = [
  { to: "/", labelId: "Beranda", labelEn: "Home" },
  { to: "/about", labelId: "Tentang", labelEn: "About" },
  { to: "/products", labelId: "Produk", labelEn: "Products" },
  { to: "/portofolio", labelId: "Portofolio", labelEn: "Portfolio" },
];

// const PARTNER_ITEMS = [
//   { to: "/partner/jovision", label: "Jovision" },
//   { to: "/partner/maxvision", label: "Maxvision" },
// ];

const EXTRA_ITEMS = [
  { to: "/contact", labelId: "Kontak", labelEn: "Contact" },
  // { to: "/success-story", labelId: "Kisah Sukses", labelEn: "Success Story" },
];

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const location = useLocation();
  const [openMobile, setOpenMobile] = useState(false);
  const [openPartner, setOpenPartner] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close dropdown on click outside ── */
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenPartner(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* ── close mobile when route changes ── */
  useEffect(() => {
    setOpenMobile(false);
    setOpenPartner(false);
  }, [location.pathname]);

  /* ── lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = openMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobile]);

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const isPartnerActive = location.pathname.startsWith("/partner");

  const linkClass = (path) =>
    `relative text-sm font-medium transition-colors py-1 ${isActive(path) ? "text-primary" : "text-slate-600 hover:text-primary"
    }`;

  return (
    <>
      {/* ══════════ DESKTOP NAVBAR ══════════ */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
          }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Transforme Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {MENU_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`${linkClass(item.to)} px-3 py-2 rounded-lg hover:bg-slate-50 transition`}
                >
                  {lang === "id" ? item.labelId : item.labelEn}
                </Link>
              </li>
            ))}

            {/* Partner dropdown */}
            {/* <li ref={dropdownRef} className="relative">
              <button
                onClick={() => setOpenPartner((p) => !p)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer hover:bg-slate-50 ${
                  isPartnerActive
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                {lang === "id" ? "Partner" : "Partner"}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    openPartner ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openPartner && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-slate-100 py-2 min-w-[160px] overflow-hidden"
                  >
                    {PARTNER_ITEMS.map((p) => (
                      <li key={p.to}>
                        <Link
                          to={p.to}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActive(p.to)
                              ? "text-primary bg-primary/5 font-medium"
                              : "text-slate-600 hover:text-primary hover:bg-slate-50"
                          }`}
                        >
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li> */}

            {EXTRA_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`${linkClass(item.to)} px-3 py-2 rounded-lg hover:bg-slate-50 transition`}
                >
                  {lang === "id" ? item.labelId : item.labelEn}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language switch */}
            <div
              onClick={toggleLang}
              className="hidden md:flex items-center bg-slate-100 rounded-full p-0.5 cursor-pointer select-none w-[88px] h-8 relative"
            >
              <div
                className={`absolute top-0.5 h-7 w-[42px] bg-primary rounded-full shadow-sm transition-all duration-300 ${lang === "id" ? "left-0.5" : "left-[44px]"
                  }`}
              />
              <span
                className={`relative z-10 flex-1 text-center text-xs font-semibold transition-colors duration-300 ${lang === "id" ? "text-white" : "text-slate-500"
                  }`}
              >
                ID
              </span>
              <span
                className={`relative z-10 flex-1 text-center text-xs font-semibold transition-colors duration-300 ${lang === "en" ? "text-white" : "text-slate-500"
                  }`}
              >
                EN
              </span>
            </div>

            {/* Burger */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition cursor-pointer"
              onClick={() => setOpenMobile(true)}
            >
              <Menu className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════ MOBILE OVERLAY ══════════ */}
      <AnimatePresence>
        {openMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setOpenMobile(false)}
            />

            {/* Slide panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-screen w-[280px] bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
                <span className="font-bold text-slate-800 text-lg">Menu</span>
                <button
                  onClick={() => setOpenMobile(false)}
                  className="w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center transition cursor-pointer"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto py-4 px-3">
                <ul className="space-y-0.5">
                  {MENU_ITEMS.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive(item.to)
                            ? "text-primary bg-primary/5"
                            : "text-slate-600 hover:bg-slate-50"
                          }`}
                      >
                        {lang === "id" ? item.labelId : item.labelEn}
                      </Link>
                    </li>
                  ))}

                  {/* Partner accordion */}
                  <li>
                    <button
                      onClick={() => setOpenPartner((p) => !p)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${isPartnerActive
                          ? "text-primary bg-primary/5"
                          : "text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                      {lang === "id" ? "Partner" : "Partner"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openPartner ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openPartner && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {PARTNER_ITEMS.map((p) => (
                            <li key={p.to}>
                              <Link
                                to={p.to}
                                className={`block pl-10 pr-4 py-2.5 text-sm transition-colors ${isActive(p.to)
                                    ? "text-primary font-medium"
                                    : "text-slate-500 hover:text-primary"
                                  }`}
                              >
                                {p.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  {EXTRA_ITEMS.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive(item.to)
                            ? "text-primary bg-primary/5"
                            : "text-slate-600 hover:bg-slate-50"
                          }`}
                      >
                        {lang === "id" ? item.labelId : item.labelEn}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer — language switch */}
              <div className="border-t border-slate-100 p-4 flex flex-col items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">
                  {lang === "id" ? "Bahasa" : "Language"}
                </span>
                <div
                  onClick={toggleLang}
                  className="flex items-center bg-slate-100 rounded-full p-0.5 cursor-pointer select-none w-[120px] h-9 relative"
                >
                  <div
                    className={`absolute top-0.5 h-8 w-[58px] bg-primary rounded-full shadow-sm transition-all duration-300 ${lang === "id" ? "left-0.5" : "left-[60px]"
                      }`}
                  />
                  <span
                    className={`relative z-10 flex-1 text-center text-sm font-semibold transition-colors duration-300 ${lang === "id" ? "text-white" : "text-slate-500"
                      }`}
                  >
                    ID
                  </span>
                  <span
                    className={`relative z-10 flex-1 text-center text-sm font-semibold transition-colors duration-300 ${lang === "en" ? "text-white" : "text-slate-500"
                      }`}
                  >
                    EN
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
