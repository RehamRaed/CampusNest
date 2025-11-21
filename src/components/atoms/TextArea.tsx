export default function TextArea({ placeholder, className = "" }: { placeholder: string; className?: string }) {
  return (
    <textarea
      placeholder={placeholder}
      className={`w-full border border-gray-200 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-200 ${className}`}
    />
  );
}
