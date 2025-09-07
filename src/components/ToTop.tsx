import { useEffect, useState } from "react";

export default function ToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const shouldShow = window.scrollY > 50;
      setShowButton((prev) => (prev !== shouldShow ? shouldShow : prev));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <div className="fixed bottom-5 end-5 z-50">
      <button
        onClick={handleScrollToTop}
        className="rounded-full bg-[#FFEB3B] px-4 py-3 text-xs font-medium font-[bangers] tracking-widest uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600"
        aria-label="Scroll to top"
      >
        To Top
      </button>
    </div>
  );
}
