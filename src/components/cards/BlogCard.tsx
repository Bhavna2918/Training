import React from 'react';

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  authorName: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ 
  title, description, category, date, readTime, image, authorName 
}) => {
  return (
    <div className="bg-[#fff] w-full rounded-2xl border border-[#ECECEC] shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] overflow-hidden cursor-pointer flex flex-col h-full group transition-all duration-300 hover:-translate-y-1">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[210px] object-cover rounded-t-2xl"
      />
      <div className="flex flex-col flex-grow p-[24px]">
        <div className="text-[12px] font-[700] tracking-[0.08em] uppercase text-[#6D28D9] mb-[12px]">
          {category}
        </div>
        <h3 className="text-[18px] font-[700] text-[#111827] leading-[1.35] mb-[12px] line-clamp-2 capitalize">
          {title}
        </h3>
        <p className="text-[15px] text-[#6B7280] leading-[1.6] mb-[20px] flex-grow line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#ECECEC]">
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-bold text-[#111827]">{authorName}</span>
            <div className="flex items-center text-[12px] text-[#9CA3AF] gap-1.5">
              <span>{date}</span>
              <span>•</span>
              <span>{readTime} min read</span>
            </div>
          </div>
          <span className="text-[13px] font-bold text-[#6D28D9] group-hover:text-[#5B21B6] transition-colors group-hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </div>
  );
};
