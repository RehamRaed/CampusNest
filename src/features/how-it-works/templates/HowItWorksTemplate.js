import StudentsSteps from "@/features/how-it-works/organisms/StudentsSteps";
import LandlordSteps from "@/features/how-it-works/organisms/LandlordSteps";
import FaqAccordion from "@/features/how-it-works/organisms/FaqAccordion";

export default function HowItWorksPage() {
  return (
    <div className="text-gray-800 py-15 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-[1200px] mx-auto px-[15px] space-y-20">
        <section className="text-center">
          <h1 className="text-2xl md:text-3xl md:text-4xl font-bold mb-6 text-gray-700 animate-fadeIn">
            Comfortable & Reliable Student Housing
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fadeIn delay-200">
            Connect with verified housing options and manage bookings easily
            <br />
            Your student housing journey starts here!
          </p>
        </section>

        <StudentsSteps />
        <LandlordSteps />
        <FaqAccordion />
      </div>
    </div>
  );
}
