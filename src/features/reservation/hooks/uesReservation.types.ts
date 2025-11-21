export interface UseReservationReturn {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  selectedPaymentType: string;
  setSelectedPaymentType: React.Dispatch<React.SetStateAction<string>>;
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  selectedAgree: boolean;
  setSelectedAgree: React.Dispatch<React.SetStateAction<boolean>>;
}