import { useState } from "react";
import type { City } from "../types/city";

interface CityBlockProps {
  city: City;
  onSelect: (city: City) => void;
}

export default function CityBlock({ city, onSelect }: CityBlockProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onSelect(city)}
      className="group relative w-full overflow-hidden rounded-2xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
      aria-label={`Open details for ${city.name}`}
    >
      <img
        src={city.image}
        alt={city.name}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        fetchPriority="high"
        className={[
          "h-full w-full aspect-square object-cover transition-all duration-500 ease-out",
          "group-hover:scale-105",
          loaded ? "opacity-100 blur-0" : "opacity-70 blur-md scale-[1.02]",
        ].join(" ")}
      />

      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40 md:group-hover:bg-black/40" />

      <div className="absolute inset-0 hidden md:flex items-center justify-center px-4 text-center">
        <span className="font-[geologica] text-white text-3xl lg:text-4xl font-bold opacity-0 group-hover:opacity-100 group-hover:scale-110 transform transition-all duration-300">
          {city.name}
        </span>
      </div>

      <div className="absolute inset-0 flex md:hidden items-center justify-center px-4 text-center">
        <span className="font-[geologica] text-white text-2xl font-bold">
          {city.name}
        </span>
      </div>
    </button>
  );
}
