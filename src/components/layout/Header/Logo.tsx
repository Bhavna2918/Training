import { MessageSquare } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer group transition-transform duration-300 ease-out hover:scale-[1.03]">
      <div className="text-[#5B52F5] flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-rotate-12">
        <MessageSquare size={26} className="fill-current" />
      </div>
      <span className="font-bold text-2xl tracking-tight text-[#111827]">TryLity</span>
    </div>
  );
};
