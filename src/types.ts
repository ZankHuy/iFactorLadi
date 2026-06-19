import dangVuHiepRealPhoto from "./assets/images/Dang Vu Hiep.jpg";
import dangVuHiepTestimonialPhoto from "./assets/images/dang_vu_hiep_1781521966944.jpg";
import leHoangPhucPhoto from "./assets/images/Le Hoang Phuc.jpeg";
import phanDinhLuatPhoto from "./assets/images/Phan Dinh Luat.jpeg";
import nguyenThiMaiPhuongPhoto from "./assets/images/Nguyen Thi Mai Phuong.jpeg";
import phamVietAnhPhoto from "./assets/images/Pham Viet Anh.png";
import tinaDoPhoto from "./assets/images/Tina Do.jpg";
import vuQuynhTrangPhoto from "./assets/images/ms Quỳnh Trang.png";
import tranKieuNgaPhoto from "./assets/images/Tran Kieu Nga.png";
import nguyenXuanHuongPhoto from "./assets/images/Nguyen Xuan Huong 2.png";
import trinhVanAnhPhoto from "./assets/images/Trinh Van Anh.png";
import tranTrongTruongPhoto from "./assets/images/mr Trọng Trưởng.png";
import ducNguyenPhoto from "./assets/images/mr Đức Nguyễn.png";
import nguyenDucThangPhoto from "./assets/images/Nguyen Duc Thang.png";

export interface Coach {
  id: string;
  name: string;
  role: string;
  experienceYear: string;
  experienceLabel?: string;
  badges: string[];
  statsValue1: string;
  statsLabel1: string;
  statsValue2: string;
  statsLabel2: string;
  statsValue3: string;
  statsLabel3: string;
  bio: string;
  imageUrl: string;
}

export interface HowItWorkStep {
  step: number;
  title: string;
  description: string;
  iconName: "headphones" | "clipboard" | "repeat" | "zap" | "star" | "tv" | "image" | "user-check" | "pen";
  badge: string;
}

export interface SessionItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
}

export interface InclusionItem {
  id: string;
  title: string;
  description: string;
  iconName: "tv" | "clock" | "file-text" | "graduation-cap" | "users" | "calendar";
}

export interface Testimonial {
  id: string;
  name: string;
  tier: "KOC CHUYÊN NGHIỆP" | "SOLO AGENT" | "TEAM LEADER";
  brokerage: string;
  quote: string;
  imageUrl: string;
  objectPosition?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  title?: string;
  price: string;
  originalPrice?: string;
  launchPrice?: string;
  registrationMethod?: string;
  isPopular: boolean;
  desc: string;
  role?: string;
  target?: string;
  learningFormat?: string;
  syllabus?: string[];
  features: string[]; // maps to "Quyền lợi chính"
  ctaText: string;
}

// ------------------ STATIC DATA ------------------

export const HOW_IT_WORKS_STEPS: HowItWorkStep[] = [
  {
    step: 1,
    title: "Giai đoạn 1: Thiết kế công ty bán hàng cá nhân",
    description: "Hiểu mô hình One Sale Company, thiết kế concept kênh ngách độc bản chuẩn thương hiệu cá nhân và xây chân dung khách hàng theo hành vi mua.",
    iconName: "pen",
    badge: "Giai đoạn 1"
  },
  {
    step: 2,
    title: "Giai đoạn 2: Phân tích dự án & Xây thông điệp bán hàng",
    description: "Học viên học cách đọc tài liệu dự án, bảng hàng, chính sách, pháp lý, vị trí, tiện ích và chuyển thành nội dung dễ hiểu cho khách hàng. Biết cách xử lí nỗi lo của khách hàng.",
    iconName: "clipboard",
    badge: "Giai đoạn 2"
  },
  {
    step: 3,
    title: "Giai đoạn 3: Định vị kênh & Hệ thống nội dung",
    description: "Học viên xác định định vị cá nhân và xây dựng concept kênh phù hợp với điểm mạnh, thị trường ngách và nhóm khách mục tiêu.",
    iconName: "tv",
    badge: "Giai đoạn 3"
  },
  {
    step: 4,
    title: "Giai đoạn 4: Kịch bản & Sản xuất video bán hàng",
    description: "Học viên biết cách lên ý tưởng kịch bản và dựng video bán hàng ngắn có cấu trúc rõ ràng.",
    iconName: "image",
    badge: "Giai đoạn 4"
  },
  {
    step: 5,
    title: "Giai đoạn 5: Livestream, Phân phối nội dung & Tạo lead",
    description: "Hiểu cách tổ chức một phiên livestream bán hàng cá nhân, biết cách biến một ý tưởng thành nhiều phiên bản nội dung, phân phối trên nhiều nền tảng khác nhau và quản lí lead tư vấn.",
    iconName: "zap",
    badge: "Giai đoạn 5"
  },
  {
    step: 6,
    title: "Giai đoạn 6: Tư vấn, Follow-up & Chốt giao dịch",
    description: "Phân loại và chấm điểm lead, biết cách tư vấn và đề xuất sản phẩm phù hợp với từng nhóm khách hàng, xây dựng kịch bản follow-up, chốt lịch hẹn, chuyển đổi khách hàng hiệu quả hơn.",
    iconName: "repeat",
    badge: "Giai đoạn 6"
  },
  {
    step: 7,
    title: "Giai đoạn 7: Quản trị khách hàng & Hiệu suất bán hàng",
    description: "Biết cách tổ chức dữ liệu khách hàng và theo dõi hành trình từ quan tâm đến booking/giao dịch. Xây dựng CRM cá nhân và quản lí hiệu quả, thiết lập capstone - chiến dịch bán hàng 90 ngày.",
    iconName: "user-check",
    badge: "Giai đoạn 7"
  },
  {
    step: 8,
    title: "Giai đoạn 8: Thực chiến One Sale Company 90 ngày",
    description: "Sở hữu audit hệ thống cá nhân, nhận cố vấn chiến lược kinh doanh trong 90 ngày, đồng thời tham gia Sales Clinic để xử lý các tình huống bán hàng thực tế với khách hàng thật.",
    iconName: "star",
    badge: "Giai đoạn 8"
  }
];

