import StatsCard from '@/features/home/molecules/StatCard';
import { stats }  from '@/features/home/data/homePageData';
export default function StatsSection() {
  
  return (
    <section className="relative w-full py-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/Stats-bg.png')" }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat , i) => (
            <StatsCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}