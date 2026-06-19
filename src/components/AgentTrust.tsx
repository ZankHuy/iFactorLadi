import { useState } from "react";
import { AGENT_TESTIMONIALS } from "../types";
import { Quote, Heart, Star } from "lucide-react";

export default function AgentTrust() {
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    t1: 242,
    t2: 189,
    t3: 215
  });

  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});

  const handleLike = (id: string) => {
    if (liked[id]) {
      setLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setLiked(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setLiked(prev => ({ ...prev, [id]: true }));
    }
  };

  return (
    <section className="py-24 bg-ifactor-cream font-sans relative overflow-hidden">
      


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        
        {/* Title */}
        <h2 className="font-display font-black text-3xl md:text-5xl text-slate-950 dark:text-white tracking-tight leading-tight">
          Sự chuyển đổi thực tế từ học viên
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 font-light text-sm sm:text-base max-w-xl mx-auto">
          Lắng nghe chia sẻ trực tiếp của các anh chị sale đã bứt phá từ thế bị động sang vận hành thành công cỗ máy doanh thu riêng.
        </p>

        {/* Tall Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          {AGENT_TESTIMONIALS.map((testimonial) => {
            return (
              <div 
                key={testimonial.id}
                className="group h-[620px] rounded-[32px] overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800 bg-slate-950 flex flex-col"
              >
                {/* Dedicated Top Portrait Photo Container */}
                <div className="relative h-[320px] w-full overflow-hidden bg-slate-900">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name} 
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[1.02] contrast-[1.02] group-hover:scale-105 transition duration-500"
                    style={{ objectPosition: testimonial.objectPosition || "50% 15%" }}
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle fade shadow at the bottom of the photo to blend smoothly */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10" />

                  {/* Floating Level Badge in top left */}
                  <div className="absolute top-6 left-6 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white z-20">
                    <span className={`w-2 h-2 rounded-full ${testimonial.tier === 'KOC CHUYÊN NGHIỆP' ? 'bg-red-600' : 'bg-orange-400'}`}></span>
                    <span className="text-[10px] font-black tracking-widest uppercase">{testimonial.tier}</span>
                  </div>
                </div>

                {/* Dedicated Bottom Content Container containing Quote and Profile Info */}
                <div className="flex-1 p-8 flex flex-col justify-between bg-slate-950 relative z-20 border-t border-white/5">
                  
                  {/* Real-time interactive actions */}
                  <div className="flex items-center justify-between text-white/50 text-xs mb-2">
                    <button 
                      onClick={() => handleLike(testimonial.id)}
                      className="flex items-center gap-1.5 hover:text-red-400 transition"
                    >
                      <Heart size={14} className={liked[testimonial.id] ? "fill-red-500 text-red-500" : ""} />
                      <span className="font-bold text-white">{likes[testimonial.id]}</span>
                    </button>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={10} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote text block */}
                  <div className="relative py-2 my-auto">
                    <Quote className="absolute -top-3 -left-4 text-red-650/10 w-8 h-8 pointer-events-none" />
                    <p className="text-xs sm:text-sm font-light leading-relaxed text-slate-200 italic relative z-10">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Profile Name & Brokerage details */}
                  <div className="pt-4 border-t border-white/10 space-y-0.5 mt-2">
                    <h4 className="font-sans font-extrabold text-base text-white leading-none">
                      {testimonial.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {testimonial.brokerage}
                    </span>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
