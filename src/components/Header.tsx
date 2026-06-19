import { useState, useEffect } from "react";
import { Menu, X, Sparkles, PhoneCall } from "lucide-react";
import logoImg from "../assets/images/ifactor_logo_1781235098969.jpg";

export default function Header() {
  const [showPromo, setShowPromo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  const navItems = [
    { name: "Lộ trình học", target: "how-it-works-section" },
    { name: "Nội dung chi tiết", target: "what-you-learn-section" },
    { name: "Giảng viên", target: "coaches-section" },
    { name: "Học phí & Ưu đãi", target: "pricing-section" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-ifactor-cream/95 backdrop-blur-md border-b border-red-50 shadow-xs font-sans">
      {/* Promotional Bar */}
      {showPromo && (
        <div id="promo-notice" className="relative w-full bg-red-600 py-2.5 px-4 text-center text-xs md:text-sm text-white font-medium flex items-center justify-center gap-3 transition-all duration-300">
          <Sparkles size={16} className="animate-pulse" />
          <span>Bắt đầu khoá học ngay với giá ưu đãi chỉ từ 1.490.000</span>
          <button 
            onClick={() => {
              const el = document.getElementById("pricing-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-red-600 px-3 py-1 rounded-full text-xs font-bold hover:bg-red-50 transition"
          >
            Nhận Ngay
          </button>
          <button 
            onClick={() => setShowPromo(false)} 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            aria-label="Close promotion"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo iFactor - ONE SALE COMPANY */}
          <div id="app-logo" className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 shrink-0 select-none overflow-hidden relative flex items-center justify-center rounded-lg drop-shadow-xs">
              <img 
                src={logoImg} 
                alt="iFactor Logo" 
                className="w-full h-full object-cover scale-[1.50]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg text-slate-950 dark:text-white tracking-widest leading-none">
                IFACTOR
              </span>
              <span className="text-[9px] text-red-650 dark:text-red-400 font-extrabold tracking-[0.12em] uppercase font-sans mt-0.5">
                ONE SALE COMPANY
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button 
                key={item.target}
                onClick={() => {
                  const el = document.getElementById(item.target);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-slate-600 hover:text-red-600 font-semibold text-[14px] transition-colors py-2 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-5">
            <button 
              onClick={() => {
                const el = document.getElementById("faq-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1 text-slate-600 hover:text-red-600 font-semibold text-[14px] transition cursor-pointer"
            >
              <span>Hỏi đáp (FAQ)</span>
            </button>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={() => {
                const el = document.getElementById("pricing-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              id="header-cta"
              className="bg-ifactor-yellow text-slate-950 hover:bg-amber-400 font-black px-5 py-2.5 rounded-full text-xs tracking-wider transition shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer border-b-2 border-amber-600"
            >
              <PhoneCall size={12} className="text-slate-950" />
              <span>ĐĂNG KÝ TƯ VẤN</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-800 dark:text-slate-200 p-2 hover:text-red-600 transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden w-full bg-ifactor-cream border-t border-slate-100 px-4 py-5 shadow-inner transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button 
                key={item.target}
                onClick={() => {
                  setMenuOpen(false);
                  const el = document.getElementById(item.target);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left text-slate-800 font-bold text-sm py-2 px-1 border-b border-slate-100 hover:text-red-600 transition cursor-pointer"
              >
                {item.name}
              </button>
            ))}

            <div className="flex flex-col gap-3 mt-4">
              <button 
                onClick={() => {
                  setMenuOpen(false);
                  const el = document.getElementById("faq-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-slate-100 text-slate-800 font-bold p-3 rounded-full text-xs text-center hover:bg-slate-200 transition cursor-pointer"
              >
                HỎI ĐÁP (FAQ)
              </button>
              <button 
                onClick={() => {
                  setMenuOpen(false);
                  const el = document.getElementById("pricing-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-ifactor-yellow text-slate-950 font-black p-3.5 rounded-full text-xs text-center hover:bg-amber-400 transition cursor-pointer border-b-2 border-amber-600 uppercase tracking-widest"
              >
                ĐĂNG KÝ TƯ VẤN NGAY
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
