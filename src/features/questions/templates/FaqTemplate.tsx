import StudentsFaqSection from "@/features/questions/organisms/StudentsFaqSection";
import LandlordFaqSection from "@/features/questions/organisms/LandlordFaqSection";

import Link from "next/link";

export default function FaqTemplate() {
  return (
    <div className="text-gray-700 py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto px-[15px] space-y-20s">
        <StudentsFaqSection />
        <LandlordFaqSection />

        <div className="flex justify-center mt-10">
          <h4 className="text-[16px] text-gray-700">
            <span className="font-bold">Still have any questions? </span>

            <Link
              href="/#contact-section"
              className="text-orange-400 font-semibold underline transition"
            >
              Contact us
            </Link>

            <span> , We are happy to help!</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