export const PILLARS_LIST = [
  "VIDEO NGẮN BĐS", "THƯƠNG HIỆU CÁ NHÂN", "TRÍ TUỆ NHÂN TẠO AI", "CRM CÁ NHÂN",
  "PHỄU THU LEAD", "LIVESTREAM THỰC CHIẾN", "SOLO CEO BÁN HÀNG", "IFACTOR ACADEMY",
  "MẠNG LƯỚI IFTV", "BÓC TÁCH USP DỰ ÁN", "KỊCH BẢN VIDEO TRAFFIC", "TỰ QUAY DỰNG SỐ"
];

export const UPCOMING_SESSIONS: SessionItem[] = [
  {
    id: "s1",
    title: "Module 1: Tư duy One Sale Company",
    subtitle: "Chuyển dịch bán hàng từ thế bị động sang chủ động tự vận hành nguồn khách hàng",
    tag: "TƯ DUY HỆ THỐNG"
  },
  {
    id: "s2",
    title: "Module 2: Tự đọc dự án và biến thông tin thành nội dung bán hàng",
    subtitle: "Biết cách đọc tài liệu dự án, bảng hàng, chính sách, pháp lý, vị trí, tiện ích và chuyển thành nội dung",
    tag: "TƯ DUY HỆ THỐNG"
  },
  {
    id: "s3",
    title: "Module 3: Xây concept kênh cá nhân",
    subtitle: "Xác định định vị cá nhân và xây dựng concept kênh phù hợp với điểm mạnh và thị trường ngách",
    tag: "NỘI DUNG THỰC CHIẾN"
  },
  {
    id: "s4",
    title: "Module 4: Tự lên kịch bản clip bán hàng",
    subtitle: "Biết cách biến ý tưởng, bài viết và thông tin dự án thành video ngắn có cấu trúc rõ ràng.",
    tag: "KỊCH BẢN VIDEO"
  },
  {
    id: "s5",
    title: "Module 5: Tự quay clip bằng điện thoại",
    subtitle: "Nắm được các nguyên tắc cơ bản để tự quay video bằng thiết bị sẵn có, không cần ekip phức tạp",
    tag: "KỊCH BẢN VIDEO"
  },
  {
    id: "s6",
    title: "Module 6: Tự dựng clip nhanh bằng CapCut",
    subtitle: "Biết cách dựng nhanh video ngắn phục vụ bán hàng hằng ngày bằng ứng dụng Capcut",
    tag: "THƯƠNG HIỆU CÁ NHÂN"
  },
  {
    id: "s7",
    title: "Module 7: Tự tạo hình ảnh và tư liệu bán hàng bằng AI",
    subtitle: "Sử dụng AI để tạo tư liệu truyền thông, hình ảnh minh họa, concept thị giác và asset bán hàng",
    tag: "CÔNG CỤ SỐ"
  },
  {
    id: "s8",
    title: "Module 8: Đưa content đi nhiều nền tảng",
    subtitle: "Biết cách biến một ý tưởng thành nhiều phiên bản nội dung và phân phối trên nhiều nền tảng khác nhau",
    tag: "CÔNG CỤ SỐ"
  },
  {
    id: "s9",
    title: "Module 9: Livestream bán hàng cơ bản",
    subtitle: "Học viên biết cách tổ chức một phiên livestream bán hàng cá nhân ở mức cơ bản",
    tag: "BÁN HÀNG TRỰC TIẾP"
  },
  {
    id: "s10",
    title: "Module 10: Tạo phễu kéo lead cá nhân",
    subtitle: "Học viên biết cách biến người xem nội dung thành lead tư vấn",
    tag: "TĂNG TỐC DOANH THU"
  },
  {
    id: "s11",
    title: "Module 11: Hiểu quảng cáo digital để không bị phụ thuộc",
    subtitle: "Hiểu các chỉ số cơ bản để biết nội dung nào hiệu quả và cách phối hợp với đội digital",
    tag: "DIGITAL MARKETING"
  },
  {
    id: "s12",
    title: "Module 12: Quản lý khách hàng bằng CRM cá nhân",
    subtitle: "Biết cách tổ chức dữ liệu khách hàng và theo dõi hành trình từ quan tâm đến giao dịch",
    tag: "QUẢN TRỊ DOANH SỐ"
  }
];

