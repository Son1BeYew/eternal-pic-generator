import SessionOverview from "../ui/SessionOverview";

export default function HeroSection() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
      <div>
        <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
          Mùa mới
        </p>
        <h1 className="animate-fade-in-up animation-delay-100 mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Biến hình ảnh trở thành tác phẩm nghệ thuật của chính bạn
        </h1>
        <p className="animate-fade-in-up animation-delay-200 mt-6 text-lg text-black/70">
          Tạo ra những hình ảnh tuyệt đẹp chỉ từ những hình ảnh đơn giản.
AI của chúng tôi biến trí tưởng tượng của bạn thành hiện thực với chất lượng chuyên nghiệp chỉ trong vài giây.
        </p>
        <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-wrap gap-4">
          <a
            className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md active:scale-95"
            href="#contact"
          >
            Bắt đầu dự án
          </a>
          <a
            className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:shadow-md active:scale-95"
            href="#gallery"
          >
            Xem thư viện
          </a>
        </div>
        <div className="animate-fade-in-up animation-delay-400 mt-10 grid grid-cols-2 gap-6 text-sm text-black/60 sm:grid-cols-3">
          <div className="transition-transform duration-300 hover:scale-105">
            <p className="text-2xl font-semibold text-black">240+</p>
            <p>Ảnh đã tạo</p>
          </div>
          <div className="transition-transform duration-300 hover:scale-105">
            <p className="text-2xl font-semibold text-black">30s</p>
            <p>Thời gian hoàn thành</p>
          </div>
          <div className="transition-transform duration-300 hover:scale-105">
            <p className="text-2xl font-semibold text-black">18</p>
            <p>Đối tác sáng tạo</p>
          </div>
        </div>
      </div>
      <SessionOverview />
    </section>
  );
}
