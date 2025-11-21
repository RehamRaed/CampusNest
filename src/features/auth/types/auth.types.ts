export type AuthMode = "login" | "signup";
export type AuthRole = "student" | "landlord";

export interface UseAuthModeReturn {
  mode: AuthMode;
  setMode: React.Dispatch<React.SetStateAction<AuthMode>>;
  role: AuthRole;
  setRole: React.Dispatch<React.SetStateAction<AuthRole>>;
}

export interface RoleSelectorProps {
  role: AuthRole;
  setRole: React.Dispatch<React.SetStateAction<AuthRole>>;
}

export interface LoginFormProps {
  mode: AuthMode;
  setMode: React.Dispatch<React.SetStateAction<AuthMode>>;
}

export interface SignupFormProps {
  mode: AuthMode;
  role: AuthRole;
  setMode: React.Dispatch<React.SetStateAction<AuthMode>>;
}
