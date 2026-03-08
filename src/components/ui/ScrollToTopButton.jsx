import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScroll && currentScroll > 200) {
        // scroll lên
        setShow(true);
      } else {
        // scroll xuống
        setShow(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-500 ease-out hover:scale-110
      ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      <FaChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
