import { useEffect, useRef } from "react";
import bannerImg from "../../assets/logo/Banner_AmiM-2048x1088.webp";

const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const move = Math.min(scrollY * 0.5, window.innerHeight * 0.5);

          if (bannerRef.current) {
            bannerRef.current.style.transform = `translateY(-${move}px)`;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="sticky top-0 h-screen -z-50 overflow-hidden">
      <div
        ref={bannerRef}
        className="h-full w-full will-change-transform transition-transform duration-300 ease-out"
      >
        <div className="relative w-full h-screen">
          <img
            src={bannerImg}
            alt="Amigm Group"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
