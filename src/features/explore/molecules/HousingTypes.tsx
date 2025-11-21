import { HousingTypesProps } from "@/features/explore/types/explore.types";
import { housingTypes } from "../../../../data/exploreData";

export default function HousingTypes({ label, value, onChange }: HousingTypesProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-gray-600">
        {label}
      </label>

      <div className="space-y-1 text-sm text-gray-700">
        {housingTypes.map((type) => (
          <label key={type} className="flex items-center gap-2">
            <input
              type="radio"
              name="housingType"
              checked={value === type}
              onChange={() => onChange(type)}
              className="accent-orange-400"
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
}
