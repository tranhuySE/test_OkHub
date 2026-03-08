import deco_1 from "../../assets/logo/header-deco-1.png";
import deco_2 from "../../assets/logo/header-deco-2.png";
import deco_3 from "../../assets/logo/header-deco-3.png";
import deco_4 from "../../assets/logo/header-deco-4.svg";
import logo from "../../assets/logo/logo-1.svg";
import location from "../../assets/logo/location.svg";
import phone from "../../assets/logo/phone.svg";
import email from "../../assets/logo/email.svg";
import anh_1 from "../../assets/logo/section-su-menh-item-1-1.webp";
import anh_2 from "../../assets/logo/Rectangle-34625936-1.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function MenuOverlay({ open, setOpen }) {
  const menuItems = [
    { number: "01", title: "Về Chúng Tôi" },
    { number: "02", title: "Từ Điển Ami" },
    { number: "03", title: "Cơ Hội Nghề Nghiệp" },
    { number: "04", title: "Tin Tức" },
  ];

  const contactItems = [
    {
      img: location,
      title: "Địa chỉ",
      content:
        "Số 14 phố Đỗ Hành, phường Nguyễn Du, quận Hai Bà Trưng, thành phố Hà Nội",
    },
    { img: phone, title: "Liên hệ hotline", content: "(+84) 243 201 2889" },
    { img: email, title: "Email", content: "Info@amigroup.com.vn" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)]
      ${open ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="relative w-full h-full bg-linear-to-br from-[#1e1e5f] via-[#2f2e79] to-[#0f172a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-3 sm:px-6 md:px-12 lg:px-24 py-4 z-50 border-b border-white/70 md:border-none ">
          <img
            src={logo}
            alt="Logo"
            className="w-20 sm:w-24 md:w-32 lg:w-36 object-contain"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-3xl sm:text-4xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>
        <img
          src={deco_1}
          alt="deco_1"
          className="absolute bottom-0 left-0 brightness-0 invert opacity-20 blur-[1px] pointer-events-none"
        />
        <img
          src={deco_2}
          alt="deco_2"
          className="absolute bottom-0 left-1/4 brightness-0 invert opacity-20 blur-[1px] pointer-events-none"
        />
        <img
          src={deco_3}
          alt="deco_3"
          className="absolute bottom-0 right-0 brightness-0 invert opacity-20 blur-[1px] pointer-events-none"
        />
        <img
          src={deco_4}
          alt="deco_4"
          className="absolute -bottom-64 -left-84 scale-200 md:-bottom-88 md:-left-154 lg:-bottom-48 lg:-left-96 lg:scale-100 z-10 pointer-events-none"
        />
        <div
          className={`absolute flex bottom-8 right-8 md:bottom-4 md:right-4 lg:top-20 lg:right-2/7 rounded-full w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 items-center justify-center group cursor-pointer transition-all duration-600 delay-600 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      ${open ? "opacity-100 scale-100" : "opacity-0 scale-0"} origin-center`}
        >
          <div className="absolute inset-0 rounded-full bg-red-500 transition-transform duration-500 ease-out group-hover:scale-125"></div>
          <h1
            className={`relative z-10 flex flex-col text-center items-center text-white font-bold text-sm md:text-2xl lg:text-3xl transition-opacity duration-500 delay-200
                        ${open ? "opacity-100" : "opacity-0"}`}
          >
            <FaArrowRight className="-rotate-45 mb-1" />
            <span>Kết nối với</span>
            <span>Ami&M</span>
          </h1>
        </div>
        <div
          className={`absolute -right-10 top-25 hidden md:flex w-100 h-100 rounded-full items-center justify-center cursor-pointer transform transition-transform duration-700 delay-700 hover:scale-125
                      ${open ? "opacity-100 scale-100" : "opacity-0 scale-0"} origin-center overflow-hidden`}
        >
          <img
            src={anh_1}
            alt="deco_5"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`absolute right-1/4 -bottom-10 hidden md:flex w-100 h-100 rounded-full items-center justify-center cursor-pointer transform transition-transform duration-1000 delay-1000 hover:scale-125
                      ${open ? "opacity-100 scale-100" : "opacity-0 scale-0"} origin-center overflow-hidden`}
        >
          <img
            src={anh_2}
            alt="deco_6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex mt-16 sm:mt-24 md:mt-32 lg:mt-36 h-full px-6 sm:px-6 md:px-12 lg:px-24">
          <div className="space-y-8 sm:space-y-8 md:space-y-12">
            <div>
              <h2 className="hidden md:block font-bold text-white/50 text-sm mb-2">
                MENU
              </h2>
              <div className="space-y-3 sm:space-y-8 md:space-y-3 lg:space-y-5">
                {menuItems.map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-2 transition-all pb-2 border-b border-white/30 md:border-none duration-700 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <p className="text-red-500 text-xs sm:text-sm md:text-lg lg:text-xl font-medium">
                      {item.number}/
                    </p>

                    <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-6">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-0.5 sm:space-y-3 md:space-y-1 lg:space-y-2">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-baseline gap-2 transition-all duration-700 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-4 h-4 shrink-0 translate-y-0.5"
                  />
                  <div className="flex-1">
                    <p className="text-white text-sm md:text-base leading-relaxed w-full max-w-[60%]">
                      <span className="mr-1">{item.title}:</span>
                      <span className="font-bold">{item.content}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-start text-white font-bold text-xl">
              <span>VIE</span>
              <span className="text-white/50">ENG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
