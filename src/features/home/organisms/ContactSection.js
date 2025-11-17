"use client";
import React from "react";
import ContactInfoCard from "@/features/home/molecules/ContactInfoCard";
import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/TextArea";
import Button from "@/components/atoms/Button";

export default function ContactSection() {
  return (
    <section className="flex justify-center px-4 sm:px-6 lg:px-8 my-20 ">
      <div className="max-w-6xl mx-auto w-full max-w-[1200px] px-[15px]">
        <div className="mb-12">
          <h4 className="text-xl  text-center text-gray-600">Contact Us</h4>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-700">
            Get In Touch
          </h2>
          <div className="w-[85px] h-[5px] rounded-full bg-[#F5801D]  my-1 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-gray-700">
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-[22px] font-bold">
              Feel free to reach out to Us anytime!
            </h2>
            <p className="text-[16px] mt-[-18px]">
              Whether you have questions or need assistance, we’re here 24/7 to
              support you
            </p>

            <ContactInfoCard
              iconName="Mail"
              title="Email"
              description="contact@campusnest.com"
            />
            <ContactInfoCard
              iconName="Phone"
              title="Phone"
              description="+20 123 456 7890"
            />
            <ContactInfoCard
              iconName="MapPin"
              title="Follow Us"
              description={
                <div className="flex gap-4 mt-1 text-gray-600 text-lg">
                  <i className="bi bi-facebook text-xl hover:text-blue-600 cursor-pointer"></i>
                  <i className="bi bi-instagram t2ext-xl hover:text-pink-500 cursor-pointer"></i>
                  <i className="bi bi-linkedin text-xl hover:text-blue-700 cursor-pointer"></i>
                  <i className="bi bi-whatsapp text-xl hover:text-green-500 cursor-pointer"></i>
                </div>
              }
            />
          </div>

          <form className="bg-white/10 p-8 rounded-2xl shadow-lg space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Email" />
            </div>
            <Input placeholder="Subject" />
            <TextArea placeholder="Message" />
            <Button
              type="submit"
              className="font-bold max-sm:w-full"
              variant="orangeSolid"
              size="mdlg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

  );
}
