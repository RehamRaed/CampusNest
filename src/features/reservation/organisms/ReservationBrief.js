"use client";
import Button from "@/components/atoms/Button";
import { formatPrice, totalPrice, extraGuestsPrice } from "@/utils/reservation";
import Icon from "@/components/atoms/Icon";

export default function ReservationBrief({ propertyDetails, selectedGuests }) {
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  return (
    <div className="flex flex-col p-5 border border-gray-200 rounded-2xl shadow-md space-y-5">
      <div className="flex items-start gap-3">
        <img src={propertyDetails.image} alt={propertyDetails.title} className="w-24 h-24 rounded-xl object-cover" />
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold">{propertyDetails.title}</h4>
          <h5 className="flex items-center text-sm gap-1">
            <Icon name="Star" className="text-yellow-500 fill-yellow-500 w-4 h-4" /> 
            <span>{propertyDetails.overallRating}</span>
          </h5>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex justify-between items-center">
        <h5 className="text-medium font-bold text-gray-800">Date</h5>
        <Button variant="graySolid" size="sm">Change</Button>
      </div>
      <span className="text-gray-600 text-sm mt-[-10px]">{today}</span>

      <hr className="border-gray-200" />

      <div className="flex justify-between items-center">
        <h5 className="text-medium font-bold text-gray-800">Guests</h5>
        <Button variant="graySolid" size="sm">Change</Button>
      </div>
      <span className="text-gray-600 text-sm mt-[-10px]">{selectedGuests} guest(s)</span>

      <hr className="border-gray-200" />

      <div className="flex flex-col gap-2">
        <h4 className="text-medium font-bold text-gray-800">Price Details</h4>
        <div className="flex justify-between text-gray-700 text-sm">
          <span>Base price</span>
          <span>{formatPrice(propertyDetails.price)} EGP</span>
        </div>
        <div className="flex justify-between text-gray-700 text-sm">
          <span>Extra guests × {selectedGuests - 1}</span>
          <span>{extraGuestsPrice(propertyDetails.price, selectedGuests)} EGP</span>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex justify-between items-center text-medium font-bold text-gray-800">
        <span>Total</span>
        <span className='text-sm '>{totalPrice(propertyDetails.price, selectedGuests)} EGP</span>
      </div>
    </div>
  );
}
