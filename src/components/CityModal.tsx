import { useEffect, useRef } from "react";
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

  const handleBackdropClick = () => onClose();
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="city-modal-title"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          ref={panelRef}
          tabIndex={-1}
          className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10 focus:outline-none"
          onClick={stopPropagation}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full px-3 py-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="Close"
          >
            ✕
          </button>

          <img
            src={city.image}
            alt={city.title || city.name}
            className="h-56 w-full object-cover"
          />
          <div className="space-y-2 p-5">
            <h3 id="city-modal-title" className="text-xl font-semibold">
              {city.title || city.name}
            </h3>
            <p className="text-gray-600">{city.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
