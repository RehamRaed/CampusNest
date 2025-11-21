import FaqItem from "@/components/molecules/faqItem/FaqItem";
import { faqData } from "../../../../data/questions";
import { FAQItem } from "@/types/questions.types";

export default function LandlordFaqSection() {
  return (
    <section className="flex flex-col md:flex-row text-gray-700 mt-20">
      <div className="flex-[40%] pr-0 md:pr-8">
        <h1 className="text-2xl font-semibold mb-4">Landlord FAQs</h1>
        <p className="text-gray-600 mb-6 md:mb-0 text-md">
          We are here to make your property management and receiving payments
          easy and guaranteed. Find clear answers about the commission system,
          booking confirmation, and the Escrow protection system
        </p>
      </div>
      <div className="flex-[60%]">
        {faqData.slice(9, 14).map((item : FAQItem, index) => (
          <FaqItem
            key={index}
            id={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}
