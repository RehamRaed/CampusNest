export default function Button({
  children,
  onClick,
  variant = "",
  size = "",
  className = "",
  ...props
}) {
  const variants = {
    orangeSolid:
      "bg-orange-400 text-white hover:bg-orange-500",

    orangeOutline:
      "border border-orange-400 text-orange-400 bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500",

    blackOutline:
      "border border-black text-black bg-transparent hover:border-orange-500 hover:text-orange-500",

      withoutPorder:
      "text-orange-400 hover:underline",

      blackSolid:
      "text-white bg-black cursor-pointer",

      graySolid:
      "text-black bg-gray-200 cursor-pointer",

  };

  const sizes = {
    xs: "text-sm",
    sm: "px-5 py-1 text-sm ",
    md: "px-10 py-2 text-base",
    mdlg: "px-12 py-[12px] text-[18px]",
    lg: "px-15 py-3 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${sizes[size]}
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
