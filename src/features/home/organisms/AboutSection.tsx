import Image from "next/image";
import Button from "@/components/molecules/button/Button";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 my-20">
      <div className="max-w-[1200px] px-[15px] mx-auto">
        <div className="mb-12 text-center">
          <h4 className="text-xl text-gray-600">About Us</h4>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Meet CampusNest
          </h2>
          <div className="w-[85px] h-[5px] rounded-full bg-[#fa822a]  my-1 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-2/3 text-gray-700 text-[17px] leading-relaxed">
            <p className="mb-4">
              Every new beginning needs a safe place — not just a roof over your
              head, but a feeling of comfort and belonging. Here at CampusNest,
              we understand the needs of our international students.
            </p>
            <p className="mb-4">
              That’s why we built a platform that makes your journey easier from
              the very start — bringing you trusted places, clear details, and
              the support you need to choose your accommodation with confidence
              and peace of mind.
            </p>
            <p className="mb-4">
              <span className="font-semibold text-gray-700">
                Our goal is simple:{" "}
              </span>
              to help you start your academic journey with comfort and trust.
            </p>

            <div className="mt-6">
              <Button variant="orangeSolid" size="md">
                <Link href="/about" >
                View More
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <Image
              src="/images/about-img.jpeg"
              alt="about-img"
              width={400}
              height={400}
              className="rounded-lg object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
