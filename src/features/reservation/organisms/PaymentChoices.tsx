"use client";
import React from "react";
import PaymentOption from "../molecules/PaymentOption";
import Button from "@/components/molecules/button/Button";
import { formatPrice } from "@/utils/reservation";
import { PaymentChoicesProps } from "@/features/reservation/types/reservation.types";

/**
 * PaymentChoices expects basePrice to be a number > 0.
 */
export default function PaymentChoices({
  basePrice,
  selectedOption,
  setSelectedOption,
  onNextStep,
}: PaymentChoicesProps) {
  if (isNaN(basePrice) || basePrice <= 0) {
    return <div className="text-red-500">Error: Price data not available.</div>;
  }

  const confirmationOptions = [
    {
      value: "instant_confirm",
      title: `Pay ${formatPrice(basePrice)} EGP now and Get Instant Confirmation`,
      description: "Reservation is instantly confirmed without landlord approval.",
      badge: "Fastest way",
      disclaimer: `Guarantee: The full amount (${formatPrice(basePrice)} EGP) is securely held in Escrow.`,
    },
    {
      value: "pay_and_chat",
      title: `Pay ${formatPrice(basePrice)} EGP now and Open Chat with Landlord`,
      description: "Chat to finalize details before landlord confirms the booking.",
      badge: "More control",
      disclaimer: `Guarantee: The full amount (${formatPrice(basePrice)} EGP) is securely held in Escrow.`,
    },
  ];

  return (
    <div className="w-full">
      <div className="py-4">
        {confirmationOptions.map((option) => (
          <PaymentOption
            key={option.value}
            name="confirmation_option"
            value={option.value}
            title={option.title}
            description={option.description}
            badge={option.badge}
            disclaimer={option.disclaimer}
            isChecked={selectedOption === option.value}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
        ))}
      </div>

      <div className="flex justify-end">
        <Button variant="blackSolid" size="md" onClick={onNextStep}>Next</Button>
      </div>
    </div>
  );
}
