import {AmenitiesModalProps} from "@/features/PropertyDetails/types/propertyDetails.types"
export default function AmenitiesModal({ amenities, onClose } :AmenitiesModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md max-h-[80vh] overflow-y-auto p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-orange-400 text-lg"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          All Amenities
        </h3>

        <ul className="space-y-2 text-gray-700">
          {amenities.map((item, i) => (
            <li key={i} className="flex items-center gap-2 border-b border-gray-100 pb-1">
              <span className="text-orange-400">•</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
