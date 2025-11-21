import PropertyCard from "@/features/landlord/molecules/PropertyCard";
import { LandlordProps } from "@/features/landlord/types/landlord.types";


export default function PropertiesList({ landlord }: LandlordProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-700">
        {landlord.name}’s listings
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {landlord.propertiesList.map((item) => (
          <PropertyCard key={item.id} property={item} />
        ))}
      </div>
    </div>
  );
}