"use client";
import React, { useState } from "react";
import AmenitiesSelection from "@/features/explore/molecules/AmenitiesSelection";
import LocationFilter from "@/features/explore/molecules/LocationFilter";
import PriceFilter from "@/features/explore/molecules/PriceFilter";
import HousingTypes from "@/features/explore/molecules/HousingTypes";
import RatingFilter from "@/features/explore/molecules/RatingFilter";
import SidebarBtns from "@/features/explore/molecules/SidebarBtns";

export default function SidebarFilter() {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(3000);
  const [type, setType] = useState("");
  const [amenities, setAmenities] = useState<string[]>([]);
  const [rating, setRating] = useState<number | null>(null);

  const handleReset = () => {
    setLocation("");
    setPrice(3000);
    setType("");
    setAmenities([]);
    setRating(null);
  };

  const handleApply = () => {
    console.log("Applied Filters:", {
      location,
      price,
      type,
      amenities,
      rating,
    });
  };

  return (
    <aside
      className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100 md:sticky h-fit"
      style={{ top: "105px" }}
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Filters</h2>

      <LocationFilter label="Location" value={location} onChange={setLocation} />
      <PriceFilter label="Max Price (EGP)" value={price} onChange={setPrice} />
      <HousingTypes label="Housing Type" value={type} onChange={setType} />
      <AmenitiesSelection
        options={["Wi-Fi","Air Conditioning","Parking","Balcony","Elevator","Washer","Heating","TV"]}
        selectedValues={amenities}
        onValueChange={setAmenities}
      />
      <RatingFilter label="Rating" value={rating} onChange={setRating} />

      <SidebarBtns onApply={handleApply} onReset={handleReset} />
    </aside>
  );
}
