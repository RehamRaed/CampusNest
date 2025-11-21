"use client";
import { useState } from "react";

type Mode = "login" | "signup";
type Role = "student" | "landlord";

export default function useAuthMode() {
  const [mode, setMode] = useState<Mode>("login");
  const [role, setRole] = useState<Role>("student");

  return { mode, setMode, role, setRole };
}