export const COACHES_LIST: Coach[] = [
  {
    id: "dang-vu-hiep",
    name: "Mr. Đặng Vũ Hiệp",
    role: "Co-Founder IFTV & Diễn giả Truyền thông",
    experienceYear: "10+ năm kinh nghiệm marketing BĐS",
    badges: ["Truyền thông BĐS", "Xây Kênh Triệu Views", "Chiến lược Content"],
    statsValue1: "210K+",
    statsLabel1: "Followers TikTok @hiepdangreporter",
    statsValue2: "100M+",
    statsLabel2: "Views/tháng Mạng lưới IFTV",
    statsValue3: "100+",
    statsLabel3: "Dự án BĐS đã đồng hành truyền thông",
    bio: "Mr Đặng Vũ Hiệp có hơn 10 năm kinh nghiệm trong lĩnh vực truyền thông marketing bất động sản, từng triển khai hơn 100 dự án trên toàn quốc. Anh là chuyên gia dẫn dắt có thực lực hàng đầu trong việc biến tài liệu dự án trở thành kịch bản video ngắn cuốn hút, giúp bạn chuẩn hoá thông điệp và cách kể chuyện cuốn hút tự nhiên trước máy quay.",
    imageUrl: dangVuHiepRealPhoto
  },
  {
    id: "pham-viet-anh",
    name: "Mr. Phạm Việt Anh",
    role: "Founder Golden Goose – Co-founder iFactor",
    experienceYear: "10+ năm kinh nghiệm BĐS & Đào tạo",
    badges: ["Tư duy Bán hàng", "Năng lực Sales", "Hệ thống Bán hàng"],
    statsValue1: "10+ Năm",
    statsLabel1: "Kinh nghiệm BĐS",
    statsValue2: "15K+",
    statsLabel2: "Sales & Học viên trực tiếp đào tạo",
    statsValue3: "100%",
    statsLabel3: "Góc nhìn thực chiến thị trường",
    bio: "Mr Phạm Việt Anh có hơn 10 năm kinh nghiệm trong lĩnh vực bất động sản, đào tạo, xây dựng hệ thống bán hàng, đầu tư và tư vấn phát triển dự án. Anh phụ trách dạy tư duy kinh doanh bất động sản, xây dựng năng lực sale chuyên nghiệp, hệ thống bán hàng và tư vấn khách hàng.",
    imageUrl: phamVietAnhPhoto
  },
  {
    id: "tina-do",
    name: "Ms. Tina Đỗ",
    role: "Tổng Giám đốc – Co-founder IFTV",
    experienceYear: "20 năm truyền thông marketing BĐS",
    badges: ["Marketing BĐS", "Tư duy Truyền thông", "Thông điệp bán hàng"],
    statsValue1: "20 Năm",
    statsLabel1: "Kinh nghiệm truyền thông",
    statsValue2: "100+",
    statsLabel2: "Dự án triển khai thành công",
    statsValue3: "100%",
    statsLabel3: "Chiến lược xây dựng niềm tin",
    bio: "Ms Tina Đỗ có 20 năm kinh nghiệm truyền thông marketing trong lĩnh vực bất động sản, triển khai hơn 100 dự án trên toàn quốc. Cô tập trung chia sẻ về marketing bất động sản, tư duy truyền thông dự án, cách biến thông tin sản phẩm thành thông điệp bán hàng và cách xây dựng niềm tin bền vững với khách hàng.",
    imageUrl: tinaDoPhoto
  },
  {
    id: "vu-quynh-trang",
    name: "Ms. Vũ Quỳnh Trang",
    role: "Content Creator Kênh TikTok Hoa Hậu Vỉa Hè",
    experienceYear: "Thạc sĩ Kinh tế & Thạc sĩ Truyền thông",
    experienceLabel: "Học vị",
    badges: ["Thương hiệu cá nhân", "Định vị Concept", "Tuyến nội dung"],
    statsValue1: "190K+",
    statsLabel1: "Followers TikTok Hoa Hậu Vỉa Hè",
    statsValue2: "SME",
    statsLabel2: "Chuyên gia nhân hiệu nội bộ",
    statsValue3: "100%",
    statsLabel3: "Giảng viên Học viện Ngoại giao",
    bio: "Ms Vũ Quỳnh Trang là Thạc sĩ Kinh tế và Thạc sĩ Truyền thông, giảng viên tại Học viện Ngoại giao. Cô là Giám đốc Công ty TNHH Hoa Hậu Vỉa Hè, chuyên gia xây dựng nhân hiệu và thương hiệu cho chủ doanh nghiệp SME, giúp học viên chọn concept kênh, định hình phong cách xuất hiện và thiết kế tuyến nội dung dễ nhớ.",
    imageUrl: vuQuynhTrangPhoto
  },
  {
    id: "tran-kieu-nga",
    name: "Ms. Trần Kiều Nga",
    role: "Giảng viên Content",
    experienceYear: "KOL Bất động sản",
    badges: ["Viết Content", "Insight Khách Hàng", "Viết Caption"],
    statsValue1: "160K+",
    statsLabel1: "Followers quan tâm BĐS",
    statsValue2: "KOL",
    statsLabel2: "Chuyên sâu bất động sản",
    statsValue3: "100%",
    statsLabel3: "Tư vấn & Chuyển đổi nội dung",
    bio: "Ms Trần Kiều Nga là KOL chuyên bất động sản với hơn 160.000 người theo dõi. Cô phụ trách giảng dạy viết content bán hàng, xây dựng nội dung từ insight khách hàng, viết caption, bài tư vấn, bài xử lý phản đối, và chuyển đổi các thông tin dự án khô khan thành nội dung dễ tiếp nhận.",
    imageUrl: tranKieuNgaPhoto
  },
  {
    id: "nguyen-xuan-huong",
    name: "Mr. Nguyễn Xuân Hướng",
    role: "Short-form Video Editor & CapCut Educator",
    experienceYear: "Chuyên gia CapCut chuyên nghiệp",
    badges: ["Dựng CapCut", "Tối ưu Nhịp dựng", "Template Video"],
    statsValue1: "44K+",
    statsLabel1: "Followers TikTok Hướng Edit",
    statsValue2: "CapCut",
    statsLabel2: "Đào tạo video ngắn",
    statsValue3: "100%",
    statsLabel3: "Thực hành ứng dụng nhanh hằng ngày",
    bio: "Mr Nguyễn Xuân Hướng là chủ kênh TikTok Hướng Edit với hơn 44.000 người theo dõi, chuyên đào tạo dựng video ngắn và ứng dụng CapCut trong sản xuất nội dung. Trong chương trình, anh hướng dẫn dựng video ngắn bằng CapCut, tối ưu nhịp dựng video bán hàng, chèn phụ đề, âm thanh, CTA và tạo template có tính lặp lại cao.",
    imageUrl: nguyenXuanHuongPhoto
  },
  {
    id: "trinh-van-anh",
    name: "Ms. Trịnh Vân Anh",
    role: "Host Livestream & Trainer",
    experienceYear: "Giảng viên thực chiến livestream",
    badges: ["Livestream Bán Hàng", "Kịch bản Livestream", "Giữ chân người xem"],
    statsValue1: "Multi",
    statsLabel1: "Nền tảng thực chiến livestream",
    statsValue2: "Lead",
    statsLabel2: "Chuyển đổi tương tác trực tiếp",
    statsValue3: "100%",
    statsLabel3: "Dẫn dắt nội dung cuốn hút",
    bio: "Ms Trịnh Vân Anh là giảng viên thực chiến livestream trên nhiều nền tảng số. Cô tập trung giảng dạy kỹ năng livestream bán hàng, thiết lập kịch bản livestream, cách giữ chân người xem, dẫn dắt nội dung và chuyển đổi tương tác livestream thành lead tư vấn thực tế.",
    imageUrl: trinhVanAnhPhoto
  },
  {
    id: "tran-trong-truong",
    name: "Mr. Trần Trọng Trưởng",
    role: "Chuyên gia Digital Marketing",
    experienceYear: "Chuyên gia sản phẩm Google",
    badges: ["Digital Marketing", "Chỉ số Quảng cáo", "Test tệp Khách"],
    statsValue1: "Google",
    statsLabel1: "Product Expert chính thức",
    statsValue2: "Paid Ads",
    statsLabel2: "Chuyên gia quảng cáo trả phí",
    statsValue3: "100%",
    statsLabel3: "Phối hợp hiệu quả đội digital",
    bio: "Mr Trần Trọng Trưởng là Chuyên gia sản phẩm Google (Product Expert) và chuyên gia quảng cáo trả phí. Anh giúp học viên hiểu nền tảng quảng cáo digital, đọc chỉ số cơ bản, biết cách test nội dung và tệp khách hàng để phối hợp hiệu quả tối đa với đội chạy quảng cáo.",
    imageUrl: tranTrongTruongPhoto
  },
  {
    id: "duc-nguyen",
    name: "Mr. Đức Nguyễn",
    role: "Founder Sisu AI & AI Transformers Vietnam",
    experienceYear: "Thạc sĩ Data Analytics (Aalto University, Phần Lan)",
    experienceLabel: "Học vị",
    badges: ["Trí Tuệ Nhân Tạo AI", "Prompt BĐS", "Tự động hóa"],
    statsValue1: "35K+",
    statsLabel1: "Followers AI Native Lab",
    statsValue2: "10+ năm",
    statsLabel2: "Chuyển đổi số & Tự động hóa tại Châu Âu",
    statsValue3: "500+",
    statsLabel3: "Prompt chuyên dụng bán hàng",
    bio: "Mr Đức Nguyễn là Founder Sisu AI – Founder AI Native Lab – Founder AI Transformers Vietnam. Anh Thạc sĩ Data Analytics tại Đại học Aalto, Phần Lan, có 10+ năm kinh nghiệm chuyển đổi số tại châu Âu. Phụ trách: Ứng dụng AI trong BĐS, đọc tài liệu dự án bằng AI, tạo prompt viết content/kịch bản và tự động hoá quy trình sản xuất.",
    imageUrl: ducNguyenPhoto
  },
  {
    id: "nguyen-duc-thang",
    name: "Mr. Nguyễn Đức Thắng",
    role: "Deputy Director of Media Production",
    experienceYear: "Phó giám đốc kỹ thuật VEJO Media",
    badges: ["Media Production", "Hình ảnh & Video", "Chiến dịch A80"],
    statsValue1: "Deputy",
    statsLabel1: "An Nam & VEJO Media Center",
    statsValue2: "A80",
    statsLabel2: "Trực tiếp hậu kỳ video trong đại lễ Quốc khánh 2/9",
    statsValue3: "100%",
    statsLabel3: "Sản xuất media thực chiến",
    bio: "Mr Nguyễn Đức Thắng là Deputy Director of Media Production tại An Nam Digital Media & Trading kiêm Phó giám đốc kỹ thuật VEJO Media. Anh phụ trách tư duy sản xuất hình ảnh/video, chuẩn hóa chất lượng tư liệu, tối ưu quy trình sản xuất nội dung cho sale và đội nhóm.",
    imageUrl: nguyenDucThangPhoto
  }
];

