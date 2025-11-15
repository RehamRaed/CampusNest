export default function AmenityBullet({ text }) {
  return (
    <li className="flex items-center gap-2 border-b border-gray-100 pb-1">
      <span className="text-orange-500">•</span> {text}
    </li>
  );
}
