import RatingNumber from "@/components/atoms/RatingNumber";
import RatingLabel from "@/components/atoms/RatingLabel";
import RatingBreakdownCard from "@/features/PropertyDetails/molecules/RatingBreakdownCard";
import ReviewCard from "@/features/PropertyDetails/molecules/ReviewCard";
import Button from "@/components/molecules/button/Button";
import Icon from "@/components/molecules/icon/Icon";
import {ReviewsSectionProps} from "@/features/PropertyDetails/types/propertyDetails.types"


export default function ReviewsSection({ overallRating, ratingsBreakdown, reviews } : ReviewsSectionProps) {
  const iconMap = {
    cleanliness: <Icon name="Sparkles" />,
    accuracy: <Icon name="CheckCircle" />,
    checkin: <Icon name="Key" />,
    communication: <Icon name="MessageCircle" />,
    location: <Icon name="MapPin" />,
    value: <Icon name="Tag" />,
  };

  return (
    <div className="space-y-10  text-center">
      <div>
        <RatingNumber rating={overallRating} />
        <RatingLabel 
          title="Guest favorite" 
          subtitle="This home is a guest favorite based on ratings, reviews, and reliability."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {Object.entries(ratingsBreakdown).map(([key, value]) => (
          <RatingBreakdownCard 
            key={key} 
            label={key} 
            value={Number(value)} 
            icon={iconMap[key]} 
          />
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {reviews.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>

      <div className="flex justify-end">
      <Button
          variant="withoutPorder"
          size="sm"
          style={{marginTop:"-15px"}}
        >
          Show all
        </Button>
    </div>
    </div>
  );
}
