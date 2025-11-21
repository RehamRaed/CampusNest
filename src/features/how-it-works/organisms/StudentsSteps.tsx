import React from "react";
import StepCard from "../molecules/StepCard";
import { studentSteps } from "../data/howItWorksData";

export default function StudentsSteps() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-orange-450 text-center">
        For Students
      </h2>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {studentSteps.map((step) => (
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
