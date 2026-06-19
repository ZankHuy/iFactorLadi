import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq1"); // Open first card by default matching page 4

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-ifactor-cream font-sans relative overflow-hidden" id="faq-section">
      


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Section Title */}
          <div className="lg:col-span-4 text-left space-y-4 lg:sticky lg:top-28">
            <span className="text-xs font-black uppercase tracking-widest text-red-755 dark:text-red-400 font-mono">BẠN VẪN CÒN BĂN KHOĂN?</span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-slate-950 dark:text-white leading-tight tracking-tight uppercase">
              Giải đáp<br />thắc mắc<br />thường gặp
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Hãy tham khảo các câu trả lời chi tiết về học liệu, thời gian hỗ trợ, cách học quay dựng và bám sát chiến dịch thực tế từ iFactor.
            </p>
            <div className="pt-4 flex items-center gap-2 text-xs text-red-600 font-bold">
              <span>Bạn cần tư vấn riêng 1-on-1?</span>
              <button 
                onClick={() => {
                  const el = document.getElementById("pricing-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="underline hover:text-red-700 transition"
              >
                Nhận tư vấn ngay
              </button>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div id="faq-accordion-group" className="lg:col-span-8 space-y-3">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-red-600 shadow-sm bg-white" 
                      : "border-slate-100 hover:border-slate-200 shadow-xs"
                  }`}
                >
                  {/* Accordion header trigger button */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-sm md:text-base text-slate-900 hover:text-red-650 transition-all focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold tracking-tight text-slate-950 text-xs sm:text-sm leading-snug">{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? "bg-red-600 text-white rotate-180" : "bg-slate-50 text-slate-400"
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  {/* Accordion collapsable body */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-50" : "max-h-0"
                  }`}>
                    <div className="p-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-light bg-slate-50/20">
                      {faq.answer}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}
