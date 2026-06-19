import { PhoneCall } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Zalo Group Link */}
      <a
        href="https://zalo.me/g/nsec4atllcs57ytt589w"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#0068ff] hover:bg-[#0056d6] text-white py-3 px-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 relative"
      >
        {/* Radar Ping Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#0068ff] animate-ping opacity-20 pointer-events-none"></span>
        
        <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out font-sans font-extrabold text-xs uppercase tracking-wider whitespace-nowrap">
          Nhóm Zalo hỗ trợ
        </span>
        
        <div className="w-7 h-7 bg-white text-[#0068ff] rounded-full text-xs font-black flex items-center justify-center shrink-0 shadow-sm">
          Z
        </div>
      </a>

      {/* Hotline Tel Link */}
      <a
        href="tel:0985659855"
        className="group flex items-center gap-2.5 bg-red-650 hover:bg-red-700 text-white py-3 px-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 relative"
      >
        {/* Radar Ping Effect */}
        <span className="absolute -inset-1 rounded-full bg-red-650 animate-ping opacity-25 pointer-events-none"></span>

        <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out font-sans font-extrabold text-xs uppercase tracking-wider whitespace-nowrap">
          Hotline: 0985.659.855
        </span>

        <div className="w-7 h-7 bg-white text-red-650 rounded-full flex items-center justify-center shrink-0 shadow-sm">
          <PhoneCall size={14} className="animate-bounce" />
        </div>
      </a>
    </div>
  );
}
