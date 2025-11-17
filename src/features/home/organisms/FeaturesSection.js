import FeatureCard from "@/features/home/molecules/FeatureCard";
import { features } from "@/features/home/data/homePageData";

export default function FeaturesSection() {
  return (
    <section className="flex justify-center my-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1200px] px-[15px]">
        <div className="mb-12 text-center">
          <h4 className="text-xl text-gray-600">Our Features</h4>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">Why Choose Us</h2>
                    <div className="w-[85px] h-[5px] rounded-full bg-[#fa822a]  my-1 mx-auto"></div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => <FeatureCard key={feature.id} {...feature}  />)}
        </div>
      </div>
    </section>
  );
}
