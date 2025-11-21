import Icon from "@/components/molecules/icon/Icon";
import Badge from "@/components/atoms/Badge";
import LandlordCard from "@/components/molecules/landlordCard/LandlordCard";
import LandlordInfo from "@/components/molecules/landlordInfo/landlordInfo";

export default function AboutSection({ landlord }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full items-center lg:items-start">
      <LandlordCard landlord={landlord} />

      <div className="w-full lg:w-[60%] text-left">
        <LandlordInfo landlord={landlord} />

        <div className="flex flex-col gap-1 mt-3 text-[16px] text-gray-700">
          <div className="flex items-center gap-2">
            <Icon name="MapPin" className="w-4 h-4" />
            Speaks {landlord.languges}
          </div>
          <div className="flex items-center gap-2">
            <Icon name="House" className="w-4 h-4" />
            {landlord.livesIn}
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle" className="w-4 h-4" />
            Identity{" "}
            {landlord.isVerified && <Badge color="green" text="Verified" />}
          </div>
        </div>
      </div>
    </div>
  );
}
