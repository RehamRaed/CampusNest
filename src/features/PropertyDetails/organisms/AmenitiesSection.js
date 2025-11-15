"use client";
import { useState } from "react";
import AmenitiesModal from "./AmenitiesModal";
import AmenityBullet from "@/components/atoms/AmenityBullet";

export default function AmenitiesSection({ amenities }) {
  const [isOpen, setIsOpen] = useState(false);

  const visibleAmenities = amenities.slice(0, 6);

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-5">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        What this place offers
      </h3>

      <ul className="space-y-2 text-gray-600">
        {visibleAmenities.map((amenitie) => (
          <AmenityBullet key={amenitie} text={amenitie} />
        ))}
      </ul>

      {amenities.length > 6 && (
        <button
          onClick={() => setIsOpen(true)}
          className="text-orange-500 mt-3 hover:underline text-sm cursor-pointer"
        >
          Show all amenities
        </button>
      )}

      {isOpen && (
        <AmenitiesModal amenities={amenities} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}
