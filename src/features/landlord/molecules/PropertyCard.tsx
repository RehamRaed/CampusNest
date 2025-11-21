import Icon from "@/components/molecules/icon/Icon";

export default function PropertyCard({ property }) {
  if (!property) return null; 
  return (
    <div className="flex flex-col">
      <img
        src={property.avatar}
        alt={property.title}
        className="rounded-lg h-40 object-cover"
      />
      <div className="flex flex-col gap-1 py-2">
        <h6 className="text-[13px] font-bold text-gray-700">{property.type}</h6>
        <p className="text-[12px] text-gray-700">{property.title}</p>
        <div className="flex items-center gap-1 text-[12px] text-gray-600">
          {property.rating} <Icon name="Star" className="text-yellow-500 w-4 h-4 fill-yellow-500" /> • {property.reviews} reviews
        </div>
      </div>
    </div>
  );
};