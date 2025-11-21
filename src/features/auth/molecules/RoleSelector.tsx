"use client";
import React from "react";
import Button from "@/components/molecules/button/Button";

interface RoleSelectorProps {
  role: "student" | "landlord";
  setRole: React.Dispatch<React.SetStateAction<"student" | "landlord">>;
}

export default function RoleSelector({ role, setRole }: RoleSelectorProps) {
  return (
    <div className="flex justify-center mb-4 gap-2">
      <Button
        type="button"
        onClick={() => setRole("student")}
        variant={role === "student" ? "orangeSolid" : "orangeOutline"}
        size="md"
        className="flex-1"
      >
        Student
      </Button>

      <Button
        type="button"
        onClick={() => setRole("landlord")}
        variant={role === "landlord" ? "orangeSolid" : "orangeOutline"}
        size="md"
        className="flex-1"
      >
        Landlord
      </Button>
    </div>
  );
}
