import { useState } from "react";
import { 
  Tv, Clock, FileText, GraduationCap, Users, CalendarDays, 
  CheckCircle2, ShieldCheck, ChevronRight 
} from "lucide-react";
import { INCLUSION_ITEMS } from "../types";
import dangVuHiepAvatar from "../assets/images/dang_vu_hiep_avatar_1781522096340.jpg";

export default function PivotIncludes() {
  // Interactive mini agenda checklist inside "12 Module Đào Tạo Thực Chiến"
  const [tasks, setTasks] = useState([
    { text: "Xây kênh Tiktok Bất động sản", done: true },
    { text: "Định vị thương hiệu cá nhân", done: true },
    { text: "Chương trình chủ lực One Sale Company", done: false },
    { text: "Đồng hành và triển khai chiến dịch bán hàng thực tế", done: false }
  ]);

  const toggleTask = (idx: number) => {
    const updated = [...tasks];
    updated[idx].done = !updated[idx].done;
    setTasks(updated);
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case "tv": return <Tv size={24} className="text-[#8b0e13]" />;
      case "clock": return <Clock size={24} className="text-[#8b0e13]" />;
      case "file-text": return <FileText size={24} className="text-[#8b0e13]" />;
      case "graduation-cap": return <GraduationCap size={24} className="text-[#8b0e13]" />;
      case "users": return <Users size={24} className="text-[#8b0e13]" />;
      case "calendar": return <CalendarDays size={24} className="text-[#8b0e13]" />;
      default: return <Tv size={24} className="text-[#8b0e13]" />;
    }
  };

  return (
    <section className="py-24 bg-ifactor-cream font-sans relative overflow-hidden" id="includes-section">
      


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Core Card Box Wrapper - Elegant Bright Layout */}
        <div className="bg-white rounded-[48px] p-6 sm:p-14 lg:p-16 text-center text-slate-900 shadow-xl relative overflow-hidden border border-red-100/10">
          
          {/* Subtle background circles */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-650/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase text-red-750 dark:text-red-400 tracking-widest font-mono">ĐỒNG HÀNH BỀN VỮNG × KHÔNG BỎ RƠI HỌC VIÊN</span>
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight text-slate-950 dark:text-white">
              Đặc quyền & Cam kết chương trình gồm:
            </h2>
          </div>

          {/* Grid Checklist Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {INCLUSION_ITEMS.map((item) => {
              return (
                <div 
                  key={item.id}
                  className="bg-[#fbf8f3] hover:bg-[#f5ebd6] rounded-[32px] p-7 md:p-8 border border-[#d4b06a]/30 hover:border-[#8b0e13]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(139,14,19,0.06)] flex flex-col justify-between shadow-xs group"
                >
                  <div className="space-y-4">
                    
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-2xl bg-[#8b0e13]/8 flex items-center justify-center transition-colors group-hover:bg-[#8b0e13]/12">
                      {renderIcon(item.iconName)}
                    </div>

                    {/* Headline */}
                    <h3 className="font-sans font-extrabold text-lg sm:text-xl tracking-tight leading-snug text-[#8b0e13]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-[14px] sm:text-[15px] text-slate-700 leading-relaxed font-normal [&_strong]:font-bold [&_strong]:text-[#8b0e13]"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />

                  </div>

                  {/* CUSTOM SPECIFIC INTEGRATIONS FOR PREMIUM POLISH */}
                  {item.id === "inc1" && (
                    <div className="mt-5 bg-white/95 p-4 rounded-2xl border border-[#d4b06a]/30 shadow-xs space-y-2">
                      <div className="text-[10px] uppercase font-black text-[#8b0e13] tracking-wider font-mono">Tiến độ chương trình:</div>
                      <div className="space-y-2">
                        {tasks.map((t, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => toggleTask(idx)}
                            className="flex items-start gap-2.5 cursor-pointer select-none"
                          >
                            <span className="mt-0.5 shrink-0">
                              {t.done ? (
                                <CheckCircle2 size={14} className="text-emerald-700 fill-emerald-600/10" />
                              ) : (
                                <span className="w-4 h-4 rounded border border-amber-300 block bg-white" />
                              )}
                            </span>
                            <span className={`text-[11px] leading-tight ${t.done ? 'line-through text-slate-400 font-normal' : 'text-slate-800 font-bold'}`}>{t.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.id === "inc2" && (
                    <div className="mt-5 bg-white/95 p-4 rounded-2xl border border-[#d4b06a]/30 shadow-xs flex items-center gap-3">
                      <img 
                        src={dangVuHiepAvatar} 
                        alt="Mr Dang Vu Hiep" 
                        className="w-11 h-11 rounded-full object-cover border-2 border-[#d4b06a]/30 bg-white" 
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="text-[9px] text-[#8b0e13] font-extrabold uppercase tracking-wider leading-none">AUDIT KÊNH ĐỊNH KỲ</div>
                        <div className="text-xs font-black mt-1 text-slate-900 font-sans">Mr. Đặng Vũ Hiệp • Tối thứ 5</div>
                        <div className="text-[10px] text-slate-600 font-semibold leading-none mt-1">Sửa trực tiếp kịch bản & góc review</div>
                      </div>
                    </div>
                  )}

                  {item.id === "inc5" && (
                    <div className="mt-5 bg-white/95 p-4 rounded-2xl border border-[#d4b06a]/30 shadow-xs space-y-2.5">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-slate-700 font-extrabold tracking-wide">LIÊN KẾT CỘNG ĐỒNG KOC</span>
                        <span className="text-[#8b0e13] font-black">15,000+ Sales</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden">
                        <span className="bg-gradient-to-r from-[#8b0e13] to-[#d4b06a] h-full block rounded-full animate-pulse" style={{ width: '85%' }} />
                      </div>
                      <div className="flex justify-around text-[10px] text-slate-700 font-bold">
                        <span>Hà Nội: 6,500</span>
                        <span>TP. HCM: 8,500</span>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 pt-8 border-t border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-left text-xs sm:text-sm text-slate-600 font-medium">
              <span className="text-red-600 shrink-0"><ShieldCheck size={20} /></span>
              <span>Học đi đôi với làm. Toàn bộ template, prompt AI và file CRM thuộc quyền sở hữu trọn đời của bạn.</span>
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById("pricing-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-ifactor-yellow text-slate-950 hover:bg-amber-400 font-black px-10 py-5 rounded-full text-sm transition transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/10 flex items-center gap-2 shrink-0 border-b-2 border-amber-600 cursor-pointer uppercase tracking-wider"
            >
              <span>NHẬN TƯ VẤN LỘ TRÌNH</span>
              <ChevronRight size={18} className="text-slate-950 stroke-[3px]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
