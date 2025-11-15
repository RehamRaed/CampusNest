"use client";
import React from "react";
import LoginForm from "@/features/auth/organisms/LoginForm";
import SignupForm from "@/features/auth/organisms/SignupForm";
import RoleSelector from "@/features/auth/molecules/RoleSelector";
import useAuthMode from "@/features/auth/hooks/useAuthMode";

export default function AuthCard() {
  const { mode, setMode, role, setRole } = useAuthMode();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-[1200px] bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div
          className="hidden md:flex flex-col p-6 md:p-10 bg-cover bg-center transition-opacity duration-500 ease-in-out"
          style={{ backgroundImage: "url('/images/loginbg.png')" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-800">
            {mode === "login" ? "Welcome Back!" : "Hello there!"}
          </h2>
          <p className="text-sm md:text-base opacity-90">
            {mode === "login"
              ? "Sign in to continue to your dashboard."
              : "Create your account and start exploring as a student or landlord."}
          </p>

          <div className="flex items-center my-3">
            <div className="hidden md:block md:flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm whitespace-nowrap">
              or
            </span>
            <div className="hidden md:block md:flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="mt-2 text-sm">
            <button
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="px-12 py-2 rounded-lg bg-[#BD907E] hover:bg-[#ED740E] text-white font-semibold transition"
            >
              {mode === "login" ? "Sign up" : "Login"}
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 md:p-8 relative">
          <div className="w-full max-w-md relative min-h-[500px]">
            {mode === "signup" && (
              <>
                <div className="text-center mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Sign Up
                  </h2>
                </div>
                <RoleSelector role={role} setRole={setRole} />
              </>
            )}
            <LoginForm mode={mode} setMode={setMode} />
            <SignupForm mode={mode} role={role} setMode={setMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
