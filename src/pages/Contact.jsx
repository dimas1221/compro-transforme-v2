import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building2,
} from "lucide-react";

/* ─────────── animation helpers ─────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

/* ─────────── content data ─────────── */
const CONTENT = {
  hero: {
    id: {
      subtitle: "Hubungi Kami",
      title: "Mari Terhubung",
      description:
        "Kami siap membantu Anda menemukan solusi teknologi terbaik. Jangan ragu untuk menghubungi kami kapan saja.",
    },
    en: {
      subtitle: "Contact Us",
      title: "Let's Connect",
      description:
        "We're ready to help you find the best technology solutions. Don't hesitate to reach out to us anytime.",
    },
  },

  info: [
    {
      icon: Building2,
      id: {
        label: "Kantor Pusat",
        value: "Jln. Jenderal Sudirman No.Kav.2,\nJakarta 10150, Indonesia",
      },
      en: {
        label: "Head Office",
        value: "Jln. Jenderal Sudirman No.Kav.2,\nJakarta 10150, Indonesia",
      },
    },
    {
      icon: Phone,
      id: { label: "Telepon", value: "+62 21 1234 5678" },
      en: { label: "Phone", value: "+62 21 1234 5678" },
    },
    {
      icon: Mail,
      id: { label: "Email", value: "info@transforme.co.id" },
      en: { label: "Email", value: "info@transforme.co.id" },
    },
    {
      icon: Clock,
      id: { label: "Jam Kerja", value: "Senin — Jumat\n09:00 — 18:00 WIB" },
      en: {
        label: "Working Hours",
        value: "Monday — Friday\n09:00 — 18:00 WIB",
      },
    },
  ],

  form: {
    id: {
      title: "Kirim Pesan",
      description:
        "Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.",
      name: "Nama Lengkap",
      email: "Alamat Email",
      phone: "Nomor Telepon",
      company: "Nama Perusahaan",
      subject: "Subjek",
      message: "Pesan Anda",
      submit: "Kirim Pesan",
      success: "Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.",
    },
    en: {
      title: "Send a Message",
      description:
        "Fill out the form below and our team will get back to you shortly.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      subject: "Subject",
      message: "Your Message",
      submit: "Send Message",
      success: "Your message has been sent! We'll get back to you shortly.",
    },
  },

  subjects: {
    id: [
      "Pertanyaan Umum",
      "Konsultasi Produk AI",
      "Konsultasi Produk IoT",
      "Permintaan Demo",
      "Kemitraan",
      "Lainnya",
    ],
    en: [
      "General Inquiry",
      "AI Product Consultation",
      "IoT Product Consultation",
      "Demo Request",
      "Partnership",
      "Other",
    ],
  },
};

/* ═══════════════════════════════════════════ */
export default function Contact() {
  const { lang } = useLang();
  const hero = CONTENT.hero[lang];
  const form = CONTENT.form[lang];
  const info = CONTENT.info;
  const subjects = CONTENT.subjects[lang];

  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with email / API
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* ──────────── HERO ──────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4"
          >
            {hero.subtitle}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed"
          >
            {hero.description}
          </motion.p>
        </div>
      </section>

      {/* ──────────── CONTACT INFO CARDS ──────────── */}
      <section className="relative -mt-12 md:-mt-16 z-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {info.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-sm mb-1">{item[lang].label}</h3>
                <p className="text-secondary text-sm whitespace-pre-line leading-relaxed">
                  {item[lang].value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ──────────── FORM + MAP ──────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-5 gap-10 md:gap-14">
          {/* ── FORM COLUMN ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold">{form.title}</h2>
            </div>
            <p className="text-secondary text-sm mb-8">{form.description}</p>

            {/* Success toast */}
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-3 rounded-xl text-sm flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                {form.success}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    {form.name} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    {form.email} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    {form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    {form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
              </div>

              {/* Subject dropdown */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  {form.subject} <span className="text-red-400">*</span>
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition appearance-none"
                >
                  <option value="" disabled>
                    {lang === "id" ? "— Pilih subjek —" : "— Select subject —"}
                  </option>
                  {subjects.map((s, i) => (
                    <option key={i} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  {form.message} <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                {form.submit}
              </button>
            </form>
          </motion.div>

          {/* ── MAP COLUMN ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Map embed */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex-1 min-h-[320px]">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.642558781818!2d106.8097774104081!3d-6.178577893783022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f67de3b31dbb%3A0x44ae6edefc6448c5!2sJl.%20Cideng%20Barat%20No.87C%2C%20RT.1%2FRW.1%2C%20Cideng%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010150!5e0!3m2!1sid!2sid!4v1771583700372!5m2!1sid!2sid"
                className="w-full h-full min-h-[320px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick contact card */}
            <div className="bg-gradient-to-br from-primary to-sky-600 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5" />
                  <h3 className="font-bold text-lg">
                    {lang === "id" ? "Kunjungi Kami" : "Visit Us"}
                  </h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {lang === "id"
                    ? "Kantor kami terbuka untuk kunjungan pada jam kerja. Silakan hubungi kami terlebih dahulu untuk menjadwalkan pertemuan."
                    : "Our office is open for visits during working hours. Please contact us first to schedule a meeting."}
                </p>
                <a
                  href="https://maps.app.goo.gl/HeT4q7v3aVohRGMT9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  {lang === "id"
                    ? "Buka di Google Maps"
                    : "Open in Google Maps"}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
