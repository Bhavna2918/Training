import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useAppDispatch } from '../../store/hooks';
import { setSearchQuery } from '../../store/slices/posts.slice';
import { Button } from '../elements/Button';
import { Input } from '../elements/Input';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const [localSearch, setLocalSearch] = useState('');

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchQuery(localSearch));
    }, 300);

    return () => clearTimeout(timer);
  }, [localSearch, dispatch]);

  const navItems = [
    { label: 'Product', hasDropdown: true },
    { label: 'Use Cases', hasDropdown: true },
    { label: 'Explore', hasDropdown: true },
    { label: 'Learning Center', hasDropdown: true },
    { label: 'About Us', hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full h-[72px] bg-white border-b border-[#ECECEC] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center px-[24px] lg:px-[32px]">
      <div className="w-full max-w-[1360px] flex items-center justify-between">
        
        {/* Left Side: Logo & Navigation */}
        <div className="flex items-center gap-[48px]">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary transition-transform duration-300 group-hover:scale-105">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-bold text-[22px] tracking-tight text-[#111827] flex items-center gap-1.5">
              TryLity <span className="font-semibold text-[#6B7280]">Blog</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-[32px]">
            {navItems.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 cursor-pointer group">
                <span className="whitespace-nowrap text-[16px] font-medium text-[#111827] group-hover:text-primary transition-colors">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronDown size={16} className="text-[#6B7280] group-hover:text-primary transition-colors" />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Side: Search & Subscribe */}
        <div className="flex items-center gap-[20px] mr-[16px]">
          <div className="w-[280px] hidden xl:block">
            <Input 
              placeholder="Search blog..." 
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              icon={<Search size={18} />}
              className="h-[48px] rounded-[12px] border-[#E5E7EB]"
            />
          </div>
          <Button className="hidden md:flex items-center justify-center font-semibold w-[140px] h-[48px] rounded-[12px] bg-[#6D28D9] text-white hover:bg-[#5B21B6] transition-all">
            Subscribe
          </Button>
          
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-[#111827] cursor-pointer focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
};
