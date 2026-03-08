import img_su_menh from "../../../assets/logo/section-su-menh-item-1-1.webp";
import canbonhanhvien from "../../../assets/logo/Component-50-1.png";
import khachhang from "../../../assets/logo/section-su-menh-item-2.svg";
import doitac from "../../../assets/logo/Component-50.png";
import congdong from "../../../assets/logo/section-su-menh-item-4.svg";

import img_khachhang from "../../../assets/logo/Su-menh-voi-khach-hang.webp";
import img_doitac from "../../../assets/logo/Su-menh-voi-doi-tac.webp";
import img_congdong from "../../../assets/logo/Su-menh-voi-cong-dong.webp";

import { useEffect, useRef, useState } from "react";

const Section3 = () => {
  const contentsItems = [
    {
      icon: canbonhanhvien,
      img: img_su_menh,
      title: "Với Cán Bộ Nhân Viên",
      description:
        "Cảm thấy hòa hợp, gắn kết, được trân trọng, được tạo cơ hội để khám phá, phát triển, khẳng định giá trị bản thân.",
    },
    {
      icon: khachhang,
      img: img_khachhang,
      title: "Với Khách Hàng",
      description:
        "Cung cấp các sản phẩm - dịch vụ chất lượng cao với trải nghiệm tốt nhất dành cho Khách hàng và mang đến tổng lợi ích ngày một lớn hơn.",
    },
    {
      icon: doitac,
      img: img_doitac,
      title: "Với Đối Tác",
      description:
        "Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới những giá trị tốt đẹp.",
    },
    {
      icon: congdong,
      img: img_congdong,
      title: "Với Cộng Đồng",
      description:
        "Hài hoà lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực cho các hoạt động hướng về cộng đồng.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 648);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const observers = itemRefs.current.map((ref, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        {
          threshold: 0.5,
          rootMargin: "-30% 0px -30% 0px",
        },
      );
      if (ref) observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [isMobile]);

  return (
    <div className="flex flex-col w-full bg-white">
      <div className="sticky md:relative md:top-20 z-30 top-0 bg-white flex flex-col items-center justify-center">
        <svg
          viewBox="0 0 400 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <defs>
            <radialGradient id="glowFill" cx="50%" cy="0%" rx="50%" ry="100%">
              <stop offset="0%" stopColor="#c8c8d8" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#d8d8e8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="strokeGrad"
              x1="0"
              y1="0"
              x2="400"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="25%" stopColor="#b0b0c8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#a0a0c0" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#b0b0c8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 0 75 Q 200 0 400 75 Z" fill="url(#glowFill)" />
          <path
            d="M 0 75 Q 200 0 400 75"
            fill="none"
            stroke="url(#strokeGrad)"
            strokeWidth="0.5"
          />
        </svg>

        <div className="md:absolute bottom-0 flex flex-col items-center text-center px-4 pb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
            <h1 className="text-sm font-bold uppercase text-blue-600 tracking-widest">
              Sứ Mệnh
            </h1>
            <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
          </div>
          <h2
            className="text-xl md:text-5xl font-bold leading-tight text-center whitespace-nowrap"
            style={{
              background: "linear-gradient(to right, #3b82f6, #dc2626)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mang lại cuộc sống tốt đẹp hơn
            <br />
            cho những Người đồng hành
          </h2>
        </div>
      </div>

      <div className="md:hidden sticky top-45 z-20 w-full p-4 bg-white">
        <img
          src={img_su_menh}
          alt="Sứ Mệnh"
          className="w-full object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full min-h-screen px-8 md:px-16 gap-12 mt-12 items-start">
        <div className="flex md:flex-col w-full md:w-1/2 py-12 md:py-24 gap-12">
          <div className="sticky left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
            <span className="text-sm font-semibold tracking-widest text-[#2F2E79] transition-all duration-500">
              {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1}/
              {contentsItems.length < 10
                ? `0${contentsItems.length}`
                : contentsItems.length}
            </span>
          </div>
          <div>
            {contentsItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="flex flex-col gap-3 md:pl-20 pb-8 transition-all duration-700"
                style={
                  isMobile ? {} : { opacity: activeIndex === index ? 1 : 0.3 }
                }
              >
                <div className="w-full rounded-2xl transition-all duration-500 flex items-center justify-between">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-16 h-16 md:w-24 md:h-24 object-contain transition-all duration-500"
                  />
                  <span className="md:hidden">/{index + 1}</span>
                </div>
                <h3
                  className="font-bold uppercase tracking-wide text-3xl transition-colors duration-500"
                  style={{
                    color: isMobile
                      ? "#1d4ed8"
                      : activeIndex === index
                        ? "#1d4ed8"
                        : "#93c5fd",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-bold leading-relaxed max-w-sm transition-colors duration-500"
                  style={{
                    color: isMobile
                      ? "#000000"
                      : activeIndex === index
                        ? "#000000"
                        : "#6b7280",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full hidden md:w-1/2 md:flex sticky top-0 z-20 h-screen items-center">
          {contentsItems.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={item.title}
              className="w-full object-cover shadow-lg rounded-2xl transition-all duration-700 absolute"
              style={{
                opacity: activeIndex === index ? 1 : 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
