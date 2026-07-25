import { NavItem } from './NavItem';
import { navigationLinks } from '../../../data/navigation';

export const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-10">
      {navigationLinks.map((link) => (
        <NavItem key={link.label} {...link} />
      ))}
    </nav>
  );
};
