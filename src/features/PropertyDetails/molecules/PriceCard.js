"use client";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { useState } from "react";

export default function PriceCard({
  id,
  price,
  availableFrom,
  availableTo,
  postedDate,
  availableGuests, 
  guests,

}) {
  const [selectedGuest, setSelectedGuest] = useState(1);

  const guestsArray = Array.from(
    { length: guests },
    (_, i) => i + 1
  );

  return (
    <div className="rounded-2xl shadow-xl p-5 sticky border-1 border-gray-200 top-20">
      
      <div className="text-2xl font-bold text-gray-800">
        {price} EGP <span className="text-sm text-gray-500">/ per month</span>
      </div>

      <div className="my-3">
        <label className="font-medium space-y-1 block">
          Guests
          <select
            value={selectedGuest}
            onChange={(e) => setSelectedGuest(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
          >
            {guestsArray.map((n) => (
              <option
                key={n}
                value={n}
                disabled={n > availableGuests}
              >
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-3 text-gray-600 text-sm">
        <div>Available: {availableFrom} → {availableTo}</div>
        <div>Posted: {postedDate}</div>
      </div>

<Link href={`/reservation/${id}?guests=${selectedGuest}`} className="w-full">
  <Button variant="orangeSolid" size="md" className="w-full mt-3">
    Reserve
  </Button>
</Link>

    </div>
  );
}
