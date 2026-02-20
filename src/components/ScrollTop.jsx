import React, { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setShow(y > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-4 bottom-6 z-50 p-3 rounded-full shadow-lg bg-primary text-white fade-in text-2xl hover:bg-primary-dark transition"
    >
      <FiChevronUp />
    </button>
  );
}
