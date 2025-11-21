import Link from "next/link";
import LandlordCard from "@/components/molecules/landlordCard/LandlordCard";
import LandlordInfo from "@/components/molecules/landlordInfo/landlordInfo";

export default function LandlordSection({ landlord }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Meet your Landlord
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 w-full items-center lg:items-start">
        {/* Left Card */}
        <LandlordCard landlord={landlord} />

        
        {/* Right Info */}
        <div className="w-full lg:w-[60%] text-center sm:text-left">
          <LandlordInfo landlord={landlord} />

          <div className="mt-3 text-sm text-gray-500">
            <div>Response rate: {landlord.responseRate}</div>
            <div>{landlord.responseTime}</div>
          </div>

          <div className="mt-4">
            <Link
              href={`/landlord/${landlord.id}`}
              className="px-4 py-2 border rounded text-sm hover:bg-gray-50 transition cursor-pointer"
            >
              View landlord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
