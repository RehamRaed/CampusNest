import StarRating from "@/components/atoms/StarRating";

export default function ReviewCard({ review }) {
    if (!review) return null; 
  return (
    <div className="border rounded-lg p-4 shadow flex flex-col">
      <div className="flex items-center gap-3 mb-2">
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

      <p className="text-gray-700 text-sm">{review.comment}</p>
      <span className="text-xs text-gray-400 mt-auto">{review.date}</span>
    </div>
  );
}

