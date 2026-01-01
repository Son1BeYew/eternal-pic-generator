export default function FeaturesSection() {
  return (
    <section id="features" className="mt-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/50">
            Tính năng
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Công cụ cho những ngày sản xuất suôn sẻ.
          </h2>
        </div>
        <a
          className="text-sm font-semibold text-emerald-700 transition-all duration-300 hover:text-emerald-800 hover:underline"
          href="#process"
        >
          Xem quy trình →
        </a>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="group rounded-2xl border border-black/10 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-emerald-700">
            Từ brief đến call sheet
          </p>
          <p className="mt-3 text-sm text-black/60">
            Thu thập ghi chú khách hàng, xây dựng shot list và chia sẻ lịch
            trình không cần bảng tính phức tạp.
          </p>
        </div>
        <div className="group rounded-2xl border border-black/10 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-emerald-700">
            Preset đồng nhất
          </p>
          <p className="mt-3 text-sm text-black/60">
            Giữ chỉnh sửa nhất quán giữa các team với preset chia sẻ và điểm
            kiểm tra đơn giản.
          </p>
        </div>
        <div className="group rounded-2xl border border-black/10 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-emerald-700">
            Khách hàng theo dõi
          </p>
          <p className="mt-3 text-sm text-black/60">
            Cung cấp cho khách hàng góc nhìn rõ ràng về tiến độ với bản xem
            trước và timeline bàn giao.
          </p>
        </div>
      </div>
    </section>
  );
}
