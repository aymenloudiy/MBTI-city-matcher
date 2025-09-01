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
      className="group relative w-full overflow-hidden rounded-2xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
      aria-label={`Open details for ${city.name}`}
    >
      <img
        src={city.image}
        alt={city.name}
        className="h-full w-full aspect-square object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40 md:group-hover:bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <span className="font-[geo] text-white text-2xl md:text-3xl lg:text-4xl font-bold opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:group-hover:scale-110 transition-all duration-300">
          {city.name}
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4 text-center md:hidden">
        <span className="font-[geo] text-white text-2xl font-bold">
          {city.name}
        </span>
      </div>
    </button>
  );
}
