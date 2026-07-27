import React, { useState } from 'react';

export const BlogFilter: React.FC = () => {
  const tabs = ['Latest', 'Popular', 'Announcements', 'Tutorials', 'API Design', 'Engineering'];
  const [activeTab, setActiveTab] = useState('Latest');

  return (
    <div className="border-b border-[#ECEEF3] bg-white mb-[16px] px-[24px] py-[12px] overflow-y-hidden">
      <div className="w-full h-full">
        <nav className="flex items-center gap-[40px] overflow-x-auto overflow-y-hidden no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex flex-col items-center justify-center gap-[6px] whitespace-nowrap text-[15px] transition-colors duration-200 cursor-pointer ${
                  isActive 
                    ? 'font-[600] text-primary' 
                    : 'font-medium text-[#6B7280] hover:text-[#374151]'
                }`}
              >
                <span>{tab}</span>
                <div 
                  className={`absolute -bottom-[12px] w-[36px] h-[3px] bg-primary rounded-full transition-all duration-200 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
