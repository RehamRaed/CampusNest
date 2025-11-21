export type ButtonVariant =
  | "orangeSolid"
  | "orangeOutline"
  | "blackOutline"
  | "withoutPorder"
  | "blackSolid"
  | "graySolid"
  | "";

export type ButtonSize = "xs" | "sm" | "md" | "mdlg" | "lg" | "";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant; 
  size?: ButtonSize; 
  className?: string;
}