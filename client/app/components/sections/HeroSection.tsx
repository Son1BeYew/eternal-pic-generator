import SessionOverview from "../ui/SessionOverview";

export default function HeroSection() {
  return (
    <section className="relative grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 backdrop-blur-sm animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          
        </div>

        <h1 className="animate-fade-in-up animation-delay-100 mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Biến ý tưởng thành <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">nghệ thuật</span>
        </h1>

        <p className="animate-fade-in-up animation-delay-200 mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
          Công nghệ AI tiên tiến giúp bạn tạo ra những hình ảnh tuyệt đẹp chỉ trong vài giây. 
          Từ ý tưởng đến hiện thực, mọi thứ đều có thể.
        </p>

        <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-wrap gap-3">
          <a
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-600/40 active:scale-95"
            href="#contact"
          >
            <svg className="h-4 w-4 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Bắt đầu ngay
          </a>
          <a
            className="group inline-flex items-center gap-1.5 rounded-full border-2 border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg active:scale-95"
            href="#gallery"
          >
            Xem demo
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <div className="animate-fade-in-up animation-delay-400 mt-12 grid grid-cols-3 gap-8">
          <div className="group">
            <div className="flex items-baseline gap-1">
              <p className="text-3xl font-bold text-slate-900">240</p>
              <span className="text-xl font-bold text-emerald-600">+</span>
            </div>
            <p className="mt-1 text-sm text-slate-600">Ảnh đã tạo</p>
          </div>
          <div className="group">
            <div className="flex items-baseline gap-1">
              <p className="text-3xl font-bold text-slate-900">30</p>
              <span className="text-xl font-bold text-emerald-600">s</span>
            </div>
            <p className="mt-1 text-sm text-slate-600">Thời gian</p>
          </div>
          <div className="group">
            <div className="flex items-baseline gap-1">
              <p className="text-3xl font-bold text-slate-900">18</p>
              <span className="text-xl font-bold text-emerald-600">+</span>
            </div>
            <p className="mt-1 text-sm text-slate-600">Đối tác</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 animate-fade-in-up animation-delay-200">
        <SessionOverview />
      </div>
    </section>
  );
}
