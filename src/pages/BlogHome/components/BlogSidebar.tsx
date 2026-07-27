import React from 'react';
import { Button } from '../../../components/elements/Button';
import { Input } from '../../../components/elements/Input';

import thumb1 from '../../../assets/images/blog-1.jpeg';
import thumb2 from '../../../assets/images/blog-2.jpeg';
import thumb3 from '../../../assets/images/blog-3.jpeg';
import thumb4 from '../../../assets/images/blog-4.jpeg';
import thumb5 from '../../../assets/images/blog-5.jpeg';

export const BlogSidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-[24px] w-full">
      
      {/* Newsletter Card */}
      <div className="bg-[#fff] rounded-[16px] p-[24px] border border-[#ECECEC]">
        <h3 className="text-[20px] font-[700] text-[#111827] mb-2 leading-tight">Stay in the loop</h3>
        <p className="text-[14px] text-[#6B7280] mb-5 leading-relaxed">
          Get the latest API news and insights delivered to your inbox.
        </p>
        <div className="flex flex-col gap-3">
          <Input placeholder="Enter your email" className="h-[48px] rounded-[10px] border-[#E5E7EB]" />
          <Button fullWidth className="h-[48px] rounded-[10px] bg-[#6D28D9] text-[#fff] hover:bg-[#5B21B6] transition-all font-semibold">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Topics Card */}
      <div className="bg-[#fff] rounded-[16px] p-[24px] border border-[#ECECEC]">
        <h3 className="text-[20px] font-bold text-[#111827] mb-6">Topics</h3>
        <ul className="flex flex-col gap-4 mb-6">
          {[
            { name: 'API Design', count: 124 },
            { name: 'Engineering', count: 98 },
            { name: 'Tutorials', count: 86 },
            { name: 'Culture', count: 42 },
            { name: 'Product', count: 36 },
            { name: 'Announcements', count: 28 },
          ].map(topic => (
            <li key={topic.name} className="flex justify-between items-center group cursor-pointer">
              <span className="text-[15px] font-medium text-[#4B5563] group-hover:text-[#111827] transition-colors">{topic.name}</span>
              <span className="text-[14px] text-[#9CA3AF]">({topic.count})</span>
            </li>
          ))}
        </ul>
        <a href="#" className="text-[14px] font-bold text-[#6D28D9] hover:text-[#5B21B6] transition-colors flex items-center gap-1">
          View all topics <span>→</span>
        </a>
      </div>

      {/* Popular Posts Card */}
      <div className="bg-[#fff] rounded-[16px] p-[24px] border border-[#ECECEC]">
        <h3 className="text-[20px] font-bold text-[#111827] mb-6">Popular Posts</h3>
        <div className="flex flex-col gap-[16px]">
          {[
            { title: 'What is an API?', time: '12 min read', img: thumb1 },
            { title: 'REST API Tutorial', time: '8 min read', img: thumb2 },
            { title: 'GraphQL vs REST', time: '10 min read', img: thumb3 },
            { title: 'How to Document APIs', time: '7 min read', img: thumb4 },
            { title: 'API Testing Best Practices', time: '9 min read', img: thumb5 },
          ].map((post) => (
            <div key={post.title} className="flex items-center gap-[16px] group cursor-pointer transition-colors">
              <div className="w-[52px] h-[52px] rounded-[10px] overflow-hidden shrink-0 bg-[#F3F4F6]">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[14px] font-bold text-[#111827] group-hover:text-[#6D28D9] transition-colors line-clamp-1">{post.title}</h4>
                <span className="text-[12px] text-[#6B7280]">{post.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
