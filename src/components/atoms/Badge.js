export default function Badge({ text, color = "orange" }) {
  const colors = {
    orange: "bg-orange-50 text-orange-700",
    green: "bg-green-50 text-green-700",
  };
  return (
    <span className={`px-2 py-1 text-sm rounded ${colors[color] || colors.orange}`}>
      {text}
    </span>
  );
}
