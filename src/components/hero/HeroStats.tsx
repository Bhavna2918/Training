import { StatCard } from './StatCard';
import { heroStatsData } from '../../data/heroStats';

export const HeroStats = () => {
  return (
    <div className="bg-white border-t border-b border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {heroStatsData.map((stat, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <StatCard stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
