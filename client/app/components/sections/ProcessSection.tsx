export default function ProcessSection() {
  return (
    <section id="process" className="mt-24">
      <div className="rounded-3xl border border-black/10 bg-white/80 p-8 transition-all duration-500 hover:shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/50">
          Quy trình
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Từ ý tưởng đến hình ảnh, chỉ trong vài giây.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
            <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-emerald-700">
              1. Nhập mô tả
            </p>
            <p className="mt-3 text-sm text-black/60">
              Viết prompt mô tả hình ảnh bạn muốn tạo ra.
            </p>
          </div>
          <div className="group rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
            <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-emerald-700">
              2. AI tạo ảnh
            </p>
            <p className="mt-3 text-sm text-black/60">
              Chọn AI model và để công nghệ làm phép màu.
            </p>
          </div>
          <div className="group rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
            <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-emerald-700">
              3. Tải xuống
            </p>
            <p className="mt-3 text-sm text-black/60">
              Lưu, chỉnh sửa và chia sẻ tác phẩm của bạn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
