import StarRating from "@/components/atoms/StarRating";

export default function RatingBreakdownCard({ label, value, icon }) {
  return (
    <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
      {icon}
      <h3 className="mt-2 font-semibold capitalize text-gray-800">{label}</h3>
      <StarRating value={value} iconName="Star" /> 
      <p className="text-xs text-gray-500 mt-1">
        Rated {value.toFixed(1)} out of 5 stars for {label}.
      </p>
    </div>
  );
}
