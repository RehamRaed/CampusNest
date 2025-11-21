import React from "react";
import { Property } from "@/types/property.types"; 

// ----- PaymentOption props -----
export interface PaymentOptionProps {
  name: string;
  value: string;
  title: string;
  description?: string;
  badge?: string;
  disclaimer?: string;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

// ----- PaymentChoices props -----
export interface PaymentChoicesProps {
  basePrice: number;
  selectedOption: string;
  setSelectedOption: (val: string) => void;
  onNextStep: () => void;
}

// ----- PaymentMethods props -----
export interface PaymentMethodsProps {
  selectedOption: string;
  setSelectedOption: (val: string) => void;
  onNextStep: () => void;
}

// ----- ReservationBrief props -----
export interface ReservationBriefProps {
  propertyDetails: Property;
  selectedGuests: number;
}

// ----- ReviewSection props -----
export interface ReviewSectionProps {
  details: Property;
  selectedAgree: boolean;
  setSelectedAgree: (v: boolean) => void;
  onNextStep: () => void;
}

// ----- ReservationTemplate props -----
export interface ReservationTemplateProps {
  propertyDetails: Property;
  selectedGuests: number;
}
