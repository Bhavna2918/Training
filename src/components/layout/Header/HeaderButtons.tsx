export const HeaderButtons = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <button className="px-5 py-2 font-medium text-gray-700 hover:text-gray-900 bg-white border border-gray-200 rounded-lg transition-all duration-300 ease-out hover:scale-[1.05] active:scale-[0.97] hover:shadow-md">
        Login
      </button>
      <button className="px-5 py-2 font-medium text-white bg-[#5B52F5] hover:opacity-90 rounded-lg transition-all duration-300 ease-out hover:scale-[1.05] active:scale-[0.97] hover:shadow-lg">
        Get Started
      </button>
    </div>
  );
};
