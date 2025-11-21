type RatingNumberProps = {
  rating: number;
};

export default function RatingNumber({ rating }: RatingNumberProps) {
  return (
    <div className="text-7xl font-extrabold text-orange-400">
      {rating.toFixed(2)}
    </div>
  );
}
