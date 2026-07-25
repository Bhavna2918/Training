import { Sparkles } from 'lucide-react';

export const HeroBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5B52F5]/10 border border-[#5B52F5]/20 text-[#5B52F5] font-semibold text-[13px] mb-8">
      <Sparkles size={14} className="text-[#5B52F5]" />
      Smart Communication Platform
    </div>
  );
};