export const INCLUSION_ITEMS: InclusionItem[] = [
  {
    id: "inc1",
    title: "Lộ trình học theo từng cấp độ",
    description: "Được lựa chọn lộ trình phù hợp từ <strong>Starter, System đến Partner</strong>. Đi từ chương trình <strong>kích hoạt xây kênh TikTok bất động sản</strong> đến chương trình chủ lực <strong>One Sale Company</strong> và gói <strong>đồng hành triển khai chuyên sâu</strong>.",
    iconName: "tv"
  },
  {
    id: "inc2",
    title: "Bài giảng, workshop và bài tập thực chiến",
    description: "Tùy từng gói mà học viên được rèn luyện qua <strong>bài giảng, workshop và bài tập thực chiến</strong>, giúp kích hoạt <strong>tư duy, công cụ và quy trình</strong> vận hành hệ thống bán hàng cá nhân.",
    iconName: "clock"
  },
  {
    id: "inc3",
    title: "Bộ template, checklist và tài nguyên triển khai",
    description: "Học viên được cung cấp <strong>bộ template, checklist và tài nguyên triển khai</strong> từ cơ bản đến đầy đủ, hỗ trợ <strong>xây kênh, làm nội dung, quản lý lead, CRM</strong> và tối ưu quy trình bán hàng.",
    iconName: "file-text"
  },
  {
    id: "inc4",
    title: "Review hệ thống bán hàng cá nhân",
    description: "Học viên được <strong>review kênh, content, video, phễu lead, quảng cáo, CRM và pipeline</strong> để nhìn rõ điểm mạnh, điểm yếu và biết cách <strong>tối ưu hệ thống bán hàng cá nhân</strong>.",
    iconName: "users"
  },
  {
    id: "inc5",
    title: "Có cộng đồng học viên và hỗ trợ định kỳ",
    description: "Học viên được tham gia <strong>cộng đồng học viên</strong>, nhận hỗ trợ từ <strong>chuyên gia iFactor</strong>, hỏi đáp trong quá trình học và được kết nối với <strong>nhóm triển khai phù hợp</strong> theo từng cấp độ.",
    iconName: "graduation-cap"
  },
  {
    id: "inc6",
    title: "Coaching, Sales Clinic và đồng hành chiến dịch",
    description: "Ở cấp độ chuyên sâu, học viên được <strong>audit cá nhân, cố vấn chiến lược 90 ngày</strong>, coaching tình huống khách hàng thật, tham gia <strong>Sales Clinic</strong> và được <strong>đồng hành triển khai chiến dịch thực tế</strong>.",
    iconName: "calendar"
  }
];

