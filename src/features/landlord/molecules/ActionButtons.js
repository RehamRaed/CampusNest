import Icon from "@/components/atoms/Icon";

export default function ActionButtons({ landlord }) {
  return (
    <div >
      <button className="flex items-center text-[17px] text-gray-800 gap-3 px-4 py-2 mb-2 rounded hover:bg-gray-200 transition">
        <Icon name="TriangleAlert" className="w-5 h-5" />
        Report {landlord.name}
      </button>

      <button className="flex items-center text-[17px] text-gray-800 gap-3 px-4 py-2 rounded hover:bg-gray-200 transition">
        <Icon name="Ban" className="w-5 h-5" />
        Block {landlord.name}
      </button>
    </div>
  );
}