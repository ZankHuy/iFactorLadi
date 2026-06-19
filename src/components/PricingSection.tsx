import { useState, FormEvent, useRef } from "react";
import { Check, Sparkles, Smartphone, Award, Trophy, Send, CheckCircle2, Users, BookOpen } from "lucide-react";
import { PRICING_PLANS } from "../types";

export default function PricingSection() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [plan, setPlan] = useState("system"); // default selected in form
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (planId: string) => {
    setPlan(planId);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !phone.trim() || !name.trim()) return;

    setLoading(true);

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfCDXg43hEWtForsFvEXuumKpvmv2kK1AXY8xWFl26otG5vUA/formResponse";
    const formData = new URLSearchParams();
    
    // Map state variables to Google Form entry IDs
    formData.append("entry.1897142858", name.trim());
    formData.append("entry.830363502", phone.trim());
    formData.append("entry.1500299712", email.trim());
    formData.append("entry.1983687511", getPlanLabel(plan));

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData.toString()
    })
    .then(() => {
      setLoading(false);
      setSuccess(true);
    })
    .catch((error) => {
      console.error("Error submitting to Google Form:", error);
      // Fallback gracefully so the student's registration is not blocked in the UI
      setLoading(false);
      setSuccess(true);
    });
  };

  const getPlanLabel = (id: string) => {
    if (id === 'starter') return 'Gói STARTER';
    if (id === 'system') return 'Gói SYSTEM';
    return 'Gói PARTNER';
  };

  return (
    <section 
      id="pricing-section" 
      className="py-24 bg-ifactor-cream text-slate-900 font-sans relative overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-red-650/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-black uppercase text-red-755 dark:text-red-400 tracking-widest font-mono">CÁC GÓI ĐÀO TẠO THỰC CHIẾN</span>
          <h2 className="font-display font-black text-2xl md:text-3.5xl tracking-wider leading-snug text-[#8b0e13] dark:text-red-400 uppercase max-w-2xl mx-auto">
            Chọn gói phù hợp <br /> để xây cỗ máy bán hàng cá nhân
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Nội dung học cốt lõi tương đồng - Khác biệt nằm ở quyền lợi, mức độ đồng hành và chiều sâu triển khai
          </p>
        </div>

        {/* 3 Packages Cards Deck container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-12 mb-20">
          {PRICING_PLANS.map((planItem) => {
            const isSystem = planItem.id === "system";

            return (
              <div 
                key={planItem.id}
                className={`bg-white text-slate-900 rounded-[32px] p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  isSystem 
                    ? "border-4 border-red-600 shadow-2xl relative lg:-translate-y-4 scale-[1.01]" 
                    : "border border-slate-200 shadow-xl"
                }`}
              >
                <div>
                  {isSystem && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap">
                      KHUYÊN DÙNG • BÁN CHẠY NHẤT
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center pb-6 border-b border-slate-100 mt-2">
                    <h3 className="font-sans font-extrabold text-2xl text-slate-950 flex items-center justify-center gap-2">
                      {planItem.id === 'starter' && <Smartphone size={22} className="text-slate-600" />}
                      {planItem.id === 'system' && <Award size={22} className="text-red-600" />}
                      {planItem.id === 'partner' && <Trophy size={22} className="text-ifactor-yellow-dark" />}
                      {planItem.name}
                    </h3>
                    {planItem.title && (
                      <p className="text-xs font-black uppercase text-red-600 mt-1.5 tracking-wide font-sans">
                        {planItem.title}
                      </p>
                    )}
                    {isSystem ? (
                      <span className="mt-3 inline-block bg-red-600 text-white text-xs font-semibold py-2.5 px-6 rounded-2xl leading-relaxed max-w-[90%] mx-auto text-center shadow-md">
                        {planItem.desc}
                      </span>
                    ) : (
                      <p className="text-xs text-slate-550 mt-2 leading-relaxed">{planItem.desc}</p>
                    )}
                  </div>

                  {/* Detailed specs */}
                  <div className="space-y-4 mt-5">
                    {/* Learning Format (Hình thức học) */}
                    {planItem.learningFormat && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-red-50/20 py-2 px-3 rounded-xl border border-red-100/30 font-medium justify-center">
                        <span className="font-extrabold text-red-750 uppercase tracking-wide text-[10px] shrink-0">Hình thức học:</span>
                        <span className="text-slate-600 text-[11px]">{planItem.learningFormat}</span>
                      </div>
                    )}
                  </div>

                  {/* Quyền Lợi Header */}
                  <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mt-6 mb-3 font-sans text-center">
                    Quyền lợi nổi bật
                  </div>

                  {/* Bullet Lists - Displaying Benefits directly */}
                  <div className="min-h-[310px] max-h-[380px] overflow-y-auto pr-1 text-left custom-scrollbar py-1">
                    <div className="space-y-2.5">
                      {planItem.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-red-50 text-red-650 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={10} className="stroke-[3.5px]" />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price section & CTA */}
                <div className="mt-6 pt-5 border-t border-slate-100 text-center">
                  <div className="flex flex-col items-center justify-center mb-4">
                    {planItem.originalPrice && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs line-through text-slate-400 font-medium">
                          {planItem.originalPrice}
                        </span>
                        <span className="bg-red-50 text-red-600 text-[9px] uppercase font-bold px-2 py-0.5 rounded-md">
                          Ưu đãi ra mắt
                        </span>
                      </div>
                    )}
                    <div className="text-3xl sm:text-4xl font-extrabold text-red-600 tracking-tight font-sans mt-0.5">
                      {planItem.price}
                    </div>
                    {planItem.registrationMethod && (
                      <span className="text-[10px] font-mono font-bold text-slate-500 mt-1 uppercase tracking-wider">
                        {planItem.registrationMethod}
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={() => scrollToForm(planItem.id)}
                    className={`w-full font-extrabold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer ${
                      isSystem 
                        ? "bg-red-600 hover:bg-red-700 text-white" 
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flat Inline Registration Form - clean bright academy card */}
        <div 
          ref={formRef}
          className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-[32px] p-6 sm:p-10 relative shadow-2xl"
        >
          {!success ? (
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="text-center space-y-2">
                <span className="text-[10px] uppercase font-mono font-bold text-red-600 tracking-widest flex items-center justify-center gap-1.5">
                  <Sparkles size={12} className="text-red-500 animate-pulse" />
                  ĐĂNG KÝ NHẬN TƯ VẤN LỘ TRÌNH KHÓA HỌC MIỄN PHÍ
                </span>
                <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900">
                  Nhận tư vấn ngay bây giờ
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto font-light">
                  Đội ngũ chuyên viên sẽ liên hệ và hỗ trợ thiết kế lộ trình chuyển đổi số và xây kênh tối ưu nhất dành riêng cho anh/chị.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="agent-name" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide text-left">
                    Họ và Tên:
                  </label>
                  <input 
                    id="agent-name"
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Nguyễn Văn A"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="agent-phone" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide text-left">
                    Số Điện Thoại Zalo:
                  </label>
                  <input 
                    id="agent-phone"
                    type="tel" 
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0912 345 678"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="agent-email" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide text-left">
                    Email liên hệ:
                  </label>
                  <input 
                    id="agent-email"
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sales@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition"
                  />
                </div>

                {/* Select Package selection */}
                <div className="space-y-1.5">
                  <label htmlFor="plan-select" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide text-left">
                    Gói đang quan tâm:
                  </label>
                  <select 
                    id="plan-select"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition cursor-pointer"
                  >
                    <option value="starter">Gói STARTER</option>
                    <option value="system">Gói SYSTEM (Khuyên dùng)</option>
                    <option value="partner">Gói PARTNER</option>
                  </select>
                </div>
              </div>

              {/* Submit Button - Standardized with beautiful highlight brand yellow and hover states */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 text-slate-950 font-black bg-ifactor-yellow hover:bg-amber-400 active:scale-[0.99] rounded-full text-center text-xs tracking-wider transition uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/25 border-b-2 border-amber-600"
              >
                {loading ? (
                  <span>ĐANG ĐĂNG KÝ TƯ VẤN...</span>
                ) : (
                  <>
                    <Send size={14} className="text-slate-950" />
                    <span>NHẬN TƯ VẤN THỰC CHIẾN NGAY</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={36} />
              </div>

              <div className="space-y-2">
                <h4 className="font-sans font-extrabold text-2xl text-slate-900">
                  Đăng ký thành công!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Cảm ơn anh/chị <strong className="text-red-600">{name}</strong>. Hệ thống đã ghi nhận đăng ký tư vấn cho <strong className="text-slate-900">{getPlanLabel(plan)}</strong>.
                </p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Đội ngũ từ Học viện và đại diện truyền thông sẽ gọi điện hỗ trợ trực tiếp đến số điện thoại <strong className="text-slate-900 font-bold">{phone}</strong> cũng như gửi tài nguyên quà tặng qua email <strong className="text-slate-900 font-bold">{email}</strong> trong thời gian sớm nhất!
                </p>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => {
                    setSuccess(false);
                    setName("");
                    setPhone("");
                    setEmail("");
                  }}
                  className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-full hover:bg-slate-700 transition"
                >
                  Đăng ký lại
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
