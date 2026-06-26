import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Zap, Code2, Layers, ChevronDown } from "lucide-react";

function ServiceDetail({ service, index, lang }) {
  const sTitle = lang === "id" ? service.title_id : service.title_en;
  const sDesc = lang === "id" ? service.desc_id : service.desc_en;
  return (
    <div className="md:col-span-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.18 }}
          className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm"
        >
          {service.image && (
            <div className="relative w-full" style={{ height: 200 }}>
              <img
                src={service.image}
                alt={sTitle}
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                <p className="text-[9px] text-white/60 font-bold uppercase tracking-widest">
                  {lang === "id" ? `Layanan ${index + 1}` : `Service ${index + 1}`}
                </p>
                <h4 className="text-base font-extrabold text-white mt-0.5">{sTitle}</h4>
              </div>
            </div>
          )}
          <div className="p-5">
            {!service.image && <h4 className="font-extrabold text-slate-800 text-sm mb-2">{sTitle}</h4>}
            <p className="text-slate-500 text-sm leading-relaxed">{sDesc}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function SolutionDrawer({ feature, onClose, lang }) {
  const [activeService, setActiveService] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState(0);

  useEffect(() => {
    setActiveService(0);
    setAccordionOpen(0);
  }, [feature]);

  useEffect(() => {
    if (!feature) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [feature, onClose]);

  useEffect(() => {
    document.body.style.overflow = feature ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [feature]);

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (!el) return;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
    }, 350);
  };

  if (!feature) return null;

  const title = lang === "id" ? feature.learn_more_title_id : feature.learn_more_title_en;
  const desc = lang === "id" ? feature.learn_more_desc_id : feature.learn_more_desc_en;
  const featureLabel = lang === "id" ? feature.title_id : feature.title_en;
  const services = feature.header_learn_more || [];
  const benefits = feature.benefits || [];
  const techStack = feature.tech_stack || [];


  return (
    <AnimatePresence>
      {feature && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white flex flex-col"
            style={{ height: "92vh", borderRadius: "20px 20px 0 0" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle */}
            <div className="flex justify-center py-3 shrink-0 cursor-grab">
              <div className="w-9 h-1 rounded-full bg-slate-200" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 md:px-10 pb-3 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest leading-none">{featureLabel}</p>
                  <h2 className="text-sm md:text-base font-extrabold text-slate-800 leading-tight mt-0.5">{title}</h2>
                </div>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer shrink-0">
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">

              {/* ── HERO ── */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-5xl mx-auto px-5 md:px-10 py-7 md:py-10 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-4 md:line-clamp-none whitespace-pre-line">{desc}</p>

                  </div>
                  {feature.learn_more_image && (
                    <div className="md:w-56 lg:w-72 shrink-0 rounded-xl overflow-hidden ring-1 ring-white/10">
                      <img src={feature.learn_more_image} alt={title} className="w-full h-36 md:h-40 object-cover block" />
                    </div>
                  )}
                </div>
              </div>

              {/* ── SERVICES ── */}
              {services.length > 0 && (
                <div className="max-w-5xl mx-auto px-5 md:px-10 py-8">
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">{lang === "id" ? "Layanan Kami" : "Our Services"}</p>
                  <h3 className="text-base md:text-lg font-extrabold text-slate-800 mb-5">{lang === "id" ? "Apa yang Kami Tawarkan" : "What We Offer"}</h3>

                  {/* Desktop: two-column */}
                  <div className="hidden md:grid md:grid-cols-5 gap-4">
                    {/* Left list */}
                    <div className="md:col-span-2 flex flex-col gap-1.5">
                      {services.map((s, i) => {
                        const t = lang === "id" ? s.title_id : s.title_en;
                        return (
                          <button
                            key={i}
                            onClick={() => setActiveService(i)}
                            className={`text-left px-4 py-3 rounded-xl border transition-all duration-150 cursor-pointer flex items-center gap-3 ${activeService === i
                              ? "bg-primary text-white border-primary"
                              : "bg-white text-slate-600 border-slate-200 hover:border-primary/40 hover:bg-slate-50"
                              }`}
                          >
                            <span className={`text-[11px] font-black w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${activeService === i ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                              }`}>{String(i + 1).padStart(2, "0")}</span>
                            <span className="text-sm font-semibold leading-snug">{t}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Right detail */}
                    <ServiceDetail
                      service={services[activeService] || {}}
                      index={activeService}
                      lang={lang}
                    />
                  </div>

                  {/* Mobile: accordion */}
                  <div className="md:hidden flex flex-col gap-2">
                    {services.map((s, i) => {
                      const t = lang === "id" ? s.title_id : s.title_en;
                      const d = lang === "id" ? s.desc_id : s.desc_en;
                      const open = accordionOpen === i;
                      return (
                        <div key={i} className="rounded-xl border border-slate-200 overflow-hidden">
                          <button
                            onClick={() => setAccordionOpen(open ? -1 : i)}
                            className="w-full flex items-center justify-between px-4 py-3 bg-white cursor-pointer"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="text-[11px] font-black w-6 h-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className={`text-sm font-semibold text-left leading-snug ${open ? "text-primary" : "text-slate-700"}`}>{t}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180 text-primary" : ""}`} />
                          </button>
                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                {s.image && (
                                  <div className="relative w-full h-40">
                                    <img src={s.image} alt={t} className="w-full h-full object-cover block" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                  </div>
                                )}
                                <div className="px-4 py-4 bg-slate-50">
                                  <p className="text-sm text-slate-600 leading-relaxed">{d}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── BENEFITS ── */}
              {benefits.length > 0 && (
                <div className="bg-slate-50 px-5 md:px-10 py-8">
                  <div className="max-w-5xl mx-auto">
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1 flex items-center gap-1.5">
                      <Zap className="w-3 h-3" />{lang === "id" ? "Keunggulan" : "Advantages"}
                    </p>
                    <h3 className="text-base md:text-lg font-extrabold text-slate-800 mb-5">{lang === "id" ? "Mengapa Memilih Kami" : "Why Choose Us"}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {benefits.map((b, i) => (
                        <div key={i} className="group bg-white rounded-xl border border-slate-100 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-200">
                            <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-200" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-xs mb-1">{lang === "id" ? b.title_id : b.title_en}</h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed">{lang === "id" ? b.desc_id : b.desc_en}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── TECH STACK ── */}
              {techStack.length > 0 && (
                <div className="max-w-5xl mx-auto px-5 md:px-10 py-6">
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1 flex items-center gap-1.5">
                    <Code2 className="w-3 h-3" />{lang === "id" ? "Teknologi" : "Tech Stack"}
                  </p>
                  <h3 className="text-sm font-extrabold text-slate-800 mb-3">{lang === "id" ? "Tools & Framework" : "Tools & Frameworks"}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span key={tech} className="bg-slate-100 text-slate-600 font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
