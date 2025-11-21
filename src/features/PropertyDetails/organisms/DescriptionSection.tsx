import LandlordSummary from "@/components/molecules/landlordSummary/LandlordSummary";
import {DescriptionSectionProps} from "@/features/PropertyDetails/types/propertyDetails.types"

export default function DescriptionSection({ description, landlord } :DescriptionSectionProps) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Description</h2>
      <p className="text-gray-700">{description}</p>

      <LandlordSummary landlord={landlord} />
    </div>
  );
}
