import React from 'react';
import { Button } from '../../../components/elements/Button';
import { Input } from '../../../components/elements/Input';
import blog7 from '../../../assets/images/blog-7.jpeg';

export const NewsletterBanner: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1380px] w-full mx-auto px-[24px] lg:px-[32px]">
        <div className="bg-[#F8F6FF] rounded-[24px] px-[48px] py-[32px] flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 flex justify-center md:justify-start items-center">
            <img 
              src={blog7} 
              alt="Newsletter Illustration" 
              className="w-full max-w-[300px] h-auto object-contain rounded-xl transform scale-[1.1]"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <h2 className="text-[32px] font-bold text-text-main mb-3 leading-tight">
              Never miss an update
            </h2>
            <p className="text-[16px] text-text-secondary mb-8">
              Join thousands of developers and API enthusiasts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <Input placeholder="Enter your email" className="py-3.5" />
              </div>
              <Button size="lg" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
