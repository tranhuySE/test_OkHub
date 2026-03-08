import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Content = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="absolute inset-x-0 top-10 z-40 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl text-white font-bold">
        <h4 className="text-xs sm:text-sm tracking-wide opacity-90">
          CÔNG TY CỔ PHẦN TẬP ĐOÀN AMI&M VIỆT NAM
        </h4>

        <div className="flex flex-col gap-8 md:gap-4 lg:gap-12 pt-6 sm:pt-8 md:pt-4 lg:pt-8">
          <h1 className="flex flex-col gap-4 font-bold leading-[0.95]">
            <span className="whitespace-nowrap text-[clamp(1.8rem,6vw,4rem)]">
              KHỞI NGUỒN TỪ
            </span>
            <span className="whitespace-nowrap text-[clamp(1.8rem,6vw,4rem)]">
              TÌNH BẰNG HỮU
            </span>
          </h1>

          <p className="max-w-[55ch] text-[clamp(1rem,1.2vw,1.25rem)] leading-relaxed text-white/90">
            Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập
            đầu tiên gặp nhau. Những người bạn cùng chung chí hướng đã nỗ lực
            không ngừng nghỉ để đến ngày 9.9.2019, Ami&M chính thức đi vào hoạt
            động.
          </p>

          <p className="max-w-[55ch] text-[clamp(1rem,1.2vw,1.25rem)] leading-relaxed text-white/90">
            Say sưa trong những vai trò riêng có của mình, mỗi AM khi đó không
            chỉ dừng ở làm đủ, làm tốt mà còn làm tốt hơn. Học hỏi lẫn nhau, học
            từ sách vở, học qua trải nghiệm, học từ những người đi trước, chúng
            tôi đã bước ra khỏi vùng an toàn, dám nghĩ khác để hướng tới những
            điều tốt đẹp không chỉ cho riêng mình. Chúng tôi khám phá được
            khoảng trống để tạo ra những điều khác biệt và cả khoảng trống cho
            sự phát triển của chính mỗi người.
          </p>

          <button
            onMouseMove={handleMove}
            style={{
              "--x": `${pos.x}px`,
              "--y": `${pos.y}px`,
            }}
            className="relative overflow-hidden w-fit px-6 py-3 rounded-full bg-[#2f2e79] text-sm sm:text-base font-semibold ripple-btn transition-all hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-2">
              HÀNH TRÌNH CỦA AMI&M
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
