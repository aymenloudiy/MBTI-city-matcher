import type { City } from "../types/city";

interface CityBlockProps {
  city: City;
  onSelect: (city: City) => void;
}

export default function CityBlock({ city, onSelect }: CityBlockProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(city)}
      className="group relative w-full overflow-hidden rounded-2xl shadow ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
      aria-label={`Open details for ${city.name}`}
    >
      <img
        src={city.image}
        alt={city.title || city.name}
        className="h-full w-full aspect-square object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 opacity-0 px-4 pb-4 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="inline-block rounded-lg px-4 py-2 text-white backdrop-blur-sm text-2xl">
          {city.name}
        </span>
      </div>
    </button>
  );
}
