export default function ContactSection() {
  return (
    <section id="contact" className="mt-24">
      <div className="rounded-3xl bg-black px-8 py-10 text-white transition-all duration-500 hover:shadow-2xl md:flex md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
            Bắt đầu ngay
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Sẵn sàng tạo ảnh AI chuyên nghiệp?
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Đăng ký miễn phí và trải nghiệm sức mạnh của AI trong chỉnh sửa ảnh.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
          <a
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            href="/auth"
          >
            Dùng thử miễn phí
          </a>
          <a
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 active:scale-95"
            href="/pricing"
          >
            Xem bảng giá
          </a>
        </div>
      </div>
    </section>
  );
}
