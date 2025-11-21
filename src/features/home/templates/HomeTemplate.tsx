import HeroSection from '@/features/home/organisms/HeroSection';
import AboutSection from '@/features/home/organisms/AboutSection';
import FeaturesSection from '@/features/home/organisms/FeaturesSection';
import StatsSection from '@/features/home/organisms/StatsSection';
import TestimonialsSlider from '@/features/home/organisms/TestimonialsSlider';
import ContactSection from '@/features/home/organisms/ContactSection';

export default function HomeTemplate() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSlider />
      <ContactSection />
    </>
  );
}
