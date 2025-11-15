"use client";
import { useState } from "react";

export default function useAuthMode() {
  const [mode, setMode] = useState("login");      
  const [role, setRole] = useState("student");  
  return { mode, setMode, role, setRole };
}
