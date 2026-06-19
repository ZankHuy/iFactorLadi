import { 
  Facebook, Copyright, ArrowUpToLine 
} from "lucide-react";
import logoImg from "../assets/images/ifactor_logo_1781235098969.jpg";

export default function Footer() {
  
  const socialIcons = [
    { 
      icon: <Facebook size={18} />, 
      href: "https://www.facebook.com/ifactormangluoidaotaobatdongsan", 
      label: "Facebook" 
    },
    { 
      icon: (
        <span className="font-sans font-bold text-xs leading-none">T</span>
      ), 
      href: "https://www.tiktok.com/@vuanuoikenhtiktok?is_from_webapp=1&sender_device=pc", 
      label: "TikTok" 
    },
    { 
      icon: (
        <span className="font-sans font-extrabold text-[10px] leading-none tracking-tighter text-[#0068ff] group-hover:text-white">Zalo</span>
      ), 
      href: "https://zalo.me/g/nsec4atllcs57ytt589w", 
      label: "Zalo" 
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans mt-auto">
      
      {/* Upper Social & Utilities section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Trademark text */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 shrink-0 select-none overflow-hidden relative flex items-center justify-center rounded-lg drop-shadow">
              <img 
                src={logoImg} 
                alt="iFactor Logo" 
                className="w-full h-full object-cover scale-[1.50]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display font-black text-white text-xl tracking-wider block">
                ONE SALE COMPANY<span className="text-yellow-500 text-[10px] font-bold ml-0.5">™</span>
              </span>
              <p className="text-[10px] text-yellow-500/80 font-bold uppercase tracking-[0.14em] mt-0.5 leading-relaxed font-sans">
                IFACTOR • MẠNG LƯỚI ĐÀO TẠO • KẾT NỐI TRI THỨC – KIẾN TẠO GIÁ TRỊ – CÙNG PHÁT TRIỂN
              </p>
              <div className="mt-2 text-xs text-slate-400 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span>Hotline: <a href="tel:0985659855" className="text-yellow-500 hover:text-white font-extrabold transition">0985.659.855</a></span>
                <span className="hidden md:inline text-slate-800">|</span>
                <span>Zalo: <a href="https://zalo.me/g/nsec4atllcs57ytt589w" target="_blank" rel="noreferrer" className="text-[#0068ff] hover:text-white font-extrabold transition">Nhóm Zalo hỗ trợ</a></span>
              </div>
            </div>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-4">
            {socialIcons.map((soc, idx) => (
              <a 
                key={idx} 
                href={soc.href} 
                target="_blank" 
                rel="noreferrer"
                className="group w-9 h-9 rounded-full bg-slate-900 border border-slate-805 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0068ff] hover:border-[#0068ff] hover:scale-105 transition-all duration-300"
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Up arrow */}
          <button 
            onClick={scrollToTop}
            className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-red-500 transition duration-200 focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span>LÊN ĐẦU TRANG</span>
            <ArrowUpToLine size={14} className="stroke-[2.5px]" />
          </button>

        </div>
      </div>

      {/* Main sitemap Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          
          {/* Column 1: Danh mục điều hướng (Functional Links in a clean horizontal flex list) */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest font-mono">
              Điều Hướng Trang
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
              <button 
                onClick={() => document.getElementById("how-it-works-section")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-400 hover:text-red-500 transition-colors font-semibold cursor-pointer"
              >
                Lộ trình 8 Giai đoạn
              </button>
              <button 
                onClick={() => document.getElementById("what-you-learn-section")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-400 hover:text-red-500 transition-colors font-semibold cursor-pointer"
              >
                Nội dung 12 Module
              </button>
              <button 
                onClick={() => document.getElementById("coaches-section")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-400 hover:text-red-500 transition-colors font-semibold cursor-pointer"
              >
                Đội ngũ giảng viên
              </button>
              <button 
                onClick={() => document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-400 hover:text-red-500 transition-colors font-semibold cursor-pointer"
              >
                Học phí & Ưu đãi
              </button>
              <button 
                onClick={() => document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-400 hover:text-red-500 transition-colors font-semibold cursor-pointer"
              >
                Hỏi đáp (FAQ)
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Low Legal link row */}
      <div className="bg-slate-950 py-8 text-center border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-center gap-2 text-[10px] text-slate-650 font-mono">
            <Copyright size={12} />
            <span>2026 iFactor Academy × IFTV Network. Tất cả quyền được bảo lưu. Thiết kế đào tạo thực chiến Bất Động Sản.</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
