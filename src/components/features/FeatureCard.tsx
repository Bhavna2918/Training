import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, iconBg, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group w-full">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${iconBg}`}>
        {icon}
      </div>
      <div className="flex flex-col text-left pt-0.5">
        <h3 className="text-[17px] font-extrabold text-[#111827] mb-1.5 tracking-tight">{title}</h3>
        <p className="text-[15px] text-gray-500 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
};
