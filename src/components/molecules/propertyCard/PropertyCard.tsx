"use client";
import React from "react";
import Link from "next/link";
import type { Property } from "@/types/property.types";

interface PropertyCardProps {
  property: Partial<Property>;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition">
      <div className="h-48 bg-gray-100 relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 rounded-full bg-white/60 px-3 py-2 transition-transform duration-300 hover:scale-103 cursor-pointer">
          <i className="bi bi-heart text-gray-700 "></i>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">
          {property.title}
          <span className="ml-2 text-sm text-yellow-500">
            <i className="bi bi-star-fill"></i> {property.overallRating}
          </span>
        </h3>
        <p className="text-xs text-gray-500 mb-2">{property.location}</p>
        <p className="text-sm text-orange-400 font-bold mb-1">
          {property.price} EGP / month
        </p>
        <p className="text-xs text-gray-500 mb-2">{property.type}</p>
        <div className="flex justify-end align-center">
          <Link
            href={`/propertyDetails/${property.id}`}
            className="flex justify-center align-center gap-1 px-3 py-1 text-sm rounded-sm border border-gray-500 cursor-pointer text-gray-700"
          >
            more details <i className="bi bi-arrow-right mt-[1px]"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
