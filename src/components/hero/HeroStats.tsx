import { StatCard } from './StatCard';
import { heroStatsData } from '../../data/heroStats';

export const HeroStats = () => {
  return (
    <section className="py-8 bg-white relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroStatsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
