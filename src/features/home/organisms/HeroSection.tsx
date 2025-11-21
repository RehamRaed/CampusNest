import Image from "next/image";
import Icon from "@/components/molecules/icon/Icon";
import Button from "@/components/molecules/button/Button";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] overflow-hidden flex justify-center">
      <div className="absolute inset-0 brightness-[0.5]">
        <Image
          src="/images/hero-img.jpg"
          alt="Dormitory"
          fill
          priority
          className="object-cover "
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6 md:px-10 h-full ">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-2xl leading-tight animate-fadeIn">
          Find your home away from home
        </h1>
        <p className="w-full md:max-w-[80%] lg:max-w-[60%] mt-3 text-[18px] md:text-xl">
          Easily browse and book trusted student accommodations across Egypt,
          enjoying safe, comfortable homes in convenient locations for a
          stress-free university life.
        </p>

        <div className="bg-white/85 backdrop-blur-md text-gray-700 rounded-2xl p-5 md:p-6 !mt-10 flex flex-col md:flex-row gap-4 shadow-2xl w-full max-w-5xl items-center animate-slideUp border border-gray-200">
          <div className="flex items-center gap-3 w-full md:w-2/5 bg-white border border-gray-200 rounded-xl px-4 py-[10px] shadow-sm focus-within:ring-1 focus-within:ring-orange-300 transition">
            <Icon name="MapPin" className="text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full text-gray-700 placeholder-gray-400 placeholder:text-base bg-transparent outline-none text-lg"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto bg-white border border-gray-200 rounded-xl px-4 py-[13px] shadow-sm focus-within:ring-1 focus-within:ring-orange-300 transition">
            <Icon name="Calendar" className="text-gray-500 w-5 h-5" />
            <input
              type="date"
              className="bg-transparent outline-none text-gray-700 w-full"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto bg-white border border-gray-200 rounded-xl px-4 py-[15px] shadow-sm focus-within:ring-1 focus-within:ring-orange-300 transition">
            <Icon name="Users" className="text-gray-500 w-5 h-5" />
            <select
              defaultValue=""
              className="bg-transparent outline-none text-gray-700 w-full pl-0 md:px-3"
            >
              <option value="" disabled hidden>
                Guests
              </option>
              <option value="1">1 Student</option>
              <option value="2">2 Students</option>
              <option value="3">3 Students</option>
              <option value="4">+4 Students</option>
            </select>
          </div>

          <Button
            variant="orangeSolid"
            size="mdlg"
            className=" w-full md:w-auto flex justify-center items-center gap-2"
          >
            {" "}
            <Icon name="Search" className="text-white w-5 h-5" />
            <span>Search</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
