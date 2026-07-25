import { HeroBadge } from './HeroBadge';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroButtons } from './HeroButtons';
import { HeroImage } from './HeroImage';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-12 w-full">
          
          {/* Left Column - Content */}
          <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left z-10 justify-center">
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
