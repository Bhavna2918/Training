import { NavLink } from 'react-router-dom';

interface NavItemProps {
  label: string;
  href: string;
}

export const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `relative font-semibold text-[15px] transition-all duration-300 hover:-translate-y-[2px] py-1 ${
          isActive
            ? 'text-[#5B52F5] after:scale-x-100'
            : 'text-gray-600 hover:text-[#5B52F5] after:scale-x-0'
        } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#5B52F5] after:origin-left after:transition-transform after:duration-300`
      }
    >
      {label}
    </NavLink>
  );
};
