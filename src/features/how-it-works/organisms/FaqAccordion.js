import FaqItem from "@/components/molecules/FaqItem";
import { faqData } from "../../../../data/questions";
import Link from "next/link";

export default function FaqAccordion() {
  return (
    <section className="max-w-3xl mx-auto ">
      <h1 className="text-center font-semibold text-2xl mb-8 text-gray-700">Frequently Asked Questions </h1>
      {faqData.slice(0, 3).map((item) => (
        <FaqItem
          key={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}

      <div className="text-right mt-3">
        <Link
          href="/questions"
          className="text-orange-500 font-semibold hover:underline"
        >
          View All Questions →
        </Link>
      </div>
    </section>
  );
}
