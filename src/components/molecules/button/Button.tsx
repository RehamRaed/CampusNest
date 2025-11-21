import React from "react";
import { ButtonVariant, ButtonSize, ButtonProps } from "@/components/molecules/button/button.types";

const variants: Record<ButtonVariant, string> = {
  orangeSolid: "bg-orange-400 text-white hover:bg-[#F57C2D]",
  orangeOutline:
    "border border-orange-400 text-orange-400 bg-transparent hover:bg-[#F57C2D] hover:text-white hover:border-[#F57C2D]",
  blackOutline:
    "border border-black text-black bg-transparent hover:border[#F57C2D] hover:text-[#F57C2D]",
  withoutPorder: "text-orange-400 hover:underline",
  blackSolid: "text-white bg-black cursor-pointer",
  graySolid: "text-black bg-gray-200 cursor-pointer",
  "": "",
};

const sizes: Record<ButtonSize, string> = {
  xs: "text-sm",
  sm: "px-5 py-1 text-sm",
  md: "px-10 py-2 text-base",
  mdlg: "px-12 py-[12px] text-[18px]",
  lg: "px-15 py-3 text-lg",
  "": "",
};

export default function Button({
  children,
  onClick,
  variant = "",
  size = "",
  className = "",
  type = "button", 
  ...props
}: ButtonProps) {
  return (
    <button
      type={type} 
      onClick={onClick}
      className={`
        ${variants[variant] ?? ""}
        ${sizes[size] ?? ""}
        rounded-xl cursor-pointer
        transition-all duration-200
        ${className}
      `}
      {...props} 
    >
      {children}
    </button>
  );
}
