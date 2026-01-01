export default function ProcessSection() {
  return (
    <section id="process" className="mt-24">
      <div className="rounded-3xl border border-black/10 bg-white/80 p-8 transition-all duration-500 hover:shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/50">
          Quy trình
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Từ chuẩn bị đến bàn giao, mọi thứ đều minh bạch.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
            <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-emerald-700">
              1. Lên kế hoạch
            </p>
            <p className="mt-3 text-sm text-black/60">
              Xây dựng brief, chốt lịch trình và phân công ekip.
            </p>
          </div>
          <div className="group rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
            <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-emerald-700">
              2. Thực hiện
            </p>
            <p className="mt-3 text-sm text-black/60">
              Chụp với preset chia sẻ và checklist tại hiện trường.
            </p>
          </div>
          <div className="group rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
            <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-emerald-700">
              3. Bàn giao
            </p>
            <p className="mt-3 text-sm text-black/60">
              Kiểm duyệt, xuất file và gửi với thời hạn rõ ràng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
