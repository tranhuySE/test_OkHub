import { useEffect, useState } from "react";
import logo_blue from "../../assets/logo/logo-blue.svg";
import RightBar from "./RightBar";
import MenuOverlay from "./Menu";

const Navbar = () => {
  const [showNavbar, setShowNavBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOnTop, setIsOnTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }
      setLastScrollY(currentScroll);
      if (currentScroll <= 3) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <div
        className={`fixed w-full top-0 left-0 right-0 ${isOnTop ? "bg-transparent pt-2" : "bg-white"} z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-[150%]"}`}
      >
        <div
          className={`w-full pt-4 flex items-center mx-auto px-3 sm:px-6 md:px-12 lg:px-24`}
        >
          <img
            src={logo_blue}
            alt="Amigm Group"
            className={`max-w-24 sm:max-w-32 md:max-w-40 object-cover origin-left transition-transform duration-700 ease-in-out ${isOnTop ? "scale-150" : "scale-90"}`}
          />
          <RightBar onTop={isOnTop} setOpen={setOpen} />
        </div>
      </div>
      <MenuOverlay open={open} setOpen={setOpen} />
    </>
  );
};
export default Navbar;
