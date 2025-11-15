"use client";
import React from "react";
import PaymentOption from "../molecules/PaymentOption";
import Button from "@/components/atoms/Button";

export default function PaymentMethods({ selectedOption, setSelectedOption, onNextStep }) {
  const methods = ["Credit or debit card", "PayPal", "Google Pay"];

  return (
    <div className="w-full">
      <div className="py-4">
        {methods.map((method) => (
          <PaymentOption
            key={method}
            name="payment_method"
            value={method}
            title={method}
            isChecked={selectedOption === method}
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
