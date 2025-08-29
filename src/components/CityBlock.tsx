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
      className="group relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 aspect-square sm:aspect-[4/3] md:aspect-square"
      aria-label={`Open details for ${city.name}`}
    >
      <img
        src={city.image}
        alt={city.title || city.name}
        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30 sm:bg-black/0 transition-colors duration-300 group-hover:bg-black/50" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <span className="text-white font-[geo] text-3xl sm:text-4xl md:text-5xl text-center leading-tight">
          {city.name}
        </span>
      </div>
    </button>
  );
}
