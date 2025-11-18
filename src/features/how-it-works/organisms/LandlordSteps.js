import React from "react";
import StepCard from "@/features/how-it-works/molecules/StepCard";
import { landlordSteps } from "@/features/how-it-works/data/howItWorksData";

export default function LandlordSteps() {
  return (
    <section >
      <h2 className="text-3xl font-bold mb-8 text-orange-500 text-center">
        For Landlords
      </h2>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {landlordSteps.map((step, i) => (
          <StepCard
            key={i}
            id={step.id}
            iconName={step.iconName}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}
