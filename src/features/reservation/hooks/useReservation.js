import { useState } from "react";

export default function useReservation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPaymentType, setSelectedPaymentType] = useState("instant_confirm");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Credit or debit card");
  const [selectedAgree, setSelectedAgree] = useState(false);

  return {
    currentStep, setCurrentStep,
    selectedPaymentType, setSelectedPaymentType,
    selectedPaymentMethod, setSelectedPaymentMethod,
    selectedAgree, setSelectedAgree
  };
}
