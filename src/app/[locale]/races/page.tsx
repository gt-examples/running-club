import { T } from "gt-next";
import RaceFilters from "@/components/RaceFilters";

export default function RacesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <T>
        <h1 className="text-3xl font-bold mb-2">Races</h1>
        <p className="text-gray-400 mb-8">Browse upcoming and past races. Filter by distance, terrain, and more.</p>
      </T>
      <RaceFilters />
    </div>
  );
}
