import { useState } from "react";
import { cities } from "../data/cities";
import type { City } from "../types/city";
import CityBlock from "../components/CityBlock";
import CityModal from "../components/CityModal";

export default function CitiesPage() {
  const [selected, setSelected] = useState<City | null>(null);

  return (
    <main className="mx-auto px-16 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-[#C62828] tracking-tight">
          Find your City
        </h1>
        <p className="mt-2 text-center text-gray-600">
          We have selected 16 iconic Canadian cities to help you discover which
          city best matches your MBTI.
        </p>
      </header>

      <section
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        aria-label="City grid"
      >
        {cities.map((c) => (
          <CityBlock key={c.id} city={c} onSelect={setSelected} />
        ))}
      </section>

      <CityModal city={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
