"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginForm({ mode, setMode }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => alert(`Welcome back, ${data.email}`);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${
        mode === "login" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">Login</h1>

      <FormField
      register={register}
      name="email"
      type="email"
      placeholder="Email"
      error={errors.email?.message}
    />
<FormField
      register={register}
      name="password"
      type="password"
      placeholder="Password"
      error={errors.password?.message}
    />
      <a href="#" className="text-gray-800 hover:text-[#ED740E] text-sm float-right mb-3 hover:underline">
        Forgot Password?
      </a>

      <Button
        variant="orangeSolid"
        size="lg"
        className="w-full"
      >
        Login
      </Button>

      <p className="text-center text-sm mt-3">
        Don’t have an account?{" "}
        <button onClick={() => setMode("signup")} className="text-[#F5801D] font-semibold hover:underline">
          Sign up
        </button>
      </p>
    </form>
  );
}