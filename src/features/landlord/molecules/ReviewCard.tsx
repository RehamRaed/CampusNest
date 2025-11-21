import StarRating from "@/components/atoms/StarRating";
import { LandlordTestimonial } from "@/features/landlord/types/landlord.types";

interface ReviewCardProps {
  review: LandlordTestimonial;
}


export default function ReviewCard({ review } :ReviewCardProps) {
    if (!review) return null; 
   return (
    <div className="border rounded-lg p-4 shadow flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-3">
          <img
            src={review.avatar}
            alt={review.guestName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h5 className="font-semibold">{review.guestName}</h5>
            <StarRating value={review.rating} />
          </div>
        </div>

        <span className="text-xs text-gray-400">{review.date}</span>
      </div>

      <p className="text-gray-700 text-sm">{review.comment}</p>
    </div>
  );
}

