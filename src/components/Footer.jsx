import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { id: "Beranda", en: "Home", to: "/" },
  { id: "Tentang", en: "About", to: "/about" },
  { id: "Produk", en: "Products", to: "/products" },
  { id: "Kontak", en: "Contact", to: "/contact" },
];

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* ── TOP GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="Transforme Logo"
              className="h-10 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {lang === "id"
                ? "Penyedia solusi teknologi informasi end-to-end terdepan untuk korporasi bisnis di Indonesia."
                : "Leading provider of end-to-end information technology solutions to business corporations in Indonesia."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-300 mb-4">
              {lang === "id" ? "Navigasi" : "Quick Links"}
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link[lang]}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-300 mb-4">
              {lang === "id" ? "Hubungi Kami" : "Contact Us"}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Jl. Cideng Barat No.87C</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@transforme.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── DIVIDER + COPYRIGHT ── */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} PT Transforme Indonesia. All Rights
            Reserved.
          </p>
          {/* <p className="text-gray-600 text-xs">
            {lang === "id"
              ? "Dibangun dengan ❤️ di Indonesia"
              : "Built with ❤️ in Indonesia"}
          </p> */}
        </div>
      </div>
    </footer>
  );
}
