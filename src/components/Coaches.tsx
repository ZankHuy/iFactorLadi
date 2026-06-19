import { useState } from "react";
import { ChevronLeft, ChevronRight, Pin, Calendar, Award, Compass, Heart } from "lucide-react";
import { COACHES_LIST } from "../types";

export default function Coaches() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCoach = () => {
    setCurrentIndex((prev) => (prev === 0 ? COACHES_LIST.length - 1 : prev - 1));
  };

  const nextCoach = () => {
    setCurrentIndex((prev) => (prev === COACHES_LIST.length - 1 ? 0 : prev + 1));
  };

  const coach = COACHES_LIST[currentIndex];

  return (
    <section className="py-24 bg-ifactor-cream font-sans relative" id="coaches-section">
      


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-950 dark:text-white tracking-tight leading-tight">
            Ban giảng viên & Chuyên gia đồng hành
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 font-light text-sm sm:text-base">
            Học hỏi trực tiếp từ những chuyên gia, KOC hàng đầu trong hệ sinh thái bất động sản, video ngắn, AI và digital marketing.
          </p>
        </div>

        {/* Coach Profile Card Panel */}
        <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Photo Area */}
            <div className="lg:col-span-5 bg-slate-50 relative min-h-[400px] flex items-center justify-center overflow-hidden">
              
              {/* Highlight badge */}
              <div className="absolute top-6 left-6 z-10 flex gap-1.5 bg-red-600 px-3.5 py-1.5 rounded-full text-[10px] font-bold text-white items-center shadow-md">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
                <span>CHUYÊN GIA DẪN DẮT</span>
              </div>

              <img 
                src={coach.imageUrl} 
                alt={coach.name} 
                className="w-full h-full object-cover filter contrast-[1.02] hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

            </div>

            {/* Right Information Area */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 text-left flex flex-col justify-between space-y-6">
              
              <div>
                
                {/* Name & Basic Tagline */}
                <div className="space-y-1">
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-slate-950 tracking-tight leading-none">
                    {coach.name}
                  </h3>
                  <p className="text-xs text-red-600 font-bold tracking-widest uppercase mt-2">{coach.role}</p>
                </div>

                {/* Info parameters list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-xs sm:text-sm text-slate-600 font-medium">
                  
                  <div className="flex items-center gap-2">
                    <Pin size={16} className="text-red-600 shrink-0" />
                    <span>Vai trò: <strong className="text-slate-900 font-extrabold">Ban Đào Tạo</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={15} className="text-red-600 shrink-0" />
                    <span>{coach.experienceLabel || "Kinh nghiệm"}: <strong className="text-slate-900 font-extrabold">{coach.experienceYear}</strong></span>
                  </div>

                </div>

                {/* Bullet Badges */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {coach.badges.map((badge, idx) => (
                    <span 
                      key={idx} 
                      className="px-3.5 py-1 text-[11px] font-bold leading-none bg-red-50 text-red-700 rounded-full border border-red-100"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

              </div>

              {/* Central Statistics counters */}
              <div className="grid grid-cols-3 gap-3 py-6 border-y border-dashed border-slate-100 text-center">
                
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-red-600 tracking-tight">
                    {coach.statsValue1}
                  </div>
                  <div className="text-[9px] uppercase font-bold text-slate-450 tracking-wider leading-none">
                    {coach.statsLabel1}
                  </div>
                </div>

                <div className="space-y-1 border-x border-slate-100">
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {coach.statsValue2}
                  </div>
                  <div className="text-[9px] uppercase font-bold text-slate-450 tracking-wider leading-none">
                    {coach.statsLabel2}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-slate-700 tracking-tight">
                    {coach.statsValue3}
                  </div>
                  <div className="text-[9px] uppercase font-bold text-slate-450 tracking-wider leading-none">
                    {coach.statsLabel3}
                  </div>
                </div>

              </div>

              {/* Biography Text block */}
              <div>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  {coach.bio}
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Carousel slide controls below */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button 
            onClick={prevCoach}
            className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-800 hover:text-red-600 hover:shadow-md transition active:scale-95"
            aria-label="Previous coach profile"
          >
            <ChevronLeft size={22} />
          </button>
          
          <span className="text-xs font-mono font-bold text-slate-400">
            {`${String(currentIndex + 1).padStart(2, '0')} / ${String(COACHES_LIST.length).padStart(2, '0')}`}
          </span>

          <button 
            onClick={nextCoach}
            className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-800 hover:text-red-600 hover:shadow-md transition active:scale-95"
            aria-label="Next coach profile"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
}
