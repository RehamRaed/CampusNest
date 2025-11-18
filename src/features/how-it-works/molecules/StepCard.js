import React from "react";
import Icon from "@/components/atoms/Icon";

export default function StepCard({ iconName, title, description }) {
  return (
    <div className="min-h-[230px]  flex flex-col p-6 bg-white border-2 border-gray-100 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="w-13 h-13 rounded-full mb-2 bg-gray-200 flex justify-center items-center">
        <Icon name={iconName} />
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>

      <p className="text-gray-600">{description}</p>
    </div>
  );
}
