"use client";
import React from "react";
import Button from "@/components/molecules/button/Button";
import Icon from "@/components/molecules/icon/Icon";
import { ReservationBriefProps } from "@/features/reservation/types/reservation.types";
import { formatPrice, totalPrice, extraGuestsPrice } from "@/utils/reservation";

export default function ReservationBrief({
  propertyDetails,
  selectedGuests,
}: ReservationBriefProps) {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const price = Number(propertyDetails.price);
  const guests = Number(selectedGuests);

  return (
    <div className="flex flex-col p-5 border border-gray-200 rounded-2xl shadow-md space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={propertyDetails.image}
          alt={propertyDetails.title}
          className="w-24 h-24 rounded-xl object-cover"
        />
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold">{propertyDetails.title}</h4>
          <h5 className="flex items-center text-sm gap-1">
            <Icon
              name="Star"
              className="text-yellow-500 fill-yellow-500 w-4 h-4"
            />
            <span>{propertyDetails.overallRating}</span>
          </h5>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex justify-between items-center">
        <h5 className="text-medium font-bold text-gray-700">Date</h5>
        <Button variant="graySolid" size="sm">
          Change
        </Button>
      </div>
      <span className="text-gray-600 text-sm mt-[-10px]">{today}</span>

      <hr className="border-gray-200" />

      <div className="flex justify-between items-center">
        <h5 className="text-medium font-bold text-gray-700">Guests</h5>
        <Button variant="graySolid" size="sm">
          Change
        </Button>
      </div>
      <span className="text-gray-600 text-sm mt-[-10px]">
        {guests} guest(s)
      </span>

      <hr className="border-gray-200" />

      <div className="flex flex-col gap-2">
        <h4 className="text-medium font-bold text-gray-700">Price Details</h4>
        <div className="flex justify-between text-gray-700 text-sm">
          <span>Base price</span>
          <span>{`${formatPrice(price)} EGP`}</span>
        </div>
        <div className="flex justify-between text-gray-700 text-sm">
          <span>Extra guests × {guests - 1}</span>
          <span>{`${formatPrice(extraGuestsPrice(price, guests))} EGP`}</span>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex justify-between items-center text-medium font-bold text-gray-700">
        <span>Total</span>
        <span className="text-sm">{`${formatPrice(
          totalPrice(price, guests)
        )} EGP`}</span>
      </div>
    </div>
  );
}
