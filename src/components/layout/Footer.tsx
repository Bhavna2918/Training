import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border-subtle pt-16 pb-8">
      <div className="max-w-[1380px] w-full mx-auto px-[24px] lg:px-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Col 1 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-bold text-xl tracking-tight text-text-main">TryLity</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              The modern API communication platform. Design, build, test, and scale APIs with ease.
            </p>
            <div className="flex items-center gap-4 text-text-main">
              <span className="cursor-pointer hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </span>
              <span className="cursor-pointer hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
              <span className="cursor-pointer hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </span>
              <span className="cursor-pointer hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </span>
            </div>
          </div>
          
          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-text-main mb-6">Product</h4>
            <ul className="space-y-4">
              {['Features', 'API Platform', 'Pricing', 'Enterprise'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-text-main mb-6">Use Cases</h4>
            <ul className="space-y-4">
              {['API Development', 'API Testing', 'API Monitoring', 'Collaboration'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Col 4 */}
          <div>
            <h4 className="font-bold text-text-main mb-6">Resources</h4>
            <ul className="space-y-4">
              {['Blog', 'Learning Center', 'Documentation', 'Community'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Col 5 */}
          <div>
            <h4 className="font-bold text-text-main mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Press', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
          <p>© 2024 TryLity. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
