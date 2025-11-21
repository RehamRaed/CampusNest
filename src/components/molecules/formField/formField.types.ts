import { InputProps } from "@/components/molecules/input/input.types";

export interface FormFieldProps extends Omit<InputProps, "className"> {
  label?: string;
  error?: string;
  className?: string; 
  inputClassName?: string; 
}
