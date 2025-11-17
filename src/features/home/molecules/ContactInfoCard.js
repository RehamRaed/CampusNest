import Icon from "@/components/atoms/Icon";

export default function ContactInfoCard({ iconName , title, description }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-black/8 w-[50px] h-[50px] flex justify-center items-center rounded-full">
        <Icon name={iconName} className="text-orange-400 text-2xl"/>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
        <div className="text-gray-600">{description}</div>
      </div>
    </div>
  );
}
