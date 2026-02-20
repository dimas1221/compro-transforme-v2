import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 px-12 md:px-16 lg:px-28 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* LEFT - LOGO */}
        <img
          src={logo}
          alt="Transforme Logo"
          className="h-12 w-auto object-contain"
        />

        {/* RIGHT - Contact */}
        <div className="text-gray-700 text-sm md:text-base">
          <h3 className="font-semibold text-gray-900 mb-2">Contact Info</h3>
          <p className="leading-relaxed max-w-xs">
            Jln. Jenderal Sudirman No.Kav.2, Jakarta 10150
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-6 text-gray-500 text-xs md:text-sm text-center md:text-right">
        © {new Date().getFullYear()} PT Transforme Indonesia. All Rights
        Reserved.
      </div>
    </footer>
  );
}
