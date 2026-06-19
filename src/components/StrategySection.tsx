import { useState } from "react";
import { Sparkles, ArrowRight, UserCheck, MessageSquare, Briefcase, FileSignature, Layers, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";
import logoImg from "../assets/images/ifactor_logo_1781235098969.jpg";

export default function StrategySection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const problems = [
    {
      id: "p1",
      title: "1. Phụ thuộc vào nguồn lead từ công ty",
      icon: <AlertTriangle size={14} className="text-red-500 animate-pulse" />,
      tag: "RỦI RO CAO",
      desc: "Nếu công ty dừng chạy quảng cáo, dừng rót data thì công việc bán hàng của bạn ngay lập tức bị đóng băng.",
      solution: "ONE SALE COMPANY giúp bạn tự xây dựng phễu thu thập Data cá nhân đều đặn mỗi ngày."
    },
    {
      id: "p2",
      title: "2. Không có kênh cá nhân rõ ràng",
      icon: <Layers size={14} className="text-orange-500" />,
      tag: "MẤT ĐỊNH VỊ",
      desc: "Chỉ đăng bài sao chép rải rác, thiếu nhất quán và chuyên nghiệp. Khách hàng lướt qua không thể nhớ bạn là ai và chuyên môn của bạn là gì.",
      solution: "Thiết lập định vị độc bản: KOC thực địa, chuyên gia phân tích tài chính hay phân khúc dự án chuyên sâu bài bản."
    },
    {
      id: "p3",
      title: "3. Không biết biến tài liệu dự án thành nội dung bán hàng",
      icon: <FileSignature size={14} className="text-yellow-500" />,
      tag: "THIẾU SÁNG TẠO",
      desc: "Nhận bộ tài liệu dự án dày đặc thông số khô khan nhưng loay hoay không biết dịch chuyển thành kịch bản video ngắn cuốn hút, giữ chân người xem.",
      solution: "Ứng dụng công thức dịch tài liệu kỹ thuật thành các góc nhìn dễ hiểu, các câu chuyện chạm đúng nỗi đau đầu tư."
    },
    {
      id: "p4",
      title: "4. Phụ thuộc vào designer, editor và đội media",
      icon: <Briefcase size={14} className="text-teal-500" />,
      tag: "TỐC ĐỘ CHẬM",
      desc: "Muốn có poster phải chờ thiết kế. Muốn có video phải chờ quay dựng. Muốn có nội dung phải chờ marketing. Tốc độ bán hàng bị giới hạn bởi tốc độ của người khác.",
      solution: "Master quy trình quay phim bằng điện thoại kết hợp dựng video chuyên nghiệp trên các ứng dụng và phần mềm trong thời gian ngắn."
    },
    {
      id: "p5",
      title: "5. Không biết sản xuất video đều đặn",
      icon: <MessageSquare size={14} className="text-blue-500" />,
      tag: "MẤT TƯƠNG TÁC",
      desc: "Sale hiểu sản phẩm, nhưng đứng trước camera lại lúng túng. Có ý tưởng nhưng không biết viết hook. Có video nhưng dựng lâu. Có kênh nhưng không duy trì được lịch đăng đều.",
      solution: "Sở hữu phương pháp lên kế hoạch nội dung tuần, tháng và bộ công cụ AI gợi ý ý tưởng hàng loạt để làm video không bao giờ cạn ý tưởng."
    },
    {
      id: "p6",
      title: "6. Có tương tác nhưng không biết kéo lead",
      icon: <UserCheck size={14} className="text-indigo-500" />,
      tag: "VÔ NGHĨA",
      desc: "Nhiều sale có lượt xem, có bình luận, có inbox nhưng không biết tổ chức phễu: link bio, form thu lead, tài liệu tặng khách, kịch bản inbox, CRM cá nhân và quy trình follow.",
      solution: "Thiết lập các phễu quà tặng giá trị cao (Cẩm nang quy hoạch, tài liệu tài chính, file tính dòng tiền) để lấy liên hệ liên lạc chất lượng."
    },
    {
      id: "p7",
      title: "7. Không có hệ thống theo dõi khách hàng",
      icon: <Clock size={14} className="text-purple-500" />,
      tag: "THẤT THOÁT",
      desc: "Khách quan tâm hôm nay nhưng vài ngày sau bị quên. Data nằm rải rác trong Zalo, Messenger, điện thoại, file Excel. Không phân loại nóng – ấm – lạnh. Không có lịch chăm sóc. Không biết lead nào có khả năng booking.",
      solution: "Kích hoạt hệ thống CRM cá nhân tối giản chuẩn ONE SALE COMPANY phân loại Khách Nóng - Ấm - Lạnh để bám sát và chăm sóc tận tâm."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50/20 font-sans" id="strategy-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Rounded Panel Card - Elegant Bright Academic Design */}
        <div className="bg-ifactor-cream rounded-[40px] px-6 py-12 md:p-16 lg:p-20 shadow-xl relative overflow-hidden text-slate-900 border border-red-100/10">
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10" id="strategy-panel-content">
            
            {/* Left Content Col */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* iFactor Double Pill Indicator */}
              <div className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 shrink-0 select-none overflow-hidden relative flex items-center justify-center rounded-md">
                  <img 
                    src={logoImg} 
                    alt="iFactor Logo" 
                    className="w-full h-full object-cover scale-[1.50]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-black text-red-755 dark:text-red-400 tracking-widest uppercase">Những thách thức chung Sales đang đối mặt</span>
              </div>

              {/* Title */}
              <h2 className="font-display font-black text-3xl md:text-4xl leading-[1.2] text-slate-950 dark:text-white">
                Bạn đang nỗ lực bán hàng,<br />
                <span className="text-red-700 dark:text-red-400">hay mệt mỏi vì phụ thuộc?</span>
              </h2>

              {/* Text Highlights */}
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed font-light text-sm sm:text-base">
                <p>
                  Thị trường bất động sản đã chuyển mình vào giai đoạn mới, đặt ra nhiều thách thức lớn cho người làm nghề. Trong mô hình bán hàng truyền thống, sale bất động sản thường đứng ở điểm cuối của chuỗi bán hàng: chờ công ty có sản phẩm, chờ marketing làm nội dung, chờ media quay dựng, chờ digital kéo lead, rồi mới bắt đầu tư vấn và chốt giao dịch.
                </p>
                <p>
                  Sale bị chìm giữa hàng trăm sales khác, rơi vào vòng xoáy không tạo được hình ảnh riêng, không có thương hiệu cá nhân để mang đến một nguồn cung data chất lượng, và loay hoay tìm khách hàng trong vô định.
                </p>
                <p>
                  Thấu hiểu những nỗi lo ấy, <strong className="font-semibold text-red-600 dark:text-red-400">ONE SALE COMPANY</strong> được xây dựng để giúp sale bất động sản chuyển từ vai trò <strong className="font-semibold text-slate-900 dark:text-white">“người bán hàng phụ thuộc”</strong> thành một <strong className="font-semibold text-slate-900 dark:text-white">Solo CEO bán hàng</strong> – người có thể tự vận hành hệ thống bán hàng cá nhân của mình.
                </p>
              </div>

              {/* Button with Yellow Energetic CTA Highlight */}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    const el = document.getElementById("pricing-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-ifactor-yellow hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/15 flex items-center gap-2 border-b-2 border-amber-600 cursor-pointer"
                >
                  <span>Xem Chi Tiết Khóa Học</span>
                  <ArrowRight size={14} className="text-slate-950 stroke-[3px]" />
                </button>
              </div>

            </div>

            {/* Right Connection Map Col - Interactive Troubleshooter with high-contrast bright and dark theme */}
            <div className="lg:col-span-6 min-h-[460px] relative bg-white dark:bg-slate-900 rounded-[30px] p-6 sm:p-8 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col justify-between">
              
              {/* Grid backdrop helper */}
              <div className="absolute inset-0 bg-[radial-gradient(#da251c_0.6px,transparent_0.6px)] [background-size:20px_20px] opacity-5" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <span className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">Mô phỏng 7 nỗi đau của Sales BĐS</span>
                  <span className="text-[10px] text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 px-2.5 py-0.5 rounded-full font-bold">Rê chuột vào để xem giải pháp</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {problems.map((prob) => {
                    const isHovered = hoveredNode === prob.id;
                    return (
                      <div
                        key={prob.id}
                        className={`relative p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isHovered 
                            ? "bg-red-50/60 dark:bg-red-950/15 border-red-200 dark:border-red-900 shadow-xs scale-[1.01]" 
                            : "bg-slate-50/60 dark:bg-slate-950/40 border-slate-150 dark:border-slate-850 hover:border-slate-350 dark:hover:border-slate-700"
                        }`}
                        onMouseEnter={() => setHoveredNode(prob.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="p-1 bg-white dark:bg-slate-800 rounded-lg shadow-xs border border-slate-100 dark:border-slate-755">
                              {prob.icon}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{prob.title}</span>
                          </div>
                        </div>

                        {/* Expandable Box */}
                        <div className={`mt-2 text-xs text-slate-600 dark:text-slate-350 leading-relaxed overflow-hidden transition-all duration-300 ${
                          isHovered ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                        }`}>
                          <p className="mb-2 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-lg border border-slate-100/80 dark:border-slate-900">
                            {prob.desc}
                          </p>
                          <div className="flex items-start gap-1.5 text-red-650 dark:text-red-400 font-bold">
                            <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-emerald-500 dark:text-emerald-400" />
                            <span>{prob.solution}</span>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-6 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 font-medium font-bold">
                <span>iFactor Academy</span>
                <span className="text-red-500 dark:text-red-400">Giải pháp Thực Chiến</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
