import khoi_nguon_1 from "../../../assets/logo/section-khoi-nguon-tu-tinh-bang-huu-deco-1-scaled.webp";
import khoi_nguon_mobile from "../../../assets/logo/section-khoi-nguon-tu-tinh-bang-huu-bg-mobile.webp";
import Content from "./Content";
import { useEffect, useState } from "react";

const Section1 = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 850px)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 850px)");

    const listener = (e) => setIsMobile(e.matches);

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <section className="relative h-full transition-transform duration-300 ease-out">
      <h1 className="absolute -top-44 left-3 sm:-top-20 sm:left-6 md:-top-36 md:left-12 lg:-top-48 lg:left-24 z-40 text-white font-bold leading-tight flex flex-col">
        <span className="whitespace-nowrap text-[clamp(1.5rem,6vw,4rem)]">
          ĐỒNG HÀNH
        </span>
        <span className="whitespace-nowrap text-[clamp(1.5rem,6vw,4rem)]">
          KHỞI THỊNH VƯỢNG!
        </span>
      </h1>
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-white"
        style={{
          backgroundImage: `url(${isMobile ? "" : khoi_nguon_mobile})`,
        }}
      />
      <div className="relative">
        <img
          src={isMobile ? khoi_nguon_mobile : khoi_nguon_1}
          alt="section-khoi-nguon-bang-tinh-bang-huu"
          className="w-full object-cover"
        />

        <Content />
      </div>

      <svg
        viewBox="0 0 1440 220"
        className={`absolute ${isMobile ? "hidden" : "md:-bottom-20"} left-0 w-full z-50`}
        preserveAspectRatio="none"
        style={{ height: "clamp(80px, 15vw, 220px)" }}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ff2b55" />
          </linearGradient>
        </defs>

        <path
          fill="url(#grad1)"
          d="
      M0,120
      C400,140 900,100 1440,40
      L1440,160
      C900,220 400,200 0,160
      Z
    "
        />
      </svg>
    </section>
  );
};

export default Section1;
