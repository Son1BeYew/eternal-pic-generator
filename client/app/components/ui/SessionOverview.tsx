"use client";

export default function SessionOverview() {
  return (
    <div className="relative max-w-md">
      {/* Floating Glow Effects */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl" />
      
      <div className="relative space-y-3">
        {/* Hero Card with Gradient */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 p-5 shadow-lg shadow-emerald-600/25 transition-all hover:shadow-xl hover:shadow-emerald-600/30">
          {/* Animated Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
          </div>
          
          {/* Floating Shapes */}
          <div className="absolute right-3 top-3 h-16 w-16 rounded-full bg-white/10 blur-xl" />
          
          <div className="relative">
            {/* Header */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 backdrop-blur-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-50">Đang hoạt động</span>
                </div>
                <h3 className="text-lg font-bold text-white">Tạo ảnh AI</h3>
                <p className="mt-0.5 text-xs text-emerald-100">Biến văn bản thành nghệ thuật</p>
              </div>
              
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/10 p-2.5 backdrop-blur-sm">
                <p className="text-xl font-bold text-white">240+</p>
                <p className="text-xs text-emerald-100">Ảnh tạo</p>
              </div>
              <div className="rounded-lg bg-white/10 p-2.5 backdrop-blur-sm">
                <p className="text-xl font-bold text-white">3-5s</p>
                <p className="text-xs text-emerald-100">Xử lý</p>
              </div>
              <div className="rounded-lg bg-white/10 p-2.5 backdrop-blur-sm">
                <p className="text-xl font-bold text-white">18+</p>
                <p className="text-xs text-emerald-100">Đối tác</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-200/50">
            <div className="absolute right-0 top-0 h-12 w-12 rounded-full bg-emerald-200/40 blur-xl" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 transition-transform group-hover:scale-110">
                <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Tạo ảnh</h4>
                <p className="text-xs text-slate-600">Từ văn bản</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-200/50">
            <div className="absolute right-0 top-0 h-12 w-12 rounded-full bg-blue-200/40 blur-xl" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 transition-transform group-hover:scale-110">
                <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Chỉnh sửa</h4>
                <p className="text-xs text-slate-600">Thông minh</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-teal-200/50">
            <div className="absolute right-0 top-0 h-12 w-12 rounded-full bg-teal-200/40 blur-xl" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-teal-100 transition-transform group-hover:scale-110">
                <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Nâng cấp</h4>
                <p className="text-xs text-slate-600">4K Ultra</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200/50">
            <div className="absolute right-0 top-0 h-12 w-12 rounded-full bg-slate-200/40 blur-xl" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 transition-transform group-hover:scale-110">
                <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Trang phục</h4>
                <p className="text-xs text-slate-600">Đổi outfit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 shadow-sm backdrop-blur-sm">
          <div className="flex -space-x-1.5">
            <div className="h-5 w-5 rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-teal-500 shadow-sm" />
            <div className="h-5 w-5 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-cyan-500 shadow-sm" />
            <div className="h-5 w-5 rounded-full border-2 border-white bg-gradient-to-br from-slate-400 to-slate-500 shadow-sm" />
          </div>
          <p className="text-xs font-semibold text-slate-700">
            <span className="text-emerald-600">240+</span> người tin dùng
          </p>
        </div>
      </div>
    </div>
  );
}
