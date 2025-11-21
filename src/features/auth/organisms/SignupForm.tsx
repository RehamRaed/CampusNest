"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema, landlordSchema } from "@/utils/validationSchemas";
import { z } from "zod";
import FormField from "@/components/molecules/formField/FormField";
import Button from "@/components/molecules/button/Button";

type StudentFormData = z.infer<typeof studentSchema>;
type LandlordFormData = z.infer<typeof landlordSchema>;

interface SignupFormProps {
  mode: "login" | "signup";
  role: "student" | "landlord";
  setMode: React.Dispatch<React.SetStateAction<"login" | "signup">>;
}

export default function SignupForm({ mode, role, setMode }: SignupFormProps) {
  const { register: studentRegister, handleSubmit: handleStudent, formState: { errors: studentErrors } } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
  });

  const { register: landlordRegister, handleSubmit: handleLandlord, formState: { errors: landlordErrors } } = useForm<LandlordFormData>({
    resolver: zodResolver(landlordSchema),
  });

  const onStudentSubmit = (data: StudentFormData) => {
    alert(`Student created: ${data.fullName}`);
  };

  const onLandlordSubmit = (data: LandlordFormData) => {
    alert(`Landlord created: ${data.fullName}`);
  };

  return (
    <>
      {/* Student Form */}
      <form
        onSubmit={handleStudent(onStudentSubmit)}
        className={`absolute top-[110px] left-0 w-full transition-opacity duration-500 ease-in-out ${
          mode === "signup" && role === "student"
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <FormField register={studentRegister} name="fullName" placeholder="Full Name" error={studentErrors.fullName?.message} />
        <FormField register={studentRegister} name="email" type="email" placeholder="Email" error={studentErrors.email?.message} />
        <FormField register={studentRegister} name="password" type="password" placeholder="Password" error={studentErrors.password?.message} />
        <FormField register={studentRegister} name="confirmPassword" type="password" placeholder="Confirm Password" error={studentErrors.confirmPassword?.message} />

        <Button variant="orangeSolid" size="lg" className="w-full" type="submit">Create Student Account</Button>
        <p className="text-center text-sm mt-3">
          Already have an account?{" "}
          <button type="button" onClick={() => setMode("login")} className="text-orange-400 font-semibold hover:underline cursor-pointer">
            Sign in
          </button>
        </p>
      </form>

      {/* Landlord Form */}
      <form
        onSubmit={handleLandlord(onLandlordSubmit)}
        className={`absolute top-[110px] left-0 w-full transition-opacity duration-500 ease-in-out ${
          mode === "signup" && role === "landlord"
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <FormField register={landlordRegister} name="fullName" placeholder="Full Name" error={landlordErrors.fullName?.message} />
        <FormField register={landlordRegister} name="phone" placeholder="Phone" error={landlordErrors.phone?.message} />
        <FormField register={landlordRegister} name="password" type="password" placeholder="Password" error={landlordErrors.password?.message} />
        <FormField register={landlordRegister} name="confirmPassword" type="password" placeholder="Confirm Password" error={landlordErrors.confirmPassword?.message} />

        <Button variant="orangeSolid" size="lg" className="w-full" type="submit">Create Landlord Account</Button>
        <p className="text-center text-sm mt-3">
          Already have an account?{" "}
          <button type="button" onClick={() => setMode("login")} className="text-orange-400 font-semibold hover:underline cursor-pointer">
            Sign in
          </button>
        </p>
      </form>
    </>
  );
}
