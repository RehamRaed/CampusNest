export default function RatingNumber({ rating }) {
  return (
    <div className="text-7xl font-extrabold text-orange-500">{rating.toFixed(2)}</div>
  );
}
