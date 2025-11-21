import React from "react";
import { LandlordInfoProps } from "./landlordInfo.types";
import Badge from "@/components/atoms/Badge";

export default function LandlordInfo({ landlord }: LandlordInfoProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-3">
        <h3 className="text-lg font-semibold text-gray-700">{landlord.name}</h3>
        {landlord.isLandlord && <Badge color="orange" text="Landlord" />}
      </div>

      <div className="text-sm text-gray-500 mt-1">
        {landlord.totalReviews} reviews · {landlord.yearsHosting} years hosting
      </div>

      <p className="mt-3 text-gray-700">{landlord.description}</p>
    </>
  );
}
