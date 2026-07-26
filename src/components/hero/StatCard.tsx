import type { StatType } from '../../types/hero';

interface StatCardProps {
  stat: StatType;
}

export const StatCard = ({ stat }: StatCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:scale-105 group w-full">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${stat.iconBg}`}>
        {stat.icon}
      </div>
      <div className="flex flex-col text-center md:text-left pt-1">
        <h3 className="text-2xl lg:text-[28px] font-extrabold text-[#111827] mb-1 tracking-tight leading-none">{stat.value}</h3>
        <p className="text-[15px] text-gray-500 font-medium whitespace-nowrap">{stat.label}</p>
      </div>
    </div>
  );
};
