import React from "react";
import { LandlordSummaryProps } from "./landlordSummary.types";
import Badge from "@/components/atoms/Badge";
import Link from "next/link";

export default function LandlordSummary({ landlord }: LandlordSummaryProps) {
  return (
    <div className="flex gap-3 items-center mt-5">
      <Link
        href={`/landlord/${landlord.id}`}
        className="p-1 rounded-full w-20 h-20 shadow-lg overflow-hidden"
      >
        <img src={landlord.image} alt={landlord.name} className="w-full object-cover" />
      </Link>
      <div>
        <div className="flex gap-2 items-center">
          <h3>Landlord: {landlord.name}</h3>
          {landlord.isVerified && <Badge text="Verified" color="green" />}
        </div>
        <p className="text-sm text-gray-500">{landlord.livesIn}</p>
      </div>
    </div>
  );
}
