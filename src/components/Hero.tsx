import { useState } from "react";
import { Award, Zap, Users, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import kpiHeroPhoto from "../assets/images/piccc 2.png";

export default function Hero() {
  const handleCtaClick = () => {
    const el = document.getElementById("pricing-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-ifactor-cream pt-12 pb-20 font-sans">
      
      {/* Background graphic accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Logo / Brand Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-xs border border-red-100">
              <span className="font-sans font-black text-xs text-red-600 tracking-wide uppercase flex items-center gap-1">
                <Sparkles size={12} />
                Độc Quyền Tại Việt Nam
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">iFactor Academy</span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-slate-950 dark:text-white leading-[1.1] tracking-tight">
              Biến mỗi sale BĐS thành một <br />
              <span className="text-red-600 dark:text-red-400">
                "Công ty bán hàng cá nhân".
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              <strong className="font-bold text-slate-950">ONE SALE COMPANY</strong> là hệ thống đào tạo thực chiến dành cho sale bất động sản trong thời đại chuyển đổi số mạnh bằng <strong className="font-semibold text-slate-900">thương hiệu cá nhân, video ngắn, AI, và dữ liệu khách hàng riêng</strong>. Giúp bạn trở thành một <strong className="font-bold text-red-600 dark:text-red-400">SOLO CEO bán hàng bền vững</strong> và đạt được vị trí cạnh tranh top đầu ngành môi giới bất động sản.
            </p>

            {/* CTA Widget */}
            <div className="pt-2 flex flex-col items-center lg:items-start gap-4">
              <button 
                id="hero-cta"
                onClick={handleCtaClick}
                className="group relative inline-flex items-center justify-center bg-ifactor-yellow hover:bg-amber-400 active:scale-95 transition-all text-slate-950 font-black px-9 py-4.5 rounded-full text-sm sm:text-base tracking-wider uppercase cursor-pointer shadow-lg shadow-amber-500/20 border-b-2 border-amber-600 flex items-center gap-2"
              >
                <span>XÂY DỰNG HỆ THỐNG NGAY</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>

              <div className="text-xs text-slate-500 font-medium tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-red-600 font-extrabold">Chỉ từ 1.490.000/Khóa</span>
                <span className="text-slate-300">•</span>
                <span>Học ngắn - Làm ngay - Có output thực tế</span>
                <span className="text-slate-300">•</span>
                <span>Đồng hành tận tâm</span>
              </div>
            </div>
            
          </div>

          {/* Right Hero Column - Collage Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Rounded Box */}
            <div className="relative w-full max-w-[480px] aspect-square bg-slate-100 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              
              {/* Background illustrative agent photo */}
              <img 
                src={kpiHeroPhoto} 
                alt="Đào tạo One Sale Company" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Decorative overlay screen filter */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

            </div>

             {/* Small floating badge */}
             <div className="absolute -bottom-4 -right-2 bg-white/90 shadow-md p-3 rounded-full flex items-center gap-1.5 border border-slate-50">
               <span className="text-white bg-red-600 p-1.5 rounded-full"><Award size={18} /></span>
               <div className="text-left font-sans pr-2">
                 <div className="text-[9px] text-slate-400 font-bold uppercase leading-none">MẠNG LƯỚI</div>
                 <div className="text-xs font-black text-slate-800 leading-none">IFTV 100M+ VIEWS</div>
               </div>
             </div>
          </div>

        </div>

        {/* Lower Ribbon */}
        <div className="mt-20 py-6 px-4 bg-white rounded-3xl shadow-xs border border-red-50">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x divide-slate-100">
            
            <div className="flex flex-col items-center justify-center px-2">
              <span className="text-red-600 bg-red-50 p-2 rounded-full mb-2"><Award size={18} /></span>
              <span className="text-xs text-slate-900 font-extrabold leading-tight">12 Module Thực Chiến</span>
            </div>

            <div className="flex flex-col items-center justify-center border-l border-slate-100 px-2">
              <span className="text-red-600 bg-red-50 p-2 rounded-full mb-2"><Zap size={18} /></span>
              <span className="text-xs text-slate-900 font-extrabold leading-tight">Bộ Tài Sản Độc Quyền</span>
            </div>

            <div className="flex flex-col items-center justify-center border-l border-slate-100 px-2">
              <span className="text-red-600 bg-red-50 p-2 rounded-full mb-2"><Users size={18} /></span>
              <span className="text-xs text-slate-900 font-extrabold leading-tight">10 Giảng Viên Tuyến Đầu</span>
            </div>

            <div className="flex flex-col items-center justify-center border-l border-slate-100 px-2">
              <span className="text-red-600 bg-red-50 p-2 rounded-full mb-2"><Compass size={18} /></span>
              <span className="text-xs text-slate-900 font-extrabold leading-tight">Mô Hình Đào Tạo Solo CEO</span>
            </div>

            <div className="flex flex-col items-center justify-center border-l border-slate-100 px-2 col-span-2 md:col-span-1">
              <span className="text-red-600 bg-red-50 p-2 rounded-full mb-2"><ShieldCheck size={18} /></span>
              <span className="text-xs text-slate-900 font-extrabold leading-tight text-center">Tài Liệu và Coaching Thực Tế</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
