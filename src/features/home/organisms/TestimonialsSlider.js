'use client';
import React, { useState, useEffect } from "react";
import TestimonialCard from "@/features/home/molecules/TestimonialCard";
import { testimonials } from "@/features/home/data/homePageData";


export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const getVisibleSlides = () => Array.from({ length: visibleCards }, (_, i) => testimonials[(current + i) % testimonials.length]);

  return (
    <section className="flex justify-center px-4 sm:px-6 lg:px-8 my-20">
      <div className="w-full max-w-[1200px] px-[15px]">
        <div className="mb-12">
          <h4 className="text-xl  text-center text-gray-600">What Students Say</h4>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">Our Testimonials</h2>
          <div className="w-[85px] h-[5px] rounded-full bg-[#fa822a]  my-1 mx-auto"></div>
        </div>

        <div className="relative flex items-center justify-center">
          <button onClick={prevSlide} className="absolute left-0 z-10 bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded-full transition cursor-pointer">
            <i className="bi bi-chevron-left text-xl"></i>
          </button>

          <div className={`flex gap-6 py-3 overflow-hidden w-[80%] md:w-[90%] lg:w-full justify-center transition-all duration-500`}>
            {getVisibleSlides().map((item) => (
              <TestimonialCard key={item.id} {...item} visibleCards={visibleCards} />
            ))}
          </div>

          <button onClick={nextSlide} className="absolute right-0 z-10 bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded-full transition cursor-pointer">
            <i className="bi bi-chevron-right text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
