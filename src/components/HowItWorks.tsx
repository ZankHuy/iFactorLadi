import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Headphones, Pen, ClipboardCheck, Zap, Repeat, Star, Tv, Image, UserCheck } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../types";
import { motion } from "motion/react";

export default function HowItWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevStep = () => {
    setCurrentIndex((prev) => (prev === 0 ? HOW_IT_WORKS_STEPS.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setCurrentIndex((prev) => (prev === HOW_IT_WORKS_STEPS.length - 1 ? 0 : prev + 1));
  };

  const renderIcon = (name: string, isWhite: boolean) => {
    const className = `w-7 h-7 ${isWhite ? "text-white" : "text-red-650"}`;
    switch (name) {
      case "headphones":
        return <Headphones className={className} />;
      case "pen":
        return <Pen className={className} />;
      case "clipboard":
        return <ClipboardCheck className={className} />;
      case "tv":
        return <Tv className={className} />;
      case "image":
        return <Image className={className} />;
      case "zap":
        return <Zap className={className} />;
      case "repeat":
        return <Repeat className={className} />;
      case "user-check":
        return <UserCheck className={className} />;
      default:
        return <Star className={className} />;
    }
  };

  // Determine standard widths based on response sizing
  const cardWidth = viewportWidth < 480 ? 290 : viewportWidth < 640 ? 340 : viewportWidth < 768 ? 385 : 440;
  const gap = 24; // gap-6
  
  // Mathematically perfect centering translation
  const positionOffset = currentIndex * (cardWidth + gap) + cardWidth / 2;
  const translateX = (viewportWidth / 2) - positionOffset;

  return (
    <section className="py-20 bg-ifactor-cream font-sans relative overflow-hidden" id="how-it-works-section">
      


      <div className="pt-10 text-center">
        
        {/* Title Inside Responsive Box */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-950 dark:text-white tracking-tight">
            Lộ trình triển khai <span className="text-red-700 dark:text-red-400">8 Giai đoạn</span> bứt phá
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base mt-2 tracking-wide max-w-xl mx-auto">
            Quy trình từng bước dẫn dắt bạn xây dựng cỗ máy bán hàng cá nhân vững chắc và tự vận hành Data.
          </p>
        </div>

        {/* Carousel Deck Outside with overflow-hidden & overflow-visible contents to spill horizontally */}
        <div className="mt-12 relative w-full overflow-hidden py-6">
          <div className="w-full overflow-visible relative flex justify-start items-stretch min-h-[350px]">
            <motion.div
              className="flex gap-6 items-stretch overflow-visible pl-0"
              animate={{ x: translateX }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
            >
              {HOW_IT_WORKS_STEPS.map((step, idx) => {
                const isActive = idx === currentIndex;

                return (
                  <div
                    key={step.step}
                    onClick={() => setCurrentIndex(idx)}
                    style={{ width: cardWidth }}
                    className={`rounded-[32px] p-6 sm:p-8 text-left transition-all duration-300 relative flex flex-col justify-between border shrink-0 cursor-pointer ${
                      isActive 
                        ? "bg-red-650 text-white border-red-700 shadow-xl scale-100 opacity-100 z-10" 
                        : "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-md scale-[0.93] opacity-80 hover:opacity-100 hover:scale-[0.96]"
                    }`}
                  >
                    <div>
                      {/* Header: Icon & Step Badge */}
                      <div className="flex items-center justify-between mb-8">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          isActive ? "bg-white/10 border border-white/20" : "bg-red-50 dark:bg-slate-800"
                        }`}>
                          {renderIcon(step.iconName, isActive)}
                        </div>
                        
                        {/* Step Badge */}
                        <span className={`text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full ${
                          isActive ? "bg-red-600 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-750 dark:text-slate-300"
                        }`}>
                          {step.badge}
                        </span>
                      </div>

                      {/* Headline */}
                      <h3 className={`font-sans font-extrabold text-xl md:text-2xl tracking-tight mb-4 ${
                        isActive ? "text-white" : "text-slate-950 dark:text-white"
                      }`}>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm leading-relaxed font-light ${
                        isActive ? "text-slate-150" : "text-slate-700 dark:text-slate-300"
                      }`}>
                        {step.description}
                      </p>
                    </div>

                    {/* Footing numbers */}
                    <div className="mt-8 pt-4 border-t border-dashed border-slate-500/15 flex items-center justify-between text-xs font-mono">
                      <span className={isActive ? "text-red-400 font-extrabold" : "text-red-600 font-extrabold"}>ONE SALE SYSTEM</span>
                      <span className={isActive ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}>{`0${step.step} / 0${HOW_IT_WORKS_STEPS.length}`}</span>
                    </div>

                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Carousel Arrows and Page indicator Dots */}
          <div className="mt-10 flex items-center justify-center gap-6">
            
            {/* Left Button */}
            <button 
              onClick={prevStep}
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center shadow-xs text-slate-700 dark:text-slate-200 hover:bg-red-50 dark:hover:bg-slate-700 hover:text-red-600 hover:shadow-md transition active:scale-95 cursor-pointer"
              aria-label="Previous step"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {HOW_IT_WORKS_STEPS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex 
                      ? "w-8 bg-red-600" 
                      : "w-2 bg-slate-200 dark:bg-slate-700 lg:hover:bg-slate-300"
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>

            {/* Right Button */}
            <button 
              onClick={nextStep}
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center shadow-xs text-slate-700 dark:text-slate-200 hover:bg-red-50 dark:hover:bg-slate-700 hover:text-red-600 hover:shadow-md transition active:scale-95 cursor-pointer"
              aria-label="Next step"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
