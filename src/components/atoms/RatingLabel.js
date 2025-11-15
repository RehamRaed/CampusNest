export default function RatingLabel({ title, subtitle }) {
  return (
    <div>
      <p className="text-gray-700 mt-2 text-lg">{title}</p>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  );
}
