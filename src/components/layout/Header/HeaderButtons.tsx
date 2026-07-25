export const HeaderButtons = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <button className="px-6 py-2.5 font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors">
        Login
      </button>
      <button className="px-6 py-2.5 font-semibold text-white bg-[#5B52F5] hover:opacity-90 rounded-lg transition-opacity">
        Get Started
      </button>
    </div>
  );
};
