import Icon from "@/components/atoms/Icon";

export default function FeatureCard({ iconName , title, description }) {
  return (
    <div className="bg-white/20 p-6 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full flex justify-center items-center mb-4 text-4xl">
        <Icon name={iconName} className="text-[#fa822a] w-12 h-12" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
