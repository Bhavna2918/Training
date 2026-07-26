import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../../../data/navigation';

import { NavLink } from 'react-router-dom';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-text-secondary hover:bg-gray-100 rounded-lg transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border-subtle p-6 shadow-xl flex flex-col gap-6 z-50 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <NavLink 
                key={link.label} 
                to={link.href} 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `font-medium transition-colors text-lg ${isActive ? 'text-[#5B52F5]' : 'text-gray-600 hover:text-[#5B52F5]'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-6 border-t border-border-subtle">
            <button className="w-full px-5 py-3 font-medium text-text-main bg-white border border-border-subtle rounded-xl shadow-sm transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]">
              Login
            </button>
            <button className="w-full px-5 py-3 font-medium text-white bg-[#5B52F5] rounded-xl shadow-sm transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
