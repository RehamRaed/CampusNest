import React from "react";
import Button from "@/components/atoms/Button";

export default function RoleSelector({ role, setRole }) {
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
