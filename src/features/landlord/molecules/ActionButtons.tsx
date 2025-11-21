import Icon from "@/components/molecules/icon/Icon";
import {LandlordProps } from "@/features/landlord/types/landlord.types";

export default function ActionButtons({ landlord }: LandlordProps ) {
  return (
    <div>
      <button className="flex items-center text-[17px] text-gray-700 gap-3 px-4 py-2 mb-2 rounded hover:bg-gray-100 transition">
        <Icon name="TriangleAlert" className="w-5 h-5" />
        Report {landlord.name}
      </button>

      <button className="flex items-center text-[17px] text-gray-700 gap-3 pl-4 pr-6 py-2 rounded hover:bg-gray-100 transition">
        <Icon name="Ban" className="w-5 h-5" />
        Block {landlord.name}
      </button>
    </div>
  );
}