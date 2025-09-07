import { useEffect, useRef } from "react";
import { NavLink } from "react-router";
import type { City } from "../types/city";

interface CityModalProps {
  city: City | null;
  onClose: () => void;
}

export default function CityModal({ city, onClose }: CityModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!city) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    const prevActive = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
      prevActive?.focus?.();
    };
  }, [city, onClose]);

  if (!city) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="city-modal-title"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        ref={panelRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden focus:outline-none h-[500px]"
      >
        <div className="md:w-1/2 w-full h-64 md:h-full">
          <img
            src={city.image}
            alt={city.title || city.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between h-full">
          <div>
            <h3
              id="city-modal-title"
              className="text-2xl md:text-3xl font-bold font-[geologica] text-[#C62828] mb-2 pr-12"
            >
              {city.title || city.name}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {city.description}
            </p>
          </div>

          <div className="mt-4 flex flex-col md:flex-row gap-3">
            <NavLink
              to="/test"
              className="flex-1 text-center py-2 px-4 rounded-xl bg-[#C62828] text-white font-bold hover:bg-[#a31d1d] transition-colors duration-200"
            >
              Start Test
            </NavLink>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 h-10 w-10 rounded-full bg-[#C62828] text-white text-xl font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C62828]"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
