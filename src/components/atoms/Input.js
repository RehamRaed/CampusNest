export default function Input({
  register,
  name,
  type = "text",
  placeholder,
  inputClassName = "",
  ...props
}) {
  return (
    <input
      id={name}
      {...(register ? register(name) : {})}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      className={`
        w-full rounded-lg px-3 py-2
        border border-gray-200
        text-sm md:text-base
        focus:outline-none
        ${inputClassName}
      `}
      {...props}
    />
  );
}
