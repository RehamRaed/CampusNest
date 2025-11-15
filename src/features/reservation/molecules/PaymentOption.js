import React from "react";

export default function PaymentOption({
  name,
  value,
  title,
  description,
  badge,
  disclaimer,
  isChecked,
  onChange,
}) {
  return (
    <label className="flex flex-col p-4 border rounded-lg mb-3 cursor-pointer
        has-checked:border-orange-500 has-checked:ring-1 has-checked:ring-orange-500">

      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <input
            type="radio"
            name={name}
            value={value}
            checked={isChecked}
            onChange={onChange}
            className="h-5 w-5 accent-orange-500"
          />

          <div className="ml-4">
            <p className="font-medium text-gray-900">{title}</p>
            {description && (
              <p className="text-sm text-gray-600 mt-0.5">{description}</p>
            )}
          </div>
        </div>

        {badge && (
          <span className={`text-sm font-bold ${
            badge === "Fastest way" ? "text-green-600" : "text-gray-500"
          }`}>
            {badge}
          </span>
        )}
      </div>

      {disclaimer && (
        <p className="mt-3 pt-2 border-t text-xs text-gray-500">
          {disclaimer}
        </p>
      )}
    </label>
  );
}
