import GallerySection from "@/features/PropertyDetails/organisms/GallerySection";
import DescriptionSection from "@/features/PropertyDetails/organisms/DescriptionSection";
import PriceCard from "@/features/PropertyDetails/molecules/PriceCard";
import ReviewsSection from "@/features/PropertyDetails/organisms/ReviewsSection";
import LandlordSection from "@/features/PropertyDetails/organisms/LandlordSection";
import AmenitiesSection from "@/features/PropertyDetails/organisms/AmenitiesSection";

export default function PropertyDetailsTemplate({ property }) {
  return (
    <div className="max-w-[1200px] mx-auto space-y-10 p-10">
      <GallerySection images={property.images} />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <DescriptionSection description={property.description} landlord={property.landlord} />
          <AmenitiesSection amenities={property.amenities} />
        </div>

        <div className="lg:w-1/3 rounded-2xl relative">
          <PriceCard
            id={property.id}
            price={property.price}
            availableFrom={property.availableFrom}
            availableTo={property.availableTo}
            postedDate={property.postedDate}
            guests={property.guests}
            availableGuests={property.availableGuests}
          />
        </div>
      </div>

      <ReviewsSection
        overallRating={property.overallRating}
        ratingsBreakdown={property.ratingsBreakdown}
        reviews={property.reviews}
      />

      <LandlordSection landlord={property.landlord} />
    </div>
  );
}