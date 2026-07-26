import { HeroBadge } from './HeroBadge';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroButtons } from './HeroButtons';
import { HeroImage } from './HeroImage';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#FAFAFA]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 animate-fade-in-left">
            <HeroBadge />
            <HeroTitle />
            <HeroDescription />
            <HeroButtons />
          </div>

          {/* Right Column - Dashboard Image */}
          <div className="w-full flex justify-center lg:justify-end">
            <HeroImage />
          </div>

        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -z-0 w-[1200px] h-[1200px] bg-[#6C63FF]/5 rounded-full blur-[120px] opacity-70 translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
    </section>
  );
};
