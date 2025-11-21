"use client";

import React, { useState } from "react";
import Icon from "@/components/molecules/icon/Icon"; 
import { FAQItem } from "@/types/questions.types";

export default function FaqItem({ question, answer , id }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-orange-400 rounded-2xl p-4 mb-4 transition-all duration-300 bg-white shadow-sm">
      <button
        className="flex justify-between items-start w-full text-left cursor-pointer"
        onClick={() => setOpen(!open)}
        id={String(id)}
      >
        <h3 className="text-md font-semibold text-gray-700">{question}</h3>

        <Icon
          name="ChevronDown"
          className={`transition-transform duration-300 flex-shrink-0 ${
            open ? "rotate-180 text-orange-400" : "rotate-0 text-gray-600"
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
