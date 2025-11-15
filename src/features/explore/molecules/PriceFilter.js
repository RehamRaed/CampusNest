export default function PriceFilter({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-gray-600">
        {label}
      </label>

      <input
        type="range"
        min="500"
        max="10000"
        step="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-orange-400"
      />

      <p className="text-xs text-gray-500 mt-1 text-right">
        Up to: <span className="font-semibold">{value}</span> EGP
      </p>
    </div>
  );
}
