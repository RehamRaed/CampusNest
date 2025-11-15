import ReviewCard from "@/features/landlord/molecules/ReviewCard";

export default function Testimonials({ landlord }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">
        What guests are saying about {landlord.name}
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {landlord.testimonials.map((t) => (
          <ReviewCard key={t.id} review={t} />
        ))}
      </div>

      <button className="px-7 py-3 border-none rounded text-[16px] bg-gray-200 hover:bg-gray-300 transition cursor-pointer">
        show more reviews
      </button>
    </div>
  );
}