import Icon from "../molecules/icon/Icon";

export default function StarRating({
  value,
  iconName ,
}: {
  value: number;
  iconName?: string;
}) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Icon
          name="Star"
          key={i}
          size={14}
          className={i < Math.round(value) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
}
