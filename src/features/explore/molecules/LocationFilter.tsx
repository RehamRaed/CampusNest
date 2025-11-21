import { LocationFilterProps } from "@/features/explore/types/explore.types";
import { locations } from "../../../../data/exploreData";

export default function LocationFilter({ label, value, onChange }: LocationFilterProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-gray-600">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-2 py-2 text-sm text-gray-700 bg-white focus:ring-0 focus:border-orange-400"
      >
        <option value="" hidden>Select a city</option>
        {locations.map((city) => (
          <option key={city} value={city} className="text-gray-700">
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
