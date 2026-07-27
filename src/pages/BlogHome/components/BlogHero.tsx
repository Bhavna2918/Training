import React from 'react';
import { Button } from '../../../components/elements/Button';
import heroImage from '../../../assets/images/image.jpeg';

export const BlogHero: React.FC = () => {
  // Mocking multiple slides to match reference dots, but implementing the requested hide logic.
  const slides = [1, 2, 3, 4]; 

  return (
    <section className="bg-white pt-[64px] pb-[8px] min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="max-w-[1380px] w-full mx-auto px-[24px] lg:px-[32px] flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-[46fr_54fr] gap-[56px] items-center">
          
          <div className="w-full max-w-[500px]">
            <span className="inline-block text-[12px] font-bold uppercase tracking-widest text-[#6D28D9] mb-4">
              FEATURED
            </span>
            <h1 className="text-[52px] font-[800] text-[#111827] leading-[1.08] tracking-[-0.03em] mb-6 whitespace-nowrap">
              How to Build Better APIs,<br />
              Together with Your Team
            </h1>
            <p className="text-[20px] text-[#6B7280] leading-[32px] mb-[32px] w-full max-w-[500px]">
              Discover practices and tools that help teams design, build, test, and ship APIs faster and more efficiently.
            </p>
            <Button className="w-fit h-[52px] px-[32px] text-[16px] rounded-[14px] bg-[#6D28D9] text-white hover:bg-[#5B21B6] transition-all">
              Read the full story
            </Button>
          </div>

          <div className="w-full min-w-0 lg:-mr-[48px]">
            <div className="w-full aspect-video rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-[#111827]">
              <img 
                src={heroImage}
                alt="API Collaboration Illustration"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Slider Pagination */}
        {slides.length > 1 && (
          <div className="w-full flex justify-center mt-[24px] mb-[24px]">
            <div className="flex items-center gap-4">
              {slides.map((slide, index) => (
                <div 
                  key={slide} 
                  className={`w-8 h-1.5 rounded-full cursor-pointer transition-colors ${
                    index === 0 ? 'bg-[#6D28D9]' : 'bg-[#E5E7EB] hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
