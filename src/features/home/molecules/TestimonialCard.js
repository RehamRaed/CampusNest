import Image from 'next/image';
import Icon from '@/components/atoms/Icon';

export default function TestimonialCard({ role, name, rating, image, text, visibleCards, index  }) {
  return (
    <div className={`flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl shadow-md p-6 h-[270px] w-[90%] md:w-[300px] transition-all duration-500 ${
      visibleCards === 3
        ? index === 1 ? 'scale-105 opacity-100' : 'scale-95 opacity-60'
        : 'scale-105 opacity-100'
    }`}>
      <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center mb-2">
        <Image src={image} alt={name} width={80} height={80} className="rounded-full object-cover" />
      </div>
      <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
      <p className="text-gray-500 text-sm">{role}</p>
      <div className="flex justify-center mt-2 text-yellow-400">
        {Array(rating).fill().map((_, i) => <Icon key={i} name="Star" className="text-yellow-300 w-4 h-4"/> )}
      </div>
      <p className="mt-3 text-gray-600 text-sm">{text}</p>
    </div>
  );
}
