interface NavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
}

export const NavItem = ({ label, href, isActive }: NavItemProps) => {
  return (
    <a
      href={href}
      className={`font-semibold text-[15px] transition-colors ${
        isActive
          ? 'text-[#5B52F5] border-b-2 border-[#5B52F5] pb-1'
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {label}
    </a>
  );
};
