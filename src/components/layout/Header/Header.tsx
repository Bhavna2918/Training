import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { HeaderButtons } from './HeaderButtons';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between relative">
        <Logo />
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <Navigation />
        </div>
        <HeaderButtons />
        <MobileMenu />
      </div>
    </header>
  );
};
