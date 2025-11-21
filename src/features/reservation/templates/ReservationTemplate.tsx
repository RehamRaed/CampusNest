"use client";
import React from "react";
import PaymentChoices from "@/features/reservation/organisms/PaymentChoices";
import PaymentMethods from "@/features/reservation/organisms/PaymentMethods";
import ReviewSection from "@/features/reservation/organisms/ReviewSection";
import Button from "@/components/molecules/button/Button";
import ReservationBrief from "@/features/reservation/organisms/ReservationBrief";
import useReservation from "@/features/reservation/hooks/useReservation";
import { ReservationTemplateProps } from "@/features/reservation/types/reservation.types";

export default function ReservationTemplate({
  propertyDetails,
  selectedGuests,
}: ReservationTemplateProps) {
  const {
    currentStep,
    setCurrentStep,
    selectedPaymentType,
    setSelectedPaymentType,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    selectedAgree,
    setSelectedAgree,
  } = useReservation();

  if (!propertyDetails) return <p>Loading propertyDetails...</p>;

  return (
    <div className="max-w-[1200px] mx-auto space-y-10 p-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Confirm and Pay</h1>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="lg:w-7/12 space-y-8">
          {/* STEP 1 */}
          <div className="border border-gray-200 p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">1. Choose when to pay</h2>
              {currentStep > 1 && (
                <Button onClick={() => setCurrentStep(1)} variant="graySolid" size="sm">
                  change
                </Button>
              )}
            </div>

            {currentStep === 1 && (
              <PaymentChoices
                basePrice={Number(propertyDetails.price)}
                selectedOption={selectedPaymentType}
                setSelectedOption={setSelectedPaymentType}
                onNextStep={() => setCurrentStep(2)}
              />
            )}
          </div>

          {/* STEP 2 */}
          <div className="border border-gray-200 p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">2. Add a payment method</h2>
              {currentStep > 2 && (
                <Button onClick={() => setCurrentStep(2)} variant="graySolid" size="sm">
                  change
                </Button>
              )}
            </div>

            {currentStep === 2 && (
              <PaymentMethods
                selectedOption={selectedPaymentMethod}
                setSelectedOption={setSelectedPaymentMethod}
                onNextStep={() => setCurrentStep(3)}
              />
            )}
          </div>

          {/* STEP 3 */}
          <div className="border border-gray-200 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">3. Review your reservation</h2>

            {currentStep === 3 && (
              <ReviewSection
                details={propertyDetails}
                selectedAgree={selectedAgree}
                setSelectedAgree={setSelectedAgree}
                onNextStep={() => alert("Reservation Completed!")}
              />
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-4/12 space-y-8">
          <ReservationBrief propertyDetails={propertyDetails} selectedGuests={selectedGuests} />
        </div>
      </div>
    </div>
  );
}