export const AGENT_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Phan Đình Luật",
    tier: "KOC CHUYÊN NGHIỆP",
    brokerage: "Đại lý BĐS Vinhomes Premium",
    quote: "Từ một sale thô cứng chỉ biết spam tin nhắn rác, sau khi xây dựng concept kênh tư vấn chuyên gia theo định vị của One Sale Company, kênh TikTok của em vượt 50K followers, mang về đều đặn hơn 25 lead chất lượng mỗi tuần mà hoàn toàn không mất chi phí quảng cáo.",
    imageUrl: phanDinhLuatPhoto,
    objectPosition: "50% 15%"
  },
  {
    id: "t2",
    name: "Nguyễn Thị Mai Phương",
    tier: "SOLO AGENT",
    brokerage: "Nhà Đất Thổ Cư Hà Nội",
    quote: "Nhờ bài học bóc tách USP dự án và ứng dụng prompt AI của thầy Đức, Phương đã tiết kiệm 80% thời gian lên content. Video ngắn quay bằng điện thoại chia sẻ thực tế quy hoạch quận Hoàng Mai đạt 300K views và giúp tôi chốt thành công 2 căn nhà phố trị giá 15 tỷ trong 1 tháng.",
    imageUrl: nguyenThiMaiPhuongPhoto,
    objectPosition: "50% 15%"
  },
  {
    id: "t3",
    name: "Lê Hoàng Phúc",
    tier: "TEAM LEADER",
    brokerage: "Khải Hoàn Land",
    quote: "Tôi áp dụng toàn bộ 12 module và bộ quy chuẩn CRM cá nhân để hướng dẫn lại cho team 15 người của mình. Không cần chờ lead từ tổng công ty rót xuống nữa, các em đều tự biết lên kịch bản livestream hằng tuần và chủ động nguồn khách. Doanh số cả đội tăng vọt gấp 3 lần.",
    imageUrl: leHoangPhucPhoto,
    objectPosition: "50% 15%"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq1",
    question: "One Sale Company là khóa học gì?",
    answer: "ONE SALE COMPANY là chương trình đào tạo tích hợp thực chiến của iFactor Academy và IFTV, được thiết kế chuyên sâu dành riêng cho sale bất động sản. Khóa học giúp chuyển đổi mô hình từ một người bán hàng phụ thuộc thụ động sang Solo CEO - tự vận hành hệ thống truyền thông, sản xuất video ngắn, ứng dụng AI, phễu lead, livestream và CRM cá nhân để bán nhà bền vững."
  },
  {
    id: "faq2",
    question: "Một người chưa bao giờ đứng trước camera, không biết dựng video có học được không?",
    answer: "Hoàn toàn học được! Chương trình được thiết kế theo mô hình thực hành cầm tay chỉ việc từ cơ bản nhất. Module 3, 4, 5 sẽ giúp bạn định dạng concept kênh phù hợp với sở thích (kể cả không muốn lộ mặt vẫn có các concept review/vẽ chữ chuyên biệt), cung cấp các công thức viết kịch bản điền-vào-chỗ-trống và quy trình dựng CapCut bằng điện thoại 15 phút là xong."
  },
  {
    id: "faq3",
    question: "Sự khác biệt giữa Gói Starter, Gói System và Gói Partner?",
    answer: "Gói Starter (ưu đãi 1.490.000đ) tập trung kích hoạt xây kênh TikTok bất động sản, rèn rũa tư duy nền tảng, kịch bản bán hàng và quay dựng video bằng điện thoại qua CapCut. Gói System (ưu đãi 5.900.000đ) rèn luyện thêm kỹ thuật Livestream, ứng dụng AI viết prompt/tạo ảnh và thiết lập CRM quản lý lead tự động. Gói Partner (ưu đãi 29.900.000đ) là chương trình đồng hành chiến lược chuyên sâu, cố vấn 1-1 trực tiếp, audit cá nhân hóa và đồng hành cùng chiến dịch bán hàng thực chiến 90 ngày."
  },
  {
    id: "faq4",
    question: "Ứng dụng AI trong bán hàng bất động sản cụ thể là thế nào?",
    answer: "Khóa học sẽ dạy bạn cách vận hành các siêu công cụ AI để bóc tách tóm tắt tệp tài liệu dự án hàng trăm trang của chủ đầu tư trong 1 phút, tự động tạo thêm 50 ý tưởng content ngách, sinh kịch bản video nói trước ống kính đúng tâm lý khách hàng và vẽ phối cảnh nhà đất/hình ảnh quảng cáo sống động cho riêng từng khách ấm."
  },
  {
    id: "faq5",
    question: "Tôi có được tham gia chiến dịch bán hàng thật sau khóa học?",
    answer: "Có! Với các gói đào tạo System và Partner, học viên có năng lực tốt và kênh hoạt động đều đặn sẽ được iFactor và mạng lưới IFTV ưu tiên xét chọn, gửi brief trực tiếp từ các chủ đầu tư hàng đầu Việt Nam để thực hành review hiện trường, chạy campaign booking sản phẩm hoặc lên livestream bán hàng thật có hoa hồng hấp dẫn."
  },
  {
    id: "faq6",
    question: "Khi đăng ký, quyền lợi hỗ trợ sau khóa học kéo dài bao lâu?",
    answer: "Với gói cao cấp Partner, học viên sẽ được trực tiếp cố vấn chiến lược kinh doanh 90 ngày, coaching tình huống khách hàng thực tế, đồng thời được review CRM và pipeline định kì hàng tuần, góp ý concept, bio, tuyến nội dung, hệ thống kéo lead và được đồng hành 1 chiến dịch thực chiến."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "STARTER",
    title: "KÍCH HOẠT XÂY KÊNH BẤT ĐỘNG SẢN",
    price: "1.490.000đ",
    originalPrice: "1.990.000đ",
    launchPrice: "1.490.000đ",
    registrationMethod: "Mua trực tiếp",
    isPopular: false,
    desc: "Phù hợp cho người mới bắt đầu",
    role: "Starter là gói nhập môn, giúp học viên bắt đầu xây dựng kênh nội dung cá nhân trong lĩnh vực bất động sản, đặc biệt tập trung vào video ngắn và TikTok.",
    target: "Gói này phù hợp với sale mới bắt đầu xây kênh, chưa có định vị rõ ràng, chưa biết viết nội dung, quay video và duy trì lịch đăng đều đặn.",
    learningFormat: "Bài giảng kết hợp thử thách thực hành",
    syllabus: [
      "Tư duy nền tảng One Sale Company",
      "Xác định chân dung và định vị cá nhân",
      "Xây chân dung khách hàng theo hành vi mua",
      "Chọn concept và trụ cột nội dung",
      "Xây ý tưởng và lịch nội dung",
      "Công thức content bán hàng cá nhân",
      "Viết caption và CTA theo từng nền tảng",
      "Công thức video ngắn bán hàng",
      "Kịch bản review dự án và xử lý phản đối",
      "Quay video bằng điện thoại, góc quay và quay theo batch",
      "Dựng video cơ bản bằng CapCut"
    ],
    features: [
      "Truy cập nội dung nền tảng",
      "Học qua bài giảng + Bài tập thực hành",
      "Xây tư duy, định vị và xây kênh cơ bản",
      "Biết viết content, quay và dựng video ngắn",
      "Tự bắt đầu triển khai bán hàng cá nhân"
    ],
    ctaText: "Chọn Gói Starter"
  },
  {
    id: "system",
    name: "SYSTEM",
    title: "CHƯƠNG TRÌNH CHỦ LỰC ONE SALE COMPANY",
    price: "5.900.000đ",
    originalPrice: "7.900.000đ",
    launchPrice: "5.900.000đ",
    registrationMethod: "Mua trực tiếp",
    isPopular: true,
    desc: "Phù hợp nhất để xây hệ thống bán hàng cá nhân",
    role: "System là gói đào tạo trọng tâm của chương trình, giúp học viên xây dựng hệ thống bán hàng cá nhân đầy đủ: từ tư duy, định vị, nội dung, video, livestream, AI, phễu lead đến CRM cá nhân.",
    target: "Gói này phù hợp với sale bất động sản đã đi làm, đang phụ thuộc vào nguồn lead từ công ty, muốn có kênh riêng, nội dung riêng, quy trình tạo lead và hệ thống quản lý khách hàng riêng.",
    learningFormat: "Bài giảng, workshop và bài tập thực hành",
    syllabus: [
      "Thiết kế mô hình công ty bán hàng cá nhân",
      "Xác định định vị cá nhân, thị trường, phân khúc và dự án trọng tâm",
      "Xây phương trình doanh thu cá nhân",
      "Đọc tài liệu dự án bằng AI",
      "Biến thông tin dự án thành thông điệp bán hàng",
      "Xử lý nỗi lo khách hàng bằng nội dung và bằng chứng",
      "Kiểm chứng thông tin, pháp lý và đạo đức truyền thông",
      "Xây concept kênh và hệ thống nội dung",
      "Viết content, caption, CTA theo từng nền tảng",
      "Sản xuất video ngắn bán hàng",
      "Quay video bằng điện thoại và dựng video bằng CapCut",
      "Thiết kế poster, thumbnail bằng Canva",
      "Ứng dụng AI trong hình ảnh, video và tái sử dụng nội dung đa nền tảng",
      "Livestream bán hàng cơ bản",
      "Xây link bio, form thu lead và lead magnet",
      "Thiết lập landing page và quy trình chăm sóc lead mới",
      "Hiểu chỉ số quảng cáo, viết brief và đánh giá chất lượng lead",
      "Tiếp nhận, phân loại và chấm điểm lead",
      "Quy trình tư vấn, đề xuất sản phẩm, xử lý phản đối và follow-up",
      "Xây CRM cá nhân, quản lý pipeline và dashboard KPI",
      "Capstone: tự triển khai chiến dịch bán hàng 90 ngày"
    ],
    features: [
      "Toàn bộ nền tảng kiến thức + hệ thống triển khai đầy đủ",
      "Học nội dung, video, livestream, AI, phễu lead, và CRM",
      "Workshop/ bài tập thực hành để phản hồi ngay",
      "Xây được cỗ máy bán hàng cá nhân bài bản",
      "Tối ưu hiệu suất bán hàng và quản lí khách hàng tốt hơn",
      "Đáng tiền nhất cho đa số Sales Bất động sản"
    ],
    ctaText: "Chọn Gói System"
  },
  {
    id: "partner",
    name: "PARTNER",
    title: "ĐỒNG HÀNH TRIỂN KHAI CHUYÊN SÂU ONE SALE COMPANY",
    price: "29.900.000đ",
    originalPrice: "39.900.000đ",
    launchPrice: "29.900.000đ",
    registrationMethod: "Đăng ký xét duyệt hoặc pre-order",
    isPopular: false,
    desc: "Phù hợp cho học viên và đội nhóm cần kèm sát",
    role: "Partner là gói đồng hành chuyên sâu, dành cho học viên hoặc đội nhóm cần được cố vấn trực tiếp trong quá trình xây dựng và vận hành hệ thống bán hàng cá nhân.",
    target: "Gói này phù hợp với sale nghiêm túc muốn triển khai thực chiến, trưởng nhóm kinh doanh, KOC/KOL bất động sản, hoặc học viên đã có nền tảng nhưng cần được review, điều chỉnh và đồng hành theo chiến dịch thật.",
    learningFormat: "System kết hợp coaching, review trực tiếp và đồng hành triển khai",
    syllabus: [
      "Được truy cập toàn bộ nội dung thuộc gói System và các nội dung cập nhật",
      "Audit hệ thống cá nhân",
      "Cố vấn chiến lược kinh doanh 90 ngày",
      "Review content, video, phễu lead và CRM",
      "Sales Clinic với tình huống khách hàng thực tế",
      "Đồng hành triển khai một chiến dịch bán hàng",
      "Review CRM, pipeline và hiệu suất hằng tuần"
    ],
    features: [
      "Bao gồm toàn bộ nội dung của nhóm System",
      "Audit hệ thống bán hàng cá nhân",
      "Cố vấn chiến lược kinh doanh 90 ngày",
      "Review content, video, phễu lead và CRM",
      "Sales clinic theo tình huống thực tế",
      "Đồng hành triển khai chiến dịch bán hàng",
      "Theo dõi CRM, pipeline và hiệu suất hàng tuần"
    ],
    ctaText: "Đồng Hành Đối Tác"
  }
];
