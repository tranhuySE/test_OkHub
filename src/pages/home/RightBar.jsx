import { FaBars } from "react-icons/fa";

const RightBar = ({ onTop, setOpen }) => {
  return (
    <div className="ml-auto flex items-center gap-2 sm:gap-2 md:gap-4">
      <div
        className={`${onTop ? "text-white" : "text-[#2f2e79]"} font-bold flex gap-1 items-center rounded-4xl border border-white/30 p-1 text-xs sm:text-sm`}
      >
        <button className="w-8 h-8 sm:w-10 sm:h-10 text-white flex items-center justify-center rounded-full bg-[#2f2e79]">
          VIE
        </button>
        <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full">
          ENG
        </button>
      </div>

      <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-black md:hidden" onClick={() => setOpen(true)}>
        <FaBars />
      </button>

      <button
        className={`${onTop ? "text-white" : "text-[#2f2e79]"} hidden md:flex font-bold rounded-4xl px-6 py-3 gap-2 items-center border border-white/30`}
        onClick={() => setOpen(true)}
      >
        MENU <FaBars />
      </button>
    </div>
  );
};

export default RightBar;
