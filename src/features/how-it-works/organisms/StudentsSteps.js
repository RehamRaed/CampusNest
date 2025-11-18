import StepCard from "@/features/how-it-works/molecules/StepCard";
import { studentSteps } from "@/features/how-it-works/data/howItWorksData";

export default function StudentsSteps() {
  return (
    <section >
      <h2 className="text-3xl font-bold mb-8 text-orange-500 text-center">
        For Students
      </h2>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {studentSteps.map((step, i) => (
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
