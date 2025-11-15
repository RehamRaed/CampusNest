import Icon from "./Icon";

export default function StarRating({ value ,iconName }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Icon
          name={iconName}
          key={i}
          size={16}
          className={i < Math.round(value) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
}
