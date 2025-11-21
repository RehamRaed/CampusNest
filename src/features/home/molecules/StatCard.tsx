import Icon from "@/components/molecules/icon/Icon";
export default function StatsCard({ iconName, value, label }) {
  return (
    <div className="flex flex-col items-center">
    <div className="bg-white/20 text-white  backdrop-blur-sm rounded-full p-8 mb-4 border-4 border-gray-300 flex flex-col items-center justify-center w-[140px] h-[140px] mx-auto shadow-lg">
      <div className="text-xl"><Icon name={iconName} /></div>
      <h3 className="text-3xl font-bold mt-3 text-white">{value}</h3>
    </div>
    <p className="text-white font-bold mt-1">{label}</p>
    </div>
  );
}
