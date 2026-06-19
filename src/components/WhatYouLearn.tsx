import { useState, useRef, FormEvent } from "react";
import { ArrowRight, Send, Video, Users, Settings, Play } from "lucide-react";
import { UPCOMING_SESSIONS, PILLARS_LIST } from "../types";
import vuQuynhTrangPhoto from "../assets/images/c Trang-1.jpg";

export default function WhatYouLearn() {
  const [messages, setMessages] = useState([
    { id: "m1", user: "Khoa Lê (Vinhomes Grand Park)", msg: "Chào cả nhà! Tuần trước áp dụng kịch bản video review dự án của thầy Hiệp đạt hơn 120K views, thu được 18 leads ấm tự nhiên luôn ạ! 🎉", time: "14:00", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60" },
    { id: "m2", user: "Minh Thư (Nhà Đất Quận 2)", msg: "Bộ prompt AI bóc tách tài liệu quy hoạch của thầy Đức Nguyễn đỉnh thật sự, em viết xong kịch bản cho cả tháng chỉ trong 10 phút.", time: "14:02", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=60" },
    { id: "m3", user: "Phúc Trịnh (KOC Thổ Cư)", msg: "Buổi livestream thử nghiệm áp dụng đúng sườn kịch bản giữ mắt xem của iFactor đã giúp em kéo được 8 số điện thoại đăng ký tư vấn trực tiếp ngoài Hà Nội.", time: "14:03", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=60" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newMsg = {
      id: `m-custom-${Date.now()}`,
      user: "Bạn (Học viên)",
      msg: inputVal.trim(),
      time: "Vừa xong",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=60"
    };

    setMessages(prev => [...prev, newMsg]);
    setInputVal("");

    // Simulate auto-reply from instructor/support to enhance realism
    setTimeout(() => {
      const replyMsg = {
        id: `m-reply-${Date.now()}`,
        user: "Thầy Đặng Vũ Hiệp (IFTV)",
        msg: "Quá tốt em ơi! Tiếp tục duy trì lịch đăng và bám sát kịch bản phễu lead nhé, tối này anh rảnh sẽ lên audit kênh cho nhóm mình nha.",
        time: "Vừa xong",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=60"
      };
      setMessages(prev => [...prev, replyMsg]);
      
      setTimeout(() => {
        if (chatBottomRef.current) {
          chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }, 1200);

    // Scroll chat container down
    setTimeout(() => {
      if (chatBottomRef.current) {
        chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="py-24 bg-ifactor-cream font-sans relative overflow-hidden" id="what-you-learn-section">
      


      <div className="text-center max-w-3xl mx-auto px-4 mt-8">
        {/* Title */}
        <h2 className="font-display font-black text-3xl md:text-4xl text-slate-950 dark:text-white tracking-tight leading-[1.2]">
          Giá trị vượt trội bạn nhận được từ <span className="text-red-750 dark:text-red-400">One Sale Company</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Không học công cụ rời rạc, bạn học cách kết nối chúng thành một quy trình bán hàng khép kín – mang lại dòng khách hàng ấm đều đặn hằng ngày.
        </p>
      </div>

      {/* Infinite scrolling pillars tape */}
      <div className="w-full bg-red-600 py-4 mt-12 overflow-hidden border-y border-red-700 relative group select-none">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {/* Double up elements to make it infinite and seamless */}
          {[...PILLARS_LIST, ...PILLARS_LIST, ...PILLARS_LIST].map((pillar, idx) => (
            <div key={idx} className="flex items-center gap-4 text-white font-extrabold text-xs sm:text-sm tracking-widest font-mono">
              <span>{pillar}</span>
              <span className="text-yellow-400 text-sm">◆</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Upcoming Sessions List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4 text-left">
              <span className="text-xs font-extrabold text-red-650 dark:text-red-400 uppercase tracking-widest block mb-1">CỘNG ĐỒNG & HỌC LIỆU</span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Các mảng kiến thức thực hành tiêu biểu:</h3>
              
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium pb-2 border-b border-dashed border-red-100 dark:border-slate-800">
                <span>Bản đồ kỹ năng thực chiến (12 Chuyên đề):</span>
                <span className="text-[10px] font-mono font-bold text-red-650 dark:text-red-400 animate-pulse bg-red-100/60 dark:bg-red-950/60 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 select-none">
                  <span>Cuộn để xem hết</span>
                  <span>↓</span>
                </span>
              </div>

              <div className="mt-4 space-y-3 max-h-[380px] overflow-y-auto pr-2 scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
                {UPCOMING_SESSIONS.map((session) => (
                  <div 
                    key={session.id}
                    className="p-4 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-red-50/20 dark:hover:bg-red-950/15 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-red-155 dark:hover:border-red-900 transition duration-300 flex items-start gap-4 active:scale-[0.99] cursor-pointer shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-950 text-red-650 dark:text-red-400 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <Play size={11} className="fill-current ml-0.5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-950 dark:text-white leading-tight font-sans">
                        {session.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-350 font-light mt-0.5">{session.subtitle}</p>
                      <span className="inline-block mt-2 text-[8px] font-mono font-bold bg-slate-100/70 dark:bg-slate-800 text-slate-650 dark:text-slate-300 px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {session.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description note & CTA */}
            <div className="pt-6 border-t border-slate-150 dark:border-slate-800 space-y-4">
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Bài giảng cập nhật liên tục bám sát diễn biến thị trường thật. Bỏ qua lý thuyết sáo rỗng, tập trung tuyệt đối vào mục tiêu <strong className="font-bold text-slate-800 dark:text-white">Tạo Lead - Chăm sóc - Booking thực tế</strong>.
              </p>

              <div>
                <button 
                  onClick={() => {
                    const el = document.getElementById("pricing-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-slate-900 text-white hover:bg-slate-950 dark:bg-white dark:text-slate-950 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-sm transition active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Khởi Động Ngay Từ 1.490.000đ</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Simulated Live Zoom Stream + Working Chat */}
          <div className="lg:col-span-7">
            
            {/* Main Window */}
            <div className="w-full h-full min-h-[460px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col justify-between relative">
              
              {/* Window Header */}
              <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800/80 flex items-center justify-between text-white/90">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-[9px] font-mono tracking-widest text-slate-400">ĐANG PHÁT RECORDING...</span>
                  <span className="text-xs font-bold text-slate-350 ml-2 hidden sm:inline">ONE_SALE_MOCK_CLASS_V4.mp4</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 rounded-md text-[9px] text-slate-300 font-mono">
                    <Users size={12} />
                    <span>1,854 Học viên tham gia</span>
                  </div>
                  <Settings size={14} className="text-slate-400 hover:text-white cursor-pointer" />
                </div>
              </div>

              {/* Window Body (Zoom Video Stream + Chat grid splits on wide widths) */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden h-full">
                
                {/* Zoom Video (Ashley presenting) */}
                <div className="md:col-span-7 bg-slate-950 relative flex items-center justify-center min-h-[220px]">
                  
                  {/* Real image representing presentation */}
                  <img 
                    src={vuQuynhTrangPhoto} 
                    alt="Ban đào tạo One Sale Company" 
                    className="w-full h-full object-cover filter contrast-105 saturate-95"
                    referrerPolicy="no-referrer"
                  />

                  {/* Presenter Name Overlay Title */}
                  <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/5 text-white">
                    <div className="text-[8px] text-red-500 font-bold uppercase leading-none">GIẢNG VIÊN ĐÀO TẠO</div>
                    <div className="text-xs font-extrabold leading-none mt-0.5">Ms. Vũ Quỳnh Trang</div>
                  </div>

                  {/* Streaming overlay signals */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white font-mono font-bold text-[8px] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Video size={10} className="fill-white" />
                    <span>LIVE HD 1080P</span>
                  </div>

                </div>

                {/* Overlapping Chat pane */}
                <div className="md:col-span-5 bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800/80 flex flex-col justify-between h-[360px] md:h-full">
                  
                  {/* Chat Header */}
                  <div className="bg-slate-950 px-4 py-2 border-b border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">Trò chuyện Lớp Học</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>

                  {/* Chat feed messages */}
                  <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-3.5">
                    {messages.map((m) => (
                      <div key={m.id} className="flex items-start gap-2.5">
                        <img 
                          src={m.avatar} 
                          alt={m.user} 
                          className="w-6 h-6 rounded-full object-cover border border-white/5 shrink-0" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="space-y-0.5 text-left">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] font-extrabold text-red-400 leading-none">
                              {m.user}
                            </span>
                            <span className="text-[7px] text-slate-500 font-mono leading-none">{m.time}</span>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-slate-300 font-light leading-snug">
                            {m.msg}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div ref={chatBottomRef} />
                  </div>

                  {/* Chat input box */}
                  <form onSubmit={handleSendMessage} className="p-2 bg-slate-950 border-t border-slate-800/80 flex gap-2">
                    <input 
                      type="text" 
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="Gửi tin nhắn hoặc đặt câu hỏi..." 
                      className="flex-1 bg-slate-900 text-xs text-white placeholder-slate-550 px-3 py-1.5 rounded-lg border border-slate-850 focus:outline-none focus:border-red-600 transition"
                    />
                    <button 
                      type="submit"
                      className="p-1.5 bg-red-650 hover:bg-red-700 rounded-lg text-white transition shrink-0 active:scale-95"
                      aria-label="Send message"
                    >
                      <Send size={12} />
                    </button>
                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
