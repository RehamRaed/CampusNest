import React from "react";
import Input from "@/components/molecules/input/Input";
import { FormFieldProps } from "./formField.types";

export default function FormField({
  register,
  name,
  type = "text",
  placeholder,
  error,
  label,
  className,
  inputClassName
}: FormFieldProps) {
  return (
    <div className={`mb-2 ${className || ""}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      <Input
        register={register}
        name={name}
        type={type}
        placeholder={placeholder}
        inputClassName={inputClassName}
      />

      <p className="text-red-500 text-xs min-h-[18px] mt-1 text-right">
        {error}
      </p>
    </div>
  );
}
