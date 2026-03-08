import tamnhinImg from "../../../assets/logo/section-tam-nhin-bg.png";

const Section2 = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-white">
      <div
        className="absolute top-10 inset-0 bg-cover bg-center scale-75"
        style={{ backgroundImage: `url(${tamnhinImg})` }}
      />
      <div className="relative max-w-5xl mx-auto px-6 ">
        <div className="flex items-center justify-center gap-3 text-blue-600 font-semibold tracking-widest mb-6">
          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
          <span className="font-bold">TẦM NHÌN</span>
          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
        </div>
        <h2 className="text-xl md:text-4xl font-bold leading-tight text-slate-900 text-center">
          Ami&amp;M xây dựng{" "}
          <span className="bg-linear-to-r from-blue-500 to-red-600 bg-clip-text text-transparent">
            hệ sinh thái đa ngành
          </span>
          <p>
            <span className="bg-linear-to-r from-blue-500 to-red-600 bg-clip-text text-transparent">
              phát triển nhanh và bền vững
            </span>{" "}
            <span>trên hành trình</span>
          </p>
          <p>kiến tạo sự thịnh vượng đích thực</p>
        </h2>
      </div>
    </section>
  );
};

export default Section2;
