import Icon from "@/components/atoms/Icon";

export default function ReviewCard({ review }) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-md transition duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className="font-medium text-gray-800">{review.user}</div>
        <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold text-gray-600">{review.rating}</span>
          <Icon name="Star" className="text-yellow-500 fill-yellow-500 w-4 h-4" />
        </div>
      </div>

      <div className="text-sm text-left text-gray-600">{review.comment}</div>

      <div className="text-xs text-right text-gray-400 mt-3">{review.date}</div>
    </div>
  );
}
