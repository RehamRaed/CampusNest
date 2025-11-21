type Option = {
  value: string | number;
  label: string;
  disabled?: boolean;
};

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
  defaultValue?: string | number;
};

export default function Select({ options, defaultValue, ...props }: SelectProps) {
  return (
    <select
      defaultValue={defaultValue || ""}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
      {...props}
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value} disabled={opt.disabled}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
