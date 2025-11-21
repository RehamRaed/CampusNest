"use client";
import { useState } from "react";
import { UseReservationReturn } from "./uesReservation.types";

export default function useReservation(): UseReservationReturn {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedPaymentType, setSelectedPaymentType] = useState<string>("instant_confirm");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("Credit or debit card");
  const [selectedAgree, setSelectedAgree] = useState<boolean>(false);

  return {
    currentStep,
    setCurrentStep,
    selectedPaymentType,
    setSelectedPaymentType,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    selectedAgree,
    setSelectedAgree,
  };
}
