import React from "react";
import StepCard from "../molecules/StepCard";
import { landlordSteps } from "../data/howItWorksData";

export default function LandlordSteps() {
  
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-orange-450 text-center">
        For Landlords
      </h2>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {landlordSteps.map((step) => (
          <StepCard
            key={step.id}
            iconName={step.iconName}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}
