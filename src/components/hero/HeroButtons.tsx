import { ArrowRight, LayoutGrid, CheckCircle2 } from 'lucide-react';

export const HeroButtons = () => {
  return (
    <div className="flex flex-col gap-6 w-full lg:w-auto mt-0">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button className="w-full sm:w-auto px-10 h-14 font-semibold text-white bg-[#5B52F5] hover:opacity-90 rounded-lg transition-all duration-300 ease-out hover:scale-[1.05] active:scale-[0.97] hover:shadow-lg flex items-center justify-center gap-2 group">
          Get Started Free 
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1.5" />
        </button>
        <button className="w-full sm:w-auto px-10 h-14 font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-all duration-300 ease-out hover:scale-[1.05] active:scale-[0.97] hover:shadow-md flex items-center justify-center gap-2 group">
          See Features 
          <LayoutGrid size={20} className="text-gray-400 group-hover:text-[#5B52F5] transition-colors" />
        </button>
      </div>
      
      <div className="flex items-center gap-6 mt-2 flex-wrap justify-center lg:justify-start">
        <div className="flex items-center gap-2 text-[15px] font-medium text-gray-500">
          <CheckCircle2 size={16} className="text-[#5B52F5]" />
          14-Day Free Trial
        </div>
        <div className="flex items-center gap-2 text-[15px] font-medium text-gray-500">
          <CheckCircle2 size={16} className="text-[#5B52F5]" />
          No Credit Card
        </div>
        <div className="flex items-center gap-2 text-[15px] font-medium text-gray-500">
          <CheckCircle2 size={16} className="text-[#5B52F5]" />
          Easy Setup
        </div>
      </div>
    </div>
  );
};
