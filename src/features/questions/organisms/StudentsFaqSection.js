import FaqItem from "@/components/molecules/FaqItem";
import { faqData } from "../../../../data/questions";

export default function StudentsFaqSection() {
  return (
    <section className="flex flex-col md:flex-row text-gray-700 ">
      <div className="flex-[40%] pr-0 md:pr-8">
        <h1 className="text-2xl font-semibold mb-4">Students FAQs</h1>
        <p className="text-gray-600 mb-6 md:mb-0 text-md">
          WWe are here to make your housing search and booking easy and
          guaranteed. Find clear answers about the booking process, payment
          security, and the CampusNest guarantee
        </p>
      </div>
      <div className="flex-[60%]">
        {faqData.slice(0, 9).map((item, index) => (
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
