import type { StatType } from '../../types/hero';

interface StatCardProps {
  stat: StatType;
}

export const StatCard = ({ stat }: StatCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${stat.iconBg}`}>
        {stat.icon}
      </div>
      <div className="flex flex-col gap-1 text-center md:text-left">
        <div className="font-extrabold text-3xl text-[#111827] leading-none tracking-tight">{stat.value}</div>
        <div className="text-sm font-medium text-gray-500">{stat.label}</div>
      </div>
    </div>
  );
};
