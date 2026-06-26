import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import logo from "../assets/logo.png";

const MENU_ITEMS = [
    { id: "hero", labelId: "Beranda", labelEn: "Home" },
    { id: "about", labelId: "Tentang", labelEn: "About" },
    { id: "principals", labelId: "Principal", labelEn: "Principal" },
    { id: "product", labelId: "Produk", labelEn: "product" },
    { id: "contact", labelId: "Kontak", labelEn: "Contact" },
];

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 64;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
}

export default function NavbarV2() {
    const { lang, toggleLang } = useLang();
    const [openMobile, setOpenMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const manualNavRef = useRef(false);
    const timerRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ── track active section via scroll ── */
    useEffect(() => {
        const getActive = () => {
            if (manualNavRef.current) return;
            const threshold = window.innerHeight * 0.5;
            let current = MENU_ITEMS[0].id;
            for (const { id } of MENU_ITEMS) {
                const el = document.getElementById(id);
                if (!el) continue;
                if (el.getBoundingClientRect().top < threshold) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", getActive, { passive: true });
        window.addEventListener("sections-ready", getActive);

        const raf = requestAnimationFrame(getActive);
        return () => {
            window.removeEventListener("scroll", getActive);
            window.removeEventListener("sections-ready", getActive);
            cancelAnimationFrame(raf);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = openMobile ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [openMobile]);

    const handleNav = (id) => {
        setOpenMobile(false);
        setActiveSection(id);
        manualNavRef.current = true;
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            manualNavRef.current = false;
        }, 1000);
        scrollToSection(id);
    };

    const linkClass = (id) =>
        `relative text-sm font-medium transition-colors py-1 px-3 rounded-lg hover:bg-slate-50 transition ${activeSection === id ? "text-primary" : "text-slate-600 hover:text-primary"
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
                    <button onClick={() => handleNav("hero")} className="shrink-0 cursor-pointer">
                        <img src={logo} alt="Transforme Logo" className="h-8 w-auto object-contain" />
                    </button>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {MENU_ITEMS.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleNav(item.id)}
                                    className={linkClass(item.id)}
                                >
                                    {lang === "id" ? item.labelId : item.labelEn}
                                </button>
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
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                            onClick={() => setOpenMobile(false)}
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-screen w-[280px] bg-white z-50 shadow-2xl flex flex-col"
                        >
                            <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
                                <span className="font-bold text-slate-800 text-lg">Menu</span>
                                <button
                                    onClick={() => setOpenMobile(false)}
                                    className="w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center transition cursor-pointer"
                                >
                                    <X className="w-5 h-5 text-slate-600" />
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto py-4 px-3">
                                <ul className="space-y-0.5">
                                    {MENU_ITEMS.map((item) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => handleNav(item.id)}
                                                className={`w-full text-left block px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${activeSection === item.id
                                                    ? "text-primary bg-primary/5"
                                                    : "text-slate-600 hover:bg-slate-50"
                                                    }`}
                                            >
                                                {lang === "id" ? item.labelId : item.labelEn}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

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
