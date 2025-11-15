import { ratings } from "../../../../data/exploreData";

export default function RatingFilter({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-gray-600">
        {label}
      </label>

      <div className="space-y-1 text-sm text-gray-700">
        {ratings.map((r) => (
          <label key={r.value} className="flex items-center gap-2">
            <input
              type="radio"
              name="rating"
              checked={value === r.value}
              onChange={() => onChange(r.value)}
              className="accent-orange-400"
            />
            {r.label}
          </label>
        ))}
      </div>
    </div>
  );
}
