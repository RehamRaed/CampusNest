import React from "react";
import AboutSection from "@/features/landlord/organisms/AboutSection";
import Testimonials from "@/features/landlord/organisms/Testimonials";
import PropertiesList from "@/features/landlord/organisms/PropertiesList";
import ActionButtons from "@/features/landlord/molecules/ActionButtons";

export default function LandlordTemplate({ landlord }) {
  if (!landlord) return null;

  return (
    <div className="max-w-[1200px] mx-auto space-y-10 p-6 md:p-10">
      <AboutSection landlord={landlord} />

      <hr className="border-t border-gray-200" />

      <Testimonials landlord={landlord} />

      <hr className="border-t border-gray-200" />

      <PropertiesList landlord={landlord} />

      <hr className="border-t border-gray-200" />

        <ActionButtons landlord={landlord} />
    </div>
  );
}
