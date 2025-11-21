import React from "react";
import Icon from "@/components/molecules/icon/Icon";
import { Step } from "@/features/how-it-works/types/howItWorksData";

interface StepCardProps {
  iconName: Step["iconName"];
  title: Step["title"];
  description: Step["description"];
}

export default function StepCard({ iconName, title, description }: StepCardProps) {
  return (
    <div className="min-h-[230px] flex flex-col p-6 bg-white border-2 border-gray-100 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="w-13 h-13 rounded-full mb-2 bg-gray-200 flex justify-center items-center">
        <Icon name={iconName} />
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
